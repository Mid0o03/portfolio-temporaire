export const portfolioConfig = {
  // Informations personnelles
  personal: {
    name: "Mael JEROME ",
    title: "Développeur Front-End",
    subtitle: "Spécialisé en React & Next.js",
    description: "Passionné par la création d'interfaces utilisateur modernes et performantes. Je transforme vos idées en expériences web exceptionnelles.",
    email: "mael.jerome@gmail.com",
    location: "Paris, France",
    profileImage: "/images/logo.png", // Remplacez par votre photo
    resume: "/documents/CV-Développeur Front‑End Freelance.pdf", // Remplacez par votre CV
  },

  // Liens sociaux
  social: {
    github: "https://github.com/Mid0o03/Mid0o03",
    linkedin: "https://www.linkedin.com/in/mael-jerome",
    twitter: "https://twitter.com/mael-jerome",
    instagram: "https://instagram.com/mael-jerome",
    website: "https://mael-jerome.com",
  },

  // Navigation
  navigation: [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Parcours", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ],

  // Compétences techniques
  skills: {
    frontend: [
      { name: "React", level: 70, icon: "⚛️" },
      { name: "Next.js", level: 70, icon: "▲" },
      { name: "TypeScript", level: 30, icon: "📘" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 94, icon: "📝" },
      { name: "HTML/CSS", level: 96, icon: "🌐" },
    ],
    tools: [
      { name: "Git", level: 90, icon: "🔧" },
      { name: "Figma", level: 60, icon: "🎭" },
      { name: "Webpack", level: 20, icon: "📦" },
      { name: "Docker", level: 10, icon: "🐳" },
      { name: "AWS", level: 10, icon: "☁️" },
      { name: "GraphQL", level: 0, icon: "📊" },
    ],
  },

  // Projets portfolio
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme e-commerce moderne avec panier, paiement et gestion d'inventaire",
      longDescription: "Application e-commerce complète développée avec Next.js, intégrant Stripe pour les paiements, une base de données PostgreSQL, et un dashboard administrateur. Interface responsive optimisée pour mobile et desktop.",
      image: "/images/projects/ecommerce.svg", // Remplacez par vos images
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
      category: "E-commerce",
      githubUrl: "https://github.com/Mid0o03/Mid0o03",
      liveUrl: "https://votre-ecommerce.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard analytique avec graphiques interactifs et visualisation de données",
      longDescription: "Interface d'administration avec tableaux de bord personnalisables, graphiques interactifs utilisant Chart.js, et système de notifications en temps réel avec WebSocket.",
      image: "/images/projects/dashboard.svg",
      technologies: ["React", "Chart.js", "Material-UI", "Node.js", "WebSocket"],
      category: "Dashboard",
      githubUrl: "https://github.com/Mid0o03/Mid0o03",
      liveUrl: "https://votre-dashboard.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "site vitrine",
      description: "Site vitrine pour une marque de vêtements ",
      longDescription: "site vitrine pour une marque de vêtements fictive (collection capsule).carousel animé en css ",
      image: "/images/projects/mikiPreview.png",
      technologies: ["HTML", "CSS", "i18n.js"],
      category: "Site web",
      githubUrl: "https://github.com/Mid0o03/lacosteXmiki",
      liveUrl: "https://mid0o03.github.io/lacosteXmiki/",
      featured: false,
    },
    {
      id: 4,
      title: "NeuroSynapse",
      description: "Application de simulation des connexions des synapses dans le cerveau chat en temps réel avec salles et messages privés",
      longDescription: "NeuroSynapse est une expérience web immersive et éducative qui visualise le fonctionnement d'un réseau neuronal et la plasticité cérébrale en 3D. Objectif principal : Offrir une représentation visuelle interactive et esthétique de l'activité cérébrale pour vulgariser des concepts neuroscientifiques complexes.",
      image: "/images/projects/neurosynapse 2.png",
      technologies: ["React", "TypeScript", "Three.js", "vite", "framer-motion"],
      category: "experience",
      githubUrl: "https://github.com/Mid0o03/NeuroSynapse",
      liveUrl: "https://neuro-synapse-eight.vercel.app/",
      featured: false,
    },
    {
      id: 5,
      title: "Task Management",
      description: "Application de gestion de tâches avec drag & drop et collaboration",
      longDescription: "Outil de gestion de projet avec interface Kanban, drag & drop, gestion d'équipes, notifications, et synchronisation en temps réel. Interface inspirée de Trello avec fonctionnalités avancées.",
      image: "/images/projects/taskmanager.svg",
      technologies: ["Vue.js", "Vuex", "Express.js", "MongoDB", "Socket.io"],
      category: "Productivité",
      githubUrl: "https://github.com/Mid0o03/Mid0o03",
      liveUrl: "https://votre-taskmanager.vercel.app",
      featured: true,
    },
    {
      id: 6,
      title: "Weather App",
      description: "Application météo avec géolocalisation et prévisions détaillées",
      longDescription: "Application météorologique moderne avec géolocalisation automatique, prévisions sur 7 jours, cartes météo interactives, et notifications d'alertes météo. Interface adaptative selon les conditions météorologiques.",
      image: "/images/projects/weather.svg",
      technologies: ["React Native", "Redux", "OpenWeather API", "Maps API"],
      category: "Mobile",
      githubUrl: "https://github.com/Mid0o03/Mid0o03",
      liveUrl: "https://votre-weather.vercel.app",
      featured: false,
    },
  ],

  // Catégories de projets pour les filtres
  projectCategories: [
    "Tous",
    "E-commerce",
    "Dashboard",
    "Portfolio",
    "Communication",
    "Productivité",
    "Mobile",
  ],

  // Témoignages (optionnel)
  testimonials: [
    {
      id: 1,
      name: "Marie Dubois",
      position: "Product Manager",
      company: "TechCorp",
      content: "Excellent développeur avec une attention particulière aux détails. Livraison dans les temps et qualité irréprochable.",
      avatar: "/images/testimonials/marie.jpg",
    },
    {
      id: 2,
      name: "Jean Martin",
      position: "CTO",
      company: "StartupXYZ",
      content: "Collaboration fluide et expertise technique remarquable. Je recommande vivement ses services.",
      avatar: "/images/testimonials/jean.jpg",
    },
  ],

  // Configuration EmailJS (pour le formulaire de contact)
  emailjs: {
    serviceId: "votre_service_id", // Remplacez par votre Service ID EmailJS
    templateId: "votre_template_id", // Remplacez par votre Template ID EmailJS
    publicKey: "votre_public_key", // Remplacez par votre Public Key EmailJS
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

  // Métadonnées pour le SEO
  seo: {
    title: "Portfolio | Développeur Front-End",
    description: "Portfolio moderne d'un développeur front-end spécialisé en React, Next.js et technologies web modernes",
    keywords: ["développeur", "front-end", "React", "Next.js", "TypeScript", "portfolio"],
    author: "Votre Nom",
    siteUrl: "https://votre-domaine.com",
    image: "/images/og-image.jpg", // Image pour les réseaux sociaux
  },
}

export type PortfolioConfig = typeof portfolioConfig