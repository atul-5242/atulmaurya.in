// src/hooks/useYouTube.js
import { useEffect, useState } from "react";

/**
 * React-only YouTube fetcher.
 * Needs:
 *  - apiKey (YouTube Data API v3)
 *  - channelId (your channel)
 */
export function useYouTube({ apiKey, channelId, maxResults = 12 }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setLoading(true);

        // 1) Find latest uploads from channel
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search` +
            `?key=${apiKey}` +
            `&channelId=${channelId}` +
            `&part=snippet,id` +
            `&order=date` +
            `&maxResults=${maxResults}`
        ).then(r => r.json());

        if (searchRes?.error) throw new Error(searchRes.error.message);

        const ids = (searchRes.items || [])
          .map(i => i?.id?.videoId)
          .filter(Boolean);

        if (ids.length === 0) {
          if (!cancelled) {
            setVideos([]);
            setErr("");
            setLoading(false);
          }
          return;
        }

        // 2) Get stats + snippet (for tags, publishedAt, title)
        const detailsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos` +
            `?key=${apiKey}` +
            `&id=${ids.join(",")}` +
            `&part=snippet,statistics`
        ).then(r => r.json());

        if (detailsRes?.error) throw new Error(detailsRes.error.message);

        const mapped = (detailsRes.items || []).map(v => {
          const id = v.id;
          const s = v.snippet || {};
          const st = v.statistics || {};
          // Use hqdefault for reliability (maxres doesn’t exist on all videos)
          const thumb =
            s?.thumbnails?.maxres?.url ||
            s?.thumbnails?.high?.url ||
            `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

          return {
            id,
            platform: "youtube",
            title: s.title,
            description: s.description,
            url: `https://www.youtube.com/watch?v=${id}`,
            thumbnail: thumb,
            views: st?.viewCount ? Number(st.viewCount) : undefined,
            date: s.publishedAt,
            tags: Array.isArray(s?.tags) ? s.tags : [], // YouTube tags if available
          };
        });

        // Sort newest first
        mapped.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        if (!cancelled) {
          setVideos(mapped);
          setErr("");
        }
      } catch (e) {
        if (!cancelled) setErr(e.message || "Failed to load YouTube.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [apiKey, channelId, maxResults]);

  return { videos, loading, err };
}
