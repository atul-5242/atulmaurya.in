export const contentData = {
  // YouTube Videos
  youtube: [
    {
      id: 1,
      title: "DevOps Roadmap Overview 2025 | Complete Guide from Basics to Advanced (Step-by-Step)",
      url: "https://youtu.be/QN1MY2I4Qis",
      thumbnail: "https://img.youtube.com/vi/example1/maxresdefault.jpg",
      views: "10",
      date: "2023-10-15",
      tags: ["web development", "mern", "tutorial"],
      platform: "youtube"
    },
    {
      id: 2,
      title: "Advanced React Patterns Explained",
      url: "https://youtube.com/watch?v=example2",
      thumbnail: "https://img.youtube.com/vi/example2/maxresdefault.jpg",
      views: "25K",
      date: "2023-09-22",
      tags: ["react", "frontend", "web development"],
      platform: "youtube"
    },
    // Add more YouTube videos as needed
  ],
  
  // Twitter Posts
  twitter: [
    {
      id: 1,
      content: "Just published my latest article on state management in React! Check it out #react #webdev",
      url: "https://twitter.com/yourhandle/status/12345",
      likes: 124,
      retweets: 32,
      date: "2023-11-01",
      tags: ["react", "web development", "frontend"],
      platform: "twitter"
    },
    // Add more Twitter posts as needed
  ],
  
  // Instagram Posts
  instagram: [
    {
      id: 1,
      title: "Coding Setup 2023",
      image: "/images/instagram/setup-2023.jpg",
      url: "https://instagram.com/p/example1",
      likes: 342,
      date: "2023-10-28",
      tags: ["setup", "productivity", "coding"],
      platform: "instagram"
    },
    // Add more Instagram posts as needed
  ]
};

export const allContent = [
  ...contentData.youtube.map(item => ({ ...item, type: 'youtube' })),
  ...contentData.twitter.map(item => ({ ...item, type: 'twitter' })),
  ...contentData.instagram.map(item => ({ ...item, type: 'instagram' }))
];

// Get all unique tags for filtering
export const allTags = [...new Set(
  allContent.flatMap(item => item.tags)
)];
