const projectsData = [
  {
    id: 1,
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
    description: "Developed a responsive clone of the Razorpay website, replicating its user interface with attention to design precision and user experience.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535954/Razorpay_y0j9h6.png",
    link: "https://razorpay-clone-rk71ucafl-atulfzdlko2001gmailcoms-projects.vercel.app/",
    githubLink: "https://github.com/atul-5242/Razorpay-Clone.git",
    demoLink: "https://demo-video-link-2",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
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
    description: "Created a platform for students to upload, download, and manage books/notes, optimizing data retrieval by 50% with efficient CRUD operations.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/Screenshot_2024-11-02_133644_lxwy7a.png",
    link: "https://bookstoregehu.onrender.com/",
    githubLink: "https://github.com/atul-5242/BookStore",
    demoLink: "",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
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
    description: "Built a secure vehicle rental platform with Razorpay integration and Cloudinary for document verification, handling 500+ requests per hour.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/car_uaynay.png",
    link: "https://vehical-rental-store.vercel.app/",
    githubLink: "https://github.com/atul-5242/Vehical-Rental-Store",
    demoLink: "https://youtu.be/RhcnlNXiIoM?si=eDF831CfPmYuIdD3",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Cloudinary", "JWT"],
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
    description: "Developed an EdTech platform for instructors to create and sell courses, featuring video lectures and feedback system. Implemented user roles with secure access, allowing students to purchase, rate, and review courses, improving engagement by 30%.",
    image: "https://res.cloudinary.com/dhhx2qn2o/image/upload/v1730535955/Screenshot_2024-11-02_133358_q7wpvs.png",
    link: "https://study-notion-ed-tech-mega-project.vercel.app/",
    githubLink: "https://github.com/atul-5242/Study-Notion-Ed-Tech-MegaProject",
    demoLink: "https://youtu.be/H3AyAcbUkD4?si=w_kSe4FHZF6nUQtG",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "Cloudinary", "JWT"],
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
