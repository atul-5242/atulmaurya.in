const projectsData = [
  {
    id: 1,
    title: "UptimeMatrix",
    description: "Enterprise-grade SaaS monitoring platform with real-time alerts, beautiful status pages, and comprehensive analytics. Built from scratch with Stripe billing, team collaboration, and multi-region monitoring capabilities.",
    image: "https://pbs.twimg.com/profile_banners/1949012247809761280/1758786712/1500x500",
    link: "https://uptimematrix.atulmaurya.in/",
    githubLink: "https://github.com/atul-5242/uptimematrix.in",
    demoLink: "",
    category: "SaaS",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "Pusher", "Stripe", "Docker", "AWS", "shadcn/ui"],
    keyTech: ["Next.js", "PostgreSQL", "Stripe"],
    longDescription: "UptimeMatrix is a comprehensive monitoring and observability platform designed to help businesses track their infrastructure health, manage incidents, and maintain transparent communication with users through beautiful status pages. Built with modern technologies and inspired by industry leaders like BetterStack, this platform demonstrates enterprise-level architecture and real-world SaaS development skills.",
    features: [
      "Multi-region uptime monitoring for websites and APIs",
      "Real-time instant alerts via multiple channels",
      "Beautiful, customizable status pages for transparency",
      "Comprehensive log management and analysis",
      "Team collaboration with role-based access control",
      "Escalation policies and incident management",
      "Stripe-powered subscription billing system",
      "Real-time updates using Pusher WebSocket integration",
      "Docker containerization for scalable deployment"
    ],
    challenges: [
      "Implementing real-time monitoring across multiple regions",
      "Building a scalable alert system with Redis Streams",
      "Creating a robust SaaS billing integration with Stripe",
      "Designing responsive status pages with real-time updates",
      "Optimizing database queries for high-frequency monitoring data",
      "Implementing secure team collaboration features",
      "Building a comprehensive log aggregation system"
    ],
    gallery: [
      "https://pbs.twimg.com/profile_banners/1949012247809761280/1758786712/1500x500"
    ],
    featured: true,
    badge: "Featured Project"
  },
  {
    id: 7,
    title: "",
    description: "",
    image: "https://i.pinimg.com/736x/b8/52/c2/b852c2bd66283834e80ff59582c59dc5.jpg",
    link: "#",
    githubLink: "",
    demoLink: "",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Razorpay Frontend Clone",
    description: "Pixel-perfect recreation of India's leading payment gateway website. Features responsive design, smooth animations, and modern UI components that showcase advanced frontend development skills.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535954/Razorpay_y0j9h6.png",
    link: "https://razorpay-clone-rk71ucafl-atulfzdlko2001gmailcoms-projects.vercel.app/",
    githubLink: "https://github.com/atul-5242/Razorpay-Clone.git",
    demoLink: "https://demo-video-link-2",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    keyTech: ["JavaScript", "Tailwind CSS"],
    longDescription: "A pixel-perfect clone of the Razorpay website built with modern web technologies. This project demonstrates my ability to replicate complex UI designs with attention to detail and responsive design principles.",
    features: [
      "Responsive design that works on all devices",
      "Modern CSS animations and transitions",
      "Clean and maintainable code structure",
      "Cross-browser compatibility"
    ],
    challenges: [
      "Replicating complex animations and micro-interactions",
      "Ensuring pixel-perfect design across different screen sizes",
      "Optimizing performance for smooth user experience"
    ],
    gallery: [
      "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535954/Razorpay_y0j9h6.png"
    ]
  },
  {
    id: 3,
    title: "Book Store",
    description: "Full-stack educational platform enabling students to share academic resources seamlessly. Achieved 50% faster data retrieval through optimized database queries and efficient file management system.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/Screenshot_2024-11-02_133644_lxwy7a.png",
    link: "https://bookstoregehu.onrender.com/",
    githubLink: "https://github.com/atul-5242/BookStore",
    demoLink: "",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    keyTech: ["React", "Node.js", "MongoDB"],
    longDescription: "A comprehensive platform designed for students to share educational resources. The application features secure user authentication, file upload/download capabilities, and an intuitive interface for managing academic materials.",
    features: [
      "User authentication and authorization",
      "File upload and download functionality",
      "Search and filter capabilities",
      "Responsive design for mobile and desktop",
      "Admin panel for content management"
    ],
    challenges: [
      "Implementing secure file upload with validation",
      "Optimizing database queries for better performance",
      "Creating an intuitive user interface for content discovery"
    ],
    gallery: [
      "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/Screenshot_2024-11-02_133644_lxwy7a.png"
    ]
  },
  {
    id: 4,
    title: "Vehicle Rental Platform",
    description: "Complete vehicle rental marketplace with secure payment processing and automated document verification. Successfully handles 500+ booking requests per hour with real-time availability tracking.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/car_uaynay.png",
    link: "https://vehical-rental-store.vercel.app/",
    githubLink: "https://github.com/atul-5242/Vehical-Rental-Store",
    demoLink: "https://youtu.be/RhcnlNXiIoM?si=eDF831CfPmYuIdD3",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Cloudinary", "JWT"],
    keyTech: ["React", "Razorpay", "Cloudinary"],
    longDescription: "A comprehensive vehicle rental platform that connects vehicle owners with renters. Features secure payment processing, document verification, and real-time booking management.",
    features: [
      "Secure payment integration with Razorpay",
      "Document verification using Cloudinary",
      "Real-time booking management",
      "User dashboard for owners and renters",
      "Advanced search and filtering",
      "Rating and review system"
    ],
    challenges: [
      "Integrating multiple third-party services",
      "Handling high traffic and concurrent bookings",
      "Implementing secure document verification",
      "Creating a scalable architecture"
    ],
    gallery: [
      "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/car_uaynay.png"
    ]
  },
  {
    id: 5,
    title: "Ed-Tech StudyNotion",
    description: "Comprehensive online learning platform where instructors create and monetize courses while students enjoy seamless learning experiences. Boosted user engagement by 30% through interactive features and progress tracking.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/Screenshot_2024-11-02_133358_q7wpvs.png",
    link: "https://study-notion-ed-tech-mega-project.vercel.app/",
    githubLink: "https://github.com/atul-5242/Study-Notion-Ed-Tech-MegaProject",
    demoLink: "https://youtu.be/H3AyAcbUkD4?si=w_kSe4FHZF6nUQtG",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "Cloudinary", "JWT"],
    keyTech: ["React", "Node.js", "Razorpay"],
    longDescription: "A complete EdTech platform that enables instructors to create, manage, and sell online courses. Students can browse courses, make purchases, and track their learning progress with an intuitive dashboard.",
    features: [
      "Course creation and management for instructors",
      "Video lecture streaming and progress tracking",
      "Secure payment processing",
      "Student dashboard with progress analytics",
      "Rating and review system",
      "Certificate generation upon completion",
      "Multi-role authentication system"
    ],
    challenges: [
      "Building a scalable video streaming solution",
      "Implementing complex user role management",
      "Creating an intuitive course creation interface",
      "Optimizing performance for large video files"
    ],
    gallery: [
      "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/Screenshot_2024-11-02_133358_q7wpvs.png"
    ]
  }
];

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};

export default projectsData;
