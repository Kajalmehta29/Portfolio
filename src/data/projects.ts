// =========================
// Astrology Explorer Images
// =========================

import astrologyLanding from "../assets/projects/astrology/landing.png";
import astrologySolarSystem from "../assets/projects/astrology/solar-system.png";
import astrologyPlanetDetails from "../assets/projects/astrology/planet-details.png";
import astrologyConstellations from "../assets/projects/astrology/constellations.png";
import astrologyConstellationDetails from "../assets/projects/astrology/constellation-details.png";

// =====================================
// Expense Splitter Images (Add Later)
// =====================================

// import expenseCover from "../assets/projects/expense-splitter/cover.png";

// =====================================
// Flora Workspace Images (Add Later)
// =====================================

// import floraCover from "../assets/projects/flora-workspace/cover.png";

export interface WalkthroughStep {
  image: string;
  title: string;
  description: string;
}

export interface Challenge {
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;

  status: "Completed" | "In Progress";

  coverImage: string;

  shortDescription: string;

  overview: string;

  walkthrough: WalkthroughStep[];

  features: string[];

  challenges: Challenge[];

  learnings: string[];

  technologies: string[];

  github?: string;

  live?: string;

  theme: "light" | "dark";

  browserUrl: string;
}

export const projects: Project[] = [
  // =====================================================
  // Expense Splitter
  // =====================================================

  {
    id: "expense-splitter",

    title: "Expense Splitter",

    category: "Full Stack Application",

    status: "Completed",

    coverImage: "",

    theme: "light",

    browserUrl: "localhost:3000",

    shortDescription:
      "A Flutter and Spring Boot application for seamless group expense management.",

    overview:
      "Expense Splitter is a full-stack application that simplifies shared expense management through secure authentication, intelligent balance calculation, group-based expense tracking, and a clean mobile-first interface.",

    walkthrough: [
      {
        image: "",
        title: "Login",
        description:
          "Secure authentication allows users to access their personalized expense dashboard.",
      },

      {
        image: "",
        title: "Dashboard",
        description:
          "View all expense groups, balances and recent activity from a centralized dashboard.",
      },

      {
        image: "",
        title: "Group Details",
        description:
          "Manage group members, shared expenses and settlement summaries in one place.",
      },

      {
        image: "",
        title: "Add Expense",
        description:
          "Quickly record expenses and automatically distribute costs among group members.",
      },

      {
        image: "",
        title: "Settlement",
        description:
          "Calculate optimized settlements to minimize the number of transactions required.",
      },
    ],

    features: [
      "JWT Authentication",

      "Expense Groups",

      "Balance Calculation",

      "Transaction History",

      "Secure REST APIs",
    ],

    challenges: [
      {
        problem: "Maintaining accurate balances after every expense update.",

        solution:
          "Designed backend logic that recalculates balances after every transaction while ensuring data consistency.",
      },

      {
        problem: "Designing scalable REST APIs for mobile clients.",

        solution:
          "Implemented modular Spring Boot controllers with reusable service layers.",
      },
    ],

    learnings: [
      "Spring Boot Architecture",

      "REST API Design",

      "Flutter State Management",

      "JWT Authentication",
    ],

    technologies: ["Flutter", "Spring Boot", "MySQL", "REST API", "JWT"],

    github: "",

    live: "",
  },

  // =====================================================
  // Flora Workspace
  // =====================================================

  {
    id: "flora-workspace",

    title: "Flora Workspace",

    category: "Productivity Platform",

    status: "In Progress",

    coverImage: "",

    theme: "light",

    browserUrl: "localhost:3000",

    shortDescription:
      "A modern productivity workspace inspired by Notion and Linear.",

    overview:
      "Flora Workspace is a productivity platform focused on organizing workspaces, notes and tasks through a clean, intuitive interface with a scalable Spring Boot backend.",

    walkthrough: [
      {
        image: "",
        title: "Authentication",
        description:
          "Secure user authentication and personalized workspace access.",
      },

      {
        image: "",
        title: "Dashboard",
        description:
          "A centralized dashboard for managing workspaces and productivity.",
      },

      {
        image: "",
        title: "Workspace",
        description:
          "Organize projects using structured workspaces with responsive layouts.",
      },

      {
        image: "",
        title: "Notes",
        description:
          "Create and organize notes in a distraction-free environment.",
      },
    ],

    features: [
      "Authentication",

      "Workspace Management",

      "Rich Notes",

      "Responsive UI",
    ],

    challenges: [
      {
        problem: "Building a scalable architecture for future AI integration.",

        solution:
          "Designed modular APIs and separated frontend/backend responsibilities from the beginning.",
      },
    ],

    learnings: [
      "System Design",

      "Responsive UI",

      "Flutter",

      "Backend Architecture",
    ],

    technologies: ["Flutter", "Spring Boot", "PostgreSQL"],

    github: "",

    live: "",
  },

  // =====================================================
  // Astrology Explorer
  // =====================================================

  {
    id: "astrology-explorer",

    title: "Astrology Explorer",

    category: "Frontend Experience",

    status: "Completed",

    coverImage: astrologyPlanetDetails,

    theme: "dark",

    browserUrl: "astronomy-explorer.vercel.app",

    shortDescription:
      "An immersive astronomy website featuring interactive planets, constellations and modern space-inspired UI.",

    overview:
      "Astrology Explorer is a visually immersive frontend project built with HTML, CSS and JavaScript. It combines interactive planetary exploration, constellation visualization and modern animations to create an engaging educational experience.",

    walkthrough: [
      {
        image: astrologyLanding,

        title: "Landing Experience",

        description:
          "A modern landing page introducing users to an interactive journey through planets, stars and constellations.",
      },

      {
        image: astrologySolarSystem,

        title: "Interactive Solar System",

        description:
          "Users can explore the solar system by selecting planets through an interactive orbital visualization.",
      },

      {
        image: astrologyPlanetDetails,

        title: "Planet Details",

        description:
          "Dedicated planet pages present orbital data, quick facts and beautiful visual layouts for each celestial body.",
      },

      {
        image: astrologyConstellations,

        title: "Constellation Explorer",

        description:
          "An interactive constellation map allows users to discover star formations through engaging visual interactions.",
      },

      {
        image: astrologyConstellationDetails,

        title: "Constellation Details",

        description:
          "Detailed constellation pages provide historical information, seasonal visibility and important astronomical facts.",
      },
    ],

    features: [
      "Interactive Solar System",

      "Planet Information",

      "Constellation Explorer",

      "Responsive Design",

      "Smooth Animations",
    ],

    challenges: [
      {
        problem:
          "Creating engaging interactions while maintaining smooth performance.",

        solution:
          "Optimized animations and rendering using efficient JavaScript techniques and lightweight assets.",
      },

      {
        problem:
          "Designing a visually immersive interface without sacrificing usability.",

        solution:
          "Used a consistent space-inspired design system with clear navigation and responsive layouts.",
      },
    ],

    learnings: [
      "Advanced CSS",

      "JavaScript Animations",

      "Interactive UI Design",

      "Responsive Development",
    ],

    technologies: ["HTML", "CSS", "JavaScript"],

    github: "https://github.com/Kajalmehta29/astronomy-explorer",

    live: "https://astronomy-explorer-psi.vercel.app",
  },
];
