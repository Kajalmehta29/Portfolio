export interface CareerStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  achievements: string[];
  projects: string[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  type: "opensource" | "company";

  title: string;
  subtitle: string;

  duration: string;

  description: string;

  steps?: CareerStep[];
}

export const experience: ExperienceItem[] = [
  {
    id: "gssoc",

    type: "opensource",

    title: "GirlScript Summer of Code Extended",

    subtitle: "Open Source Contributor",

    duration: "2024",

    description:
      "Contributed to open-source repositories, collaborated with maintainers, and strengthened collaborative development skills by working on real-world projects.",
  },

  {
    id: "calanjiyam",

    type: "company",

    title: "Calanjiyam Consultancies & Technologies",

    subtitle: "Career Journey",

    duration: "Apr 2025 – Present",

    description:
      "Started as a Web Developer Intern and progressed through multiple roles while building production-ready software, solving real client problems, and contributing to enterprise applications.",

    steps: [
      {
        id: "intern",

        title: "Web Developer Intern",

        duration: "Apr 2025 – Jul 2025",

        description:
          "Built an internal Job Portal while learning enterprise development workflows and collaborating with senior developers.",

        achievements: [
          "Developed core modules for the Job Portal",
          "Implemented authentication and user management",
          "Worked with backend APIs and database integration",
          "Followed industry development practices and Git workflow",
        ],

        projects: ["Internal Job Portal"],

        technologies: [
          "PHP",
          "MySQL",
          "Bootstrap",
          "JavaScript",
          "HTML",
          "CSS",
        ],
      },

      {
        id: "trainee",

        title: "Trainee Associate Developer",

        duration: "Jul 2025 – Jan 2026",

        description:
          "Transitioned from internal development to working on production client applications with increasing ownership.",

        achievements: [
          "Contributed to production ERP features",
          "Implemented client-requested enhancements",
          "Fixed production bugs and optimized existing modules",
          "Worked closely with senior developers during deployments",
        ],

        projects: [
          "Menaga Steels ERP",
          "Matrimony Platform",
        ],

        technologies: [
          "PHP",
          "MySQL",
          "JavaScript",
          "jQuery",
          "AJAX",
          "Chart.js",
        ],
      },

      {
        id: "junior",

        title: "Junior Associate Developer",

        duration: "Jan 2026 – Present",

        description:
          "Responsible for developing new features, improving existing systems, and delivering client requirements across multiple enterprise applications.",

        achievements: [
          "Developed analytics dashboards and reports",
          "Implemented ERP modules for business operations",
          "Integrated third-party APIs and external services",
          "Resolved production issues and performance bottlenecks",
          "Collaborated directly on client-specific feature development",
        ],

        projects: [
          "Menaga Steels ERP",
          "Matrimony Platform",
        ],

        technologies: [
          "PHP",
          "MySQL",
          "JavaScript",
          "jQuery",
          "AJAX",
          "Chart.js",
          "REST APIs",
          "Git",
        ],
      },
    ],
  },
];