export const portfolioConfig = {
  // Informations personnelles
  personal: {
    name: "Mael JEROME ",
    title: "Full Stack Developer",
    subtitle: "End-to-end Digital Experience Architect",
    description: "Passionate about building comprehensive web applications. I design robust backend architectures and develop immersive frontend interfaces to bring your most ambitious projects to life.",
    email: "maeljerome.pro@gmail.com",
    location: "Paris, France",
    profileImage: "/images/logo.png", // Remplacez par votre photo
    resume: "/documents/cv.pdf", // Remplacez par votre CV
  },

  // Liens sociaux
  social: {
    github: "https://github.com/Mid0o03",
    linkedin: "https://www.linkedin.com/in/mael-jerome",
    instagram: "https://instagram.com/mael-jerome",
    website: "https://mael-jerome.com",
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ],

  // Compétences techniques
  skills: {
    frontend: [
      { name: "React / Next.js", level: 85, icon: "⚛️" },
      { name: "TypeScript", level: 70, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 80, icon: "📝" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
      { name: "Three.js", level: 40, icon: "🧊" },
    ],
    backend: [
      { name: "Supabase (BaaS)", level: 75, icon: "⚡" },
      { name: "Firebase", level: 65, icon: "🔥" },
      { name: "Stripe", level: 60, icon: "💳" },
      { name: "Node.js", level: 30, icon: "📖" }, // Learning
      { name: "SQL", level: 20, icon: "📖" }, // Learning
      { name: "REST APIs", level: 40, icon: "🔌" },
    ],
    tools: [
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Git / GitHub", level: 80, icon: "🔧" },
      { name: "Vercel", level: 85, icon: "☁️" },
      { name: "Figma", level: 65, icon: "🎭" },
      { name: "npm / pnpm", level: 85, icon: "📦" },
      { name: "Postman", level: 40, icon: "" },
    ],
    aiTools: [
      { name: "GitHub Copilot", level: 90, icon: "🤖" },
      { name: "Claude Code", level: 90, icon: "🧠" },
      { name: "Antigravity", level: 85, icon: "🚀" },
      { name: "Google AI Studio", level: 85, icon: "🔬" },
      { name: "Flow", level: 85, icon: "🌊" },
      { name: "Stitch", level: 80, icon: "🧵" },
      { name: "Whisk", level: 80, icon: "🌪️" },
      { name: "Reve", level: 80, icon: "🪄" },
    ],
  },

  // Projets portfolio
  projects: [
    {
      id: 20,
      title: "AI Digital Twin",
      description: "AI-powered Professional Digital Double",
      longDescription: "An AI-powered digital twin trained on my professional background (LinkedIn & GitHub data) using a Gemini 1.5 Pro model. Features a custom API route and a minimalist frontend with Framer Motion to chat with my AI double.",
      image: "/images/projects/digital-twin.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Gemini API"],
      category: "IA & Automation",
      githubUrl: "https://github.com/Mid0o03/digital-twin",
      liveUrl: "https://digital-twin-nine-fawn.vercel.app/",
      featured: false,
    },
    {
      id: 2,
      title: "EasyBioLab",
      description: "The Modern Biologist's Toolkit",
      longDescription: "A comprehensive platform featuring advanced utilities for biology: DNA analyzer, PCR calculator, cell counter, and Punnett Square. An essential tool for streamlining laboratory work, from biochemistry to genetics.",
      image: "/images/projects/EasyBioLab.png", // Remplacez par vos images
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
      category: "Education",
      githubUrl: "https://github.com/Mid0o03/EasyBioLab",
      liveUrl: "https://easy-bio-lab.vercel.app/",
      featured: false,
    },
    {
      id: 9,
      title: "EasyVectorLab",
      description: "Physics Calculators and Simulators",
      longDescription: "A suite of interactive tools to master physics: kinematics, Newton's laws, thermodynamics, optics, magnetic fields, and radioactivity. Accompanies the resolution of complex problems through a modern UI.",
      image: "/images/projects/EasyVectorLab.png", // Remplacer par la bonne image
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Education",
      githubUrl: "https://github.com/Mid0o03/EasyVectorLab",
      liveUrl: "https://easy-vector-lab.vercel.app/",
      featured: false,
    },
    {
      id: 10,
      title: "EasyAtomLab",
      description: "The Chemist's Comprehensive Toolkit",
      longDescription: "An interactive suite of over 15 utilities designed for chemistry: a complete periodic table, electronic configurator (Klechkowski), yield, pH and dilution calculators, and even a 3D molecular viewer (PubChem API). A true Swiss Army knife built to simplify students' laboratory work.",
      image: "/images/projects/EasyAtomLab.png", // Remplacer par la bonne image
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      category: "Education",
      githubUrl: "https://github.com/Mid0o03/EasyAtomLab",
      liveUrl: "https://easy-atom-lab.vercel.app/",
      featured: false,
    },
    {
      id: 19,
      title: "EasySigmaLab",
      description: "Interactive Mathematical Excellence",
      longDescription: "Web-based super-calculator and math solver: matrices, polynomials, systems of equations, complex numbers, trigonometry, calculus, and combinatorics. A rich interface for advanced calculations solved instantly.",
      image: "/images/projects/EasySigmaLab.png", // Remplacer par la bonne image
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
      category: "Education",
      githubUrl: "https://github.com/Mid0o03/EasySigmaLab",
      liveUrl: "https://easy-sigma-lab.vercel.app/",
      featured: false,
    },
    {
      id: 4,
      title: "NeuroSynapse",
      description: "Real-time 3D brain synapse simulation app with private rooms and messaging",
      longDescription: "NeuroSynapse is an immersive and educational web experience that visualizes the functioning of a neural network and brain plasticity in 3D. Main objective: Provide an interactive and aesthetic visual representation of brain activity to popularize complex neuroscientific concepts.",
      image: "/images/projects/neurosynapse 2.png",
      technologies: ["React", "TypeScript", "Three.js", "vite", "framer-motion"],
      category: "Education",
      githubUrl: "https://github.com/Mid0o03/NeuroSynapse",
      liveUrl: "https://neuro-synapse-eight.vercel.app/",
      featured: false,
    },
    {
      id: 5,
      title: "MiamPilot",
      description: "AI-Automated Restaurant Marketing",
      longDescription: "Generate a week of social media content, create your menus, and attract more customers in just a few clicks.",
      image: "/images/projects/MiamPilot.png",
      technologies: ["TypeScript", "React", "Next.js", "Stripe", "Supabase", "Clerk", "openAI API"],
      category: "SaaS",
      liveUrl: "https://rest-pulse.vercel.app/",
      featured: false,
    },
    {
      id: 6,
      title: "Parklydex",
      description: "Multi-language Park Management App",
      longDescription: "Interactive SaaS platform allowing users to list, edit, and explore various parks. Designed with a complete internationalization system (French, English) and global user state management for a seamless experience.",
      image: "/images/projects/parklydex.png", // Remplacer par la bonne image
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Full-Stack",
      liveUrl: "https://www.parklydex.com",
      featured: false,
    },
    {
      id: 7,
      title: "Immersive 3D Portfolio",
      description: "Interactive and Creative Web Experience",
      longDescription: "A developer portfolio designed as a truly immersive experience. Advanced use of 3D, smooth animations, and creative navigation to showcase my skills and projects in an unforgettable way.",
      image: "/images/projects/Portfolio-immersif.png", // Remplacer par la bonne image
      technologies: ["React", "Three.js", "React Three Fiber", "Framer Motion"],
      category: "Frontend",
      githubUrl: "https://github.com/Mid0o03/portfolio2.0",
      liveUrl: "https://www.maeljerome.dev",
      featured: false,
    },
    {
      id: 8,
      title: "Store Dev",
      description: "Online Store for Development Resources",
      longDescription: "Specialized e-commerce platform offering resources, templates, and tools for developers. Full integration of a payment system and digital product management.",
      image: "/images/projects/midodev.png", // Remplacer par la bonne image
      technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      category: "E-commerce",
      liveUrl: "https://www.midodev.fr",
      featured: false,
    },
    {
      id: 11,
      title: "3D Bee Animation",
      description: "Interactive Environment and WebGL Modeling",
      longDescription: "Study project (Tutorial) completed to deepen my 3D web skills. Reproduction of a playful environment to master interactive animations, lighting, and WebGL rendering with Three.js and React Three Fiber.",
      image: "/images/projects/3d-bee.png", // Remplacer par la bonne image
      technologies: ["HTML", "CSS", "JavaScript", "Three.js", "GSAP"],
      category: "Frontend",
      githubUrl: "https://github.com/Mid0o03/3D-ANIMATION-bee",
      liveUrl: "https://3-d-animation-bee-beta.vercel.app/",
      featured: false,
    },
    {
      id: 12,
      title: "Crazy Slider Effect",
      description: "User Interface Experimentation and Animations",
      longDescription: "UI/UX study project focused on creating fluid transitions and complex visual effects. Objective: master advanced CSS animations and DOM manipulation for engaging user experiences.",
      image: "/images/projects/crazy-slider.png", // Remplacer par la bonne image
      technologies: ["JavaScript", "CSS Advanced", "HTML5", "Animations"],
      category: "Frontend",
      githubUrl: "https://github.com/Mid0o03/crazy-slider-effect",
      liveUrl: "https://crazy-slider-effect-pink.vercel.app/",
      featured: false,
    },
    {
      id: 13,
      title: "2D Solar System",
      description: "Orbital Animation and Advanced CSS",
      longDescription: "Animated 2D representation of the solar system. This project highlights mastery of CSS keyframe animations, relative orbital time management, and absolute positioning to create a visually accurate model.",
      image: "/images/projects/systeme-2D.png", // Remplacer par la bonne image
      technologies: ["HTML", "CSS", "Animations CSS"],
      category: "Frontend",
      githubUrl: "https://github.com/Mid0o03/solar-system2D",
      liveUrl: "https://solar-system2-d.vercel.app/",
      featured: false,
    },
    {
      id: 14,
      title: "AI History Timeline",
      description: "Interactive Visualization of AI History",
      longDescription: "An interactive timeline tracing the key moments of artificial intelligence. This project demonstrates my ability to structure complex historical data and present it via a rich, engaging, and perfectly responsive user interface.",
      image: "/images/projects/ai-story.png", // Remplacer par la bonne image
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      githubUrl: "https://github.com/Mid0o03/ai-history-timeline",
      liveUrl: "https://ai-history-timeline.vercel.app/",
      featured: false,
    },
    {
      id: 16,
      title: "Spacegame 2D",
      description: "Space Shooter Video Game (Microsoft Bootcamp)",
      longDescription: "2D arcade game developed during the Microsoft Bootcamp. This project validates advanced handling of keyboard events, the render loop, and object-oriented programming in a gaming context.",
      image: "/images/projects/space-game.png", // Remplacer par la bonne image
      technologies: ["JavaScript Orienté Objet", "HTML5 Canvas", "CSS Animé"],
      category: "Frontend",
      githubUrl: "https://github.com/Mid0o03/space-game2D",
      liveUrl: "https://space-game2-d.vercel.app/",
      featured: false,
    },
    {
      id: 17,
      title: "Typing Game",
      description: "Interactive Typing Speed Test (Microsoft Bootcamp)",
      longDescription: "Fun web application measuring users' typing speed (words per minute) and accuracy designed during the Microsoft Developer bootcamp, involving timers and real-time statistical calculations.",
      image: "/images/projects/typing-game.png", // Remplacer par la bonne image
      technologies: ["JavaScript ES6", "DOM Manipulation", "CSS3"],
      category: "Frontend",
      githubUrl: "https://github.com/Mid0o03/typing-game",
      liveUrl: "https://typing-game-taupe-rho.vercel.app/",
      featured: false,
    },
    {
      id: 18,
      title: "Carbon Trigger",
      description: "Environmental Impact Platform (Microsoft Bootcamp)",
      longDescription: "Major project from the Microsoft Developer bootcamp: a platform designed to track and trigger actions regarding carbon footprints. Ergonomic user interface integrating statistical dashboards.",
      image: "/images/projects/carbon-trigger.png", // Remplacer par la bonne image
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Full-Stack",
      githubUrl: "https://github.com/Mid0o03/carbon_trigger",
      featured: false,
    },
  ],

  // Project Categories for filtering
  projectCategories: [
    "All",
    "Full-Stack",
    "SaaS",
    "Frontend",
    "Backend & BaaS",
    "IA & Automation",
    "E-commerce",
    "Education",
    "Mobile",
  ],

  // Testimonials (optional)
  testimonials: [
    {
      id: 1,
      name: "Marie Dubois",
      position: "Product Manager",
      company: "TechCorp",
      content: "Excellent developer with great attention to detail. On-time delivery and impeccable quality.",
      avatar: "/images/testimonials/marie.jpg",
    },
    {
      id: 2,
      name: "Jean Martin",
      position: "CTO",
      company: "StartupXYZ",
      content: "Smooth collaboration and remarkable technical expertise. I highly recommend his services.",
      avatar: "/images/testimonials/jean.jpg",
    },
  ],

  // Configuration EmailJS (pour le formulaire de contact)
  emailjs: {
    serviceId: "service_4a5y8rs", // Remplacez par votre Service ID EmailJS
    templateId: "template_h9akeuf", // Remplacez par votre Template ID EmailJS
    publicKey: "PUBRG8K_3SPt0NRsm", // Remplacez par votre Public Key EmailJS
  },

  // Configuration des animations 3D
  animations: {
    enableParticles: true,
    enable3DHero: true,
    enableSmoothScroll: true,
    enableParallax: true,
    particleCount: 100,
    particleColor: "#00ff88",
  },

  // Configuration des couleurs (correspond au thème Tailwind)
  theme: {
    colors: {
      primary: "#00ff88",
      primaryHover: "#00e676",
      background: "#000000",
      backgroundSecondary: "#0a0a0a",
      backgroundTertiary: "#1a1a1a",
      text: "#ffffff",
      textSecondary: "#e0e0e0",
      textMuted: "#a0a0a0",
    },
  },

  // SEO Metadata
  seo: {
    title: "Portfolio | Full Stack Developer",
    description: "Modern portfolio of a Full Stack developer specializing in React, Next.js, Node.js and modern web technologies",
    keywords: ["developer", "full stack", "React", "Next.js", "Node.js", "TypeScript", "portfolio"],
    author: "Your Name",
    siteUrl: "https://your-domain.com",
    image: "/images/og-image.jpg", // Social media image
  },
}

export type PortfolioConfig = typeof portfolioConfig