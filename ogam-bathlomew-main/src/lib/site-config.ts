export const siteConfig = {
  name: "Ogam Bathlomew",
  description:
    "Portfolio of Ogam Bathlomew, Applied Statistics student with focus on biological research",
  email: "ogambathlomew4@gmail.com",
  links: {
    facebook: "https://www.facebook.com/profile.php?id=100087551821114",
    linkedin: "https://linkedin.com/in/ogam-bathlomew-673561365",
    tiktok: "https://tiktok.com/@og_governor1",
    twitter: "https://x.com/OgLaktarr?t=rIrV4O2KNruSa1TpWz6f6Q&s=08",
    whatsapp: "https://wa.me/254757845333?text=Hi%20ogam",
  },
  navItems: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ],
  portfolioItems: {
    presentations: [
      {
        title: "Sulphur Cycle",
        description:
          "Detailed exploration of the sulphur cycle and its environmental significance",
        slug: "sulphur-cycle",
        image: "/images/sulphur-cycle.jpg",
      },
      {
        title: "Phosphorus Cycle",
        description:
          "In-depth presentation on the phosphorus cycle and ecosystem stability",
        slug: "phosphorus-cycle",
        image: "/images/phosphorus-cycle.jpg",
      },
      {
        title: "Ecological Succession",
        description:
          "Analysis of primary and secondary succession in ecosystems",
        slug: "ecological-succession",
        image: "/images/ecological-succession.jpg",
      },
    ],
    projects: [
      {
        title: "Environmental Data Analysis",
        description: "Statistical analysis of environmental datasets",
        slug: "environmental-data",
      },
      {
        title: "Ecological Modelling",
        description: "Mathematical modelling of ecological processes",
        slug: "ecological-modelling",
      },
    ],
  },
  blogCategories: {
    "study-tips": [
      {
        title: "Excelling in Applied Statistics",
        description: "Master core concepts in Linear Algebra and ODE",
        slug: "excel-applied-stats",
      },
      {
        title: "Effective Data Visualization",
        description: "Techniques for clear statistical communication",
        slug: "data-visualization",
      },
      {
        title: "R Programming Basics",
        description: "Getting started with statistical computing",
        slug: "r-programming",
      },
    ],
    "academic-experiences": [
      {
        title: "My Academic Journey",
        description:
          "Challenges, achievements, and key learnings at Moi University",
        slug: "journey",
      },
      {
        title: "Research Opportunities",
        description: "How I found my path in biological statistics",
        slug: "research-opportunities",
      },
      {
        title: "Conference Experiences",
        description: "Presenting my work to the academic community",
        slug: "conference-experiences",
      },
    ],
  },
};
