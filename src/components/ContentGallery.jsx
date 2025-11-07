// src/components/ContentGallery.jsx
import React, { useEffect, useMemo, useState } from "react";

/* --- React-only YouTube fetcher: 2 recent + 4 most viewed (total 6) --- */
function useYouTubeTopMixed({ apiKey, channelId, recentCount = 2, mostCount = 4 }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);

        // Fetch more than needed so "most viewed" has some pool to sort from
        const totalNeeded = recentCount + mostCount;
        const poolSize = Math.min(Math.max(totalNeeded * 5, 24), 50); // 24–50
        const searchUrl =
          `https://www.googleapis.com/youtube/v3/search` +
          `?key=${apiKey}` +
          `&channelId=${channelId}` +
          `&part=snippet,id` +
          `&order=date` +
          `&maxResults=${poolSize}`;

        const search = await fetch(searchUrl).then(r => r.json());
        if (search?.error) {
          const reason = search.error?.errors?.[0]?.reason || "";
          if (reason === "quotaExceeded") throw new Error("YouTube data limit reached for today.");
          throw new Error(search.error.message || "Failed to load YouTube.");
        }

        const ids = (search.items || [])
          .map(i => i?.id?.videoId)
          .filter(Boolean);

        if (ids.length === 0) {
          if (!cancelled) {
            setVideos([]);
            setErr("");
          }
          return;
        }

        const details = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${ids.join(",")}&part=snippet,statistics`
        ).then(r => r.json());

        if (details?.error) {
          const reason = details.error?.errors?.[0]?.reason || "";
          if (reason === "quotaExceeded") throw new Error("YouTube data limit reached for today.");
          throw new Error(details.error.message || "Failed to load YouTube.");
        }

        const mapped = (details.items || []).map(v => {
          const s = v.snippet || {};
          const st = v.statistics || {};
          const id = v.id;
          const thumb =
            s?.thumbnails?.maxres?.url ||
            s?.thumbnails?.high?.url ||
            `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

          return {
            id,
            platform: "youtube",
            title: s.title,
            url: `https://www.youtube.com/watch?v=${id}`,
            thumbnail: thumb,
            views: st?.viewCount ? Number(st.viewCount) : 0,
            date: s.publishedAt,
            tags: Array.isArray(s?.tags) ? s.tags : [],
          };
        });

        // 1) Pick top N most recent (by date desc)
        const byDateDesc = [...mapped].sort((a, b) => new Date(b.date) - new Date(a.date));
        const recent = byDateDesc.slice(0, recentCount).map(v => ({ ...v, badge: "recent" }));
        const recentIds = new Set(recent.map(v => v.id));

        // 2) From the remaining, pick most viewed (desc)
        const remaining = mapped.filter(v => !recentIds.has(v.id));
        const byViewsDesc = remaining.sort((a, b) => b.views - a.views);
        const mostViewed = byViewsDesc.slice(0, mostCount).map(v => ({ ...v, badge: "most" }));

        // 3) Final ordered list: recent first, then most viewed
        const finalList = [...recent, ...mostViewed];

        if (!cancelled) {
          setVideos(finalList);
          setErr("");
        }
      } catch (e) {
        const msg = String(e?.message || e);
        let friendly = msg;
        if (/quota/i.test(msg) || /exceed/i.test(msg)) {
          friendly = "YouTube data limit reached for today.";
        }
        if (!cancelled) setErr(friendly);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [apiKey, channelId, recentCount, mostCount]);

  return { videos, loading, err };
}

/* ------------------- UI ------------------- */
const ContentGallery = React.forwardRef((props, ref) => {
  const { videos, loading, err } = useYouTubeTopMixed({
    apiKey: import.meta.env.VITE_YT_API_KEY,
    channelId: import.meta.env.VITE_YT_CHANNEL_ID,
    recentCount: 2,
    mostCount: 4,
  });

  const allTags = useMemo(() => {
    const s = new Set();
    videos.forEach(v => (v.tags || []).forEach(t => s.add(t)));
    return Array.from(s).slice(0, 12);
  }, [videos]);

  const channelUrl =
    import.meta.env.VITE_YT_CHANNEL_HANDLE
      ? `https://www.youtube.com/${import.meta.env.VITE_YT_CHANNEL_HANDLE}`
      : `https://www.youtube.com/channel/${import.meta.env.VITE_YT_CHANNEL_ID}`;

  const formatDate = (d) =>
    new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

  const YouTubeIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const Skeleton = () => (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-2xl shadow-sm ring-1 ring-gray-200/60 dark:ring-gray-700/60 overflow-hidden">
      <div className="w-full h-52 bg-gray-200 dark:bg-gray-700" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );

  const Badge = ({ type }) => {
    if (type === "recent") {
      return (
        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white shadow">
          Recent
        </span>
      );
    }
    if (type === "most") {
      return (
        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500 text-white shadow">
          Most viewed
        </span>
      );
    }
    return null;
  };

  return (
    <section ref={ref} id="content-gallery" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          See cool tech videos from my YouTube channel
          </h2>
        </div>

        {/* Error & custom fallback message */}
        {err && (
          <div className="mb-6">
            <div className="text-center text-sm text-red-600 dark:text-red-400 mb-3">
              {err}
            </div>
            <div className="mx-auto max-w-2xl rounded-xl border border-yellow-300/60 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-3 text-center text-sm text-yellow-900 dark:text-yellow-100">
              <p className="leading-relaxed">
                Youtube video fetching on prortfoilio is reacher please checkout the yotube chnanle this to get all video access easy Thank you.&nbsp;
                <a
                  href="https://www.youtube.com/@atulmaurya5242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  https://www.youtube.com/@atulmaurya5242
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Grid (total 6: 2 recent + 4 most viewed) */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)}
          </div>
        ) : videos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(v => (
                <div key={v.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm ring-1 ring-gray-200/60 dark:ring-gray-700/60 overflow-hidden hover:shadow-xl transition-all">
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative">
                      <img src={v.thumbnail} alt={v.title} className="w-full h-52 object-cover" loading="lazy" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white p-3 rounded-full shadow-lg">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/80 text-gray-800 dark:text-gray-100 shadow">
                        <YouTubeIcon /><span>YouTube</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1">{v.title}</h3>
                        <div className="mt-0.5 flex-shrink-0">
                          <Badge type={v.badge} />
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{Intl.NumberFormat().format(v.views)} views</span>
                        <span>•</span>
                        <span>{formatDate(v.date)}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Optional tags row + CTA */}
            <div className="mt-10 flex flex-col items-center gap-3">
              {allTags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {allTags.slice(0, 6).map(t => (
                    <span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                      #{t}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
              >
                <YouTubeIcon /> Go to my channel
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-14">
            <div className="mx-auto w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
            <p className="text-gray-600 dark:text-gray-300">No videos found yet.</p>
            <div className="mt-4">
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
              >
                <YouTubeIcon /> Go to my channel
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

ContentGallery.displayName = "ContentGallery";
export default ContentGallery;
