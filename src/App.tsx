import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  Trophy,
  Medal,
  Flame,
  Rocket,
  ArrowDown,
  GraduationCap,
  Sun,
  Moon,
  Menu,
  X,
  Award,
  Shield,
} from "lucide-react";
import profilePic from "./assets/profile.jpeg";
import avatarAiPic from "./assets/avatar_ai.jpg";
import { TopographicBackground } from "./components/TopographicBackground";

// ── FEATURED PROJECTS DATA (Accurately reflected from GitHub READMEs & Codebases) ──
interface ProjectItem {
  num: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  contribution: string;
  techTokens: string[];
  link: string;
  demoLink?: string;
}

const projectsData: ProjectItem[] = [
  {
    num: "01",
    title: "Smart Expense Splitter",
    category: "Full-Stack Mobile Expense Engine",
    problem:
      "In group living, trips, and shared events, calculating multi-party debts leads to complex circular IOUs (e.g., Alice owes Bob, Bob owes Charlie, Charlie owes Alice), causing calculation disputes and messy manual reconciliations.",
    solution:
      "Built a full-stack mobile application featuring a graph-based debt simplification algorithm to collapse cyclic transactions into minimal net settlements, multi-group isolation (e.g., 'Goa Trip', 'Flat Rent'), and flexible equal or custom exact-amount splitting.",
    contribution:
      "Architected the Java Spring Boot REST API, implemented the debt simplification graph solver, developed the cross-platform Flutter mobile UI, enforced role-based access with stateless JWT tokens and BCrypt, and designed normalized MySQL schemas.",
    techTokens: ["Java", "Spring Boot", "Flutter", "MySQL", "JWT Auth", "REST APIs"],
    link: "https://github.com/Kajalmehta29/SmartExpenseSplitter",
  },
  {
    num: "02",
    title: "BugFlow",
    category: "AI-Powered Bug Triage & Sprint Platform",
    problem:
      "Engineering teams waste hours sorting through disorganized issue backlogs and duplicate bug tickets phrased in varying terminology, compounded by slow manual triage and the cumbersome overhead of enterprise Jira setups.",
    solution:
      "Engineered an enterprise-grade bug tracking and sprint platform with AI triage featuring semantic duplicate detection using the all-MiniLM-L6-v2 vector embedding model, Gemini root-cause analysis, automated code-fix suggestions, interactive Kanban tracking, and 4-tier RBAC (ADMIN, PM, DEV, TESTER).",
    contribution:
      "Architected the Spring Boot 3.3 backend services, integrated LangChain4j & Gemini API with local embedding pipelines, configured Redis caching for dashboard statistics and duplicate results, containerized PostgreSQL with Docker Compose, and developed the React 19 frontend with interactive OpenAPI docs.",
    techTokens: [
      "Java 17",
      "Spring Boot 3.3",
      "React 19",
      "PostgreSQL",
      "Redis",
      "Docker",
      "all-MiniLM-L6-v2",
      "Gemini API",
      "OpenAPI",
    ],
    link: "https://github.com/Kajalmehta29/BugFlow",
  },
  {
    num: "03",
    title: "Zenith List",
    category: "Gamified Productivity Hub & Habit Workspace",
    problem:
      "Standard to-do tools lack actionable priority frameworks, accountability mechanics, and distraction-free focus modes, causing chronic procrastination, neglected daily habits, and productivity burnout.",
    solution:
      "Developed a gamified productivity ecosystem with an automated Eisenhower Decision Matrix (4 quadrants), custom Pomodoro focus timer with procedural Web Audio API soundscapes (Rain, Ocean Waves, Wind, Drone), Zenith Score rewards (+50 pts per cycle), personal notes with real-time sync, and habit streak tracking.",
    contribution:
      "Built the React 19 single-page app with Framer Motion transitions, synthesized ambient audio using Web Audio API oscillators with zero external sound files, configured live Firebase Firestore listeners with Base64 fallback storage, integrated Chart.js trend analytics, and deployed to Vercel with CI/CD.",
    techTokens: [
      "React 19",
      "Vite",
      "Firebase Auth",
      "Firestore",
      "Web Audio API",
      "Chart.js",
      "Framer Motion",
      "Vercel",
    ],
    link: "https://github.com/Kajalmehta29/zenith-list-app",
    demoLink: "https://zenith-list-app.vercel.app",
  },
  {
    num: "04",
    title: "Astronomy Explorer",
    category: "Interactive Celestial Telemetry & 3D Space Platform",
    problem:
      "Complex astrophysics, planetary physics, and orbital mechanics are typically documented in dry, static tables and text, making comparative celestial mechanics and orbital dynamics difficult to conceptualize intuitively.",
    solution:
      "Created an interactive educational space exploration platform featuring a 3D Solar System simulation with real-time planetary orbits, celestial night sky star mapping, constellation visualizers, and detailed physical telemetry profiles (gravity, atmosphere, orbital periods).",
    contribution:
      "Engineered the modular multi-page client architecture using vanilla JavaScript and HTML5 Canvas, programmed mathematical orbital coordinate projections and custom particle starfields, designed responsive dark-space styling, and optimized canvas rendering for smooth 60fps interaction.",
    techTokens: ["JavaScript", "HTML5 Canvas", "CSS3", "3D Orbits", "Responsive UI"],
    link: "https://github.com/Kajalmehta29/astronomy-explorer",
  },
];

// ── SKILLS & TECHNOLOGIES DATA (Grouped by category, no progress bars or percentages) ──
const skillsData = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "PHP", "SQL", "HTML5/CSS3"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "REST APIs", "Redis", "Microservices Principles", "JWT Auth", "RBAC"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "Flutter", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Postman", "IntelliJ IDEA", "VS Code", "CI/CD Basics"],
  },
];

// ── EXPERIENCE DATA (2–4 concise bullets per role) ──
const experiencesData = [
  {
    company: "Calanjiyam Consultancies and Technologies",
    role: "Junior Associate Developer",
    period: "April 2025 — PRESENT",
    location: "Remote",
    bullets: [
      "Delivered 4 client software applications end-to-end from requirement discovery through to production deployment.",
      "Built 3 production-grade ERP modules using PHP, JavaScript, and MySQL for daily business workflow automation.",
      "Designed secure REST APIs and implemented Role-Based Access Control (RBAC) security protocols.",
      "Optimized relational database schemas and indexed SQL queries for sub-second report generation.",
    ],
    tech: ["PHP", "JavaScript", "MySQL", "REST APIs", "Git", "RBAC"],
  },
  {
    company: "GirlScript Summer of Code (GSSoC EXTD)",
    role: "Open Source Contributor",
    period: "2024",
    location: "Open Source",
    bullets: [
      "Ranked 81st nationwide among 5,000+ contributors (Top 1.6%) during the extended edition.",
      "Contributed production features, bug fixes, and technical documentation across multiple repositories.",
      "Collaborated with project maintainers and global reviewers via GitHub pull requests and code reviews.",
    ],
    tech: ["Git", "GitHub", "JavaScript", "React", "Open Source Standards"],
  },
];

// ── ACHIEVEMENTS DATA ──
const achievementsData = [
  {
    title: "GSSoC '24 Extended Rank #81",
    highlight: "Top 1.6% Contributor",
    desc: "Ranked 81st out of 5,000+ open-source developers nationwide with 15+ merged pull requests.",
    icon: Trophy,
    accentLight: "text-[#0F5132]",
    accentDark: "text-[#34D399]",
  },
  {
    title: "Production Client Delivery",
    highlight: "4 Client Apps & 3 ERPs",
    desc: "Delivered 4 enterprise client projects and engineered 3 ERP modules in active business use.",
    icon: Rocket,
    accentLight: "text-[#B45309]",
    accentDark: "text-[#F59E0B]",
  },
  {
    title: "350+ Problems Solved",
    highlight: "Daily Consistency & Learning",
    desc: "Maintained a dedicated problem-solving routine on LeetCode with 350+ problems completed, driven by continuous curiosity and disciplined daily practice.",
    icon: Flame,
    accentLight: "text-[#D97706]",
    accentDark: "text-[#FBBF24]",
  },
  {
    title: "Academic Distinction",
    highlight: "8.99 / 10 CGPA • VIT Bhopal",
    desc: "Maintained an 8.99 GPA at VIT Bhopal University with high departmental standing in systems.",
    icon: Medal,
    accentLight: "text-[#0F5132]",
    accentDark: "text-[#34D399]",
  },
  {
    title: "District & School Topper",
    highlight: "Rank #1 • LIC Olympiad (2020)",
    desc: "Dehradun District Topper in the competitive Hindustan Olympiad organized by LIC (2020), and 12th class Senior Secondary School Topper.",
    icon: Award,
    accentLight: "text-[#B45309]",
    accentDark: "text-[#F59E0B]",
  },
  {
    title: "National Cadet Corps (NCC)",
    highlight: "'A' Certificate Holder",
    desc: "Certified 'A' Certificate cadet, exemplifying leadership, drill discipline, crisis coordination, and civic service.",
    icon: Shield,
    accentLight: "text-[#0F5132]",
    accentDark: "text-[#34D399]",
  },
];

// ── CERTIFICATES DATA ──
const certificatesData = [
  {
    name: "Software Engineering Intern",
    issuer: "HackerRank",
    date: "2024",
    colorLight: "#0F5132",
    colorDark: "#34D399",
    link: "https://drive.google.com/file/d/1bvGaK_KL0eiZ71p9Jfk6cdNs7Pi37CSi/view?usp=sharing",
    skills: ["Data Structures", "Algorithms", "SQL Tuning"],
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "IntelliPaat",
    date: "2024",
    colorLight: "#B45309",
    colorDark: "#F59E0B",
    link: "https://drive.google.com/file/d/1iTZfIxcq7gv7iAuN_oVF9cxnEupKQPqX/view?usp=sharing",
    skills: ["AWS Architecture", "IAM Security", "S3 & VPC"],
  },
  {
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2024",
    colorLight: "#C2410C",
    colorDark: "#FB923C",
    link: "https://badges.parchment.com/public/assertions/o0_AYRroRS2ClFFbuRj3vQ?identity__email=mehtakajal796@gmail.com",
    skills: ["REST Contracts", "API Testing", "Newman CI/CD"],
  },
  {
    name: "Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "2023",
    colorLight: "#166534",
    colorDark: "#4ADE80",
    link: "https://drive.google.com/file/d/14X-wMCsxnDWelSCgG_juce3GnJUAwiY8/view?usp=drive_link",
    skills: ["TCP/IP", "DNS & DHCP", "Routing Protocols"],
  },
];

// ── ANIMATION VARIANTS ──
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const App: React.FC = () => {
  // Theme state with local storage persistence and OS preference detection
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio-theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [isDark]);

  // Close mobile menu on resize to desktop (md breakpoint: 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Smooth scroll handler with header offset
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero portrait scroll parallax
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroPhotoY = useTransform(heroScroll, [0, 1], ["0%", "12%"]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("mehtakajal796@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 overflow-x-hidden font-sans ${isDark ? "bg-[#0E1210] text-[#F3F4F1]" : "bg-[#FBF9F4] text-[#1C1917]"
        }`}
    >
      {/* ── TOP SCROLL PROGRESS INDICATOR ── */}
      <motion.div
        style={{ scaleX }}
        className={`fixed top-0 left-0 right-0 h-[2.5px] z-[60] origin-left ${isDark
          ? "bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#F59E0B]"
          : "bg-gradient-to-r from-[#0F5132] via-[#059669] to-[#B45309]"
          }`}
      />

      {/* ── INTERACTIVE TOPOGRAPHIC & LEAF CANVAS (ADAPTS TO DARK MODE) ── */}
      <TopographicBackground isDark={isDark} />

      {/* Subtle fine architectural drafting texture */}
      <div className="pointer-events-none fixed inset-0 bg-subtle-grid opacity-25 z-0" />

      {/* ── MINIMALIST EDITORIAL TOP BAR WITH DARK THEME TOGGLE & HAMBURGER MENU ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md py-3.5 px-6 md:px-12 transition-colors duration-300 border-b ${isDark
          ? "bg-[#0E1210]/85 border-[#1F2922]"
          : "bg-[#FBF9F4]/90 border-[#E7E2D6]"
          }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <span
              className={`font-display font-bold tracking-tight text-lg transition-colors ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                }`}
            >
              Kajal Mehta
              <span className={isDark ? "text-[#34D399]" : "text-[#0F5132]"}>.</span>
            </span>
            <span
              className={`hidden sm:inline-block text-xs font-mono tracking-wider ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                }`}
            >
              / Software Developer
            </span>
          </a>

          {/* Desktop Navigation Links + Theme Switcher (All 4 sections visible on md+) */}
          <div
            className={`hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest ${isDark ? "text-[#9BA39B]" : "text-[#57534E]"
              }`}
          >
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className={`transition-colors font-semibold ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"
                }`}
            >
              01 Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className={`transition-colors font-semibold ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"
                }`}
            >
              02 Skills
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "experience")}
              className={`transition-colors font-semibold ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"
                }`}
            >
              03 Experience
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={`transition-colors font-semibold ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"
                }`}
            >
              04 About
            </a>

            {/* Dark Theme Toggle Button (Desktop) */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.12, rotate: 12 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full border transition-all cursor-pointer shadow-xs ${isDark
                ? "bg-[#18221C] border-[#2A3B30] text-[#FBBF24] hover:border-[#FBBF24]"
                : "bg-white border-[#D6CEC2] text-[#B45309] hover:border-[#B45309]"
                }`}
              title={isDark ? "Switch to Warm Champagne Light Mode" : "Switch to Nocturnal Forest Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
          </div>

          {/* Mobile Right Controls: Theme Switcher + Hamburger Menu Toggle (< md) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Dark Theme Toggle Button (Mobile) */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.88 }}
              className={`p-2 rounded-full border transition-all cursor-pointer shadow-xs ${isDark
                ? "bg-[#18221C] border-[#2A3B30] text-[#FBBF24]"
                : "bg-white border-[#D6CEC2] text-[#B45309]"
                }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            {/* Mobile Hamburger Toggle Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.92 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium transition-all cursor-pointer shadow-xs ${isDark
                ? isMobileMenuOpen
                  ? "bg-[#1F2922] border-[#34D399] text-[#34D399]"
                  : "bg-[#18221C] border-[#2A3B30] text-[#E5E7EB] hover:border-[#34D399]"
                : isMobileMenuOpen
                  ? "bg-[#EAE4D7] border-[#0F5132] text-[#0F5132]"
                  : "bg-white border-[#D6CEC2] text-[#1C1917] hover:border-[#0F5132]"
                }`}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 transition-transform duration-200" />
              ) : (
                <Menu className="w-4 h-4 transition-transform duration-200" />
              )}
              <span className="text-[11px] font-semibold tracking-wider uppercase">
                {isMobileMenuOpen ? "Close" : "Menu"}
              </span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SLIDE-DOWN NAVIGATION DRAWER (< md) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex flex-col">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer Container */}
            <motion.nav
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={`relative z-10 mt-[64px] mx-4 sm:mx-6 rounded-2xl border p-4 sm:p-5 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)] ${isDark
                ? "bg-[#0E1210]/95 border-[#1F2922] text-[#F3F4F1] shadow-black/80"
                : "bg-[#FBF9F4]/98 border-[#D6CEC2] text-[#1C1917] shadow-xl"
                } backdrop-blur-xl`}
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-dashed border-current/15">
                <span
                  className={`text-[11px] font-mono uppercase tracking-widest ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                    }`}
                >
                  Explore Sections
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${isDark
                    ? "bg-[#18221C] text-[#34D399] border border-[#2A3B30]"
                    : "bg-[#EFECE6] text-[#0F5132] border border-[#D6CEC2]"
                    }`}
                >
                  4 Sections
                </span>
              </div>

              {/* All 4 Navigation Items with descriptions */}
              <div className="space-y-2">
                {[
                  {
                    num: "01",
                    label: "Featured Projects",
                    id: "projects",
                    desc: "Full-Stack & Mobile Systems",
                  },
                  {
                    num: "02",
                    label: "Skills & Technologies",
                    id: "skills",
                    desc: "Languages, Backend, Frontend & DBs",
                  },
                  {
                    num: "03",
                    label: "Experience",
                    id: "experience",
                    desc: "SDE Roles, Responsibilities & Impact",
                  },
                  {
                    num: "04",
                    label: "About & Achievements",
                    id: "about",
                    desc: "Bio, Education, Honors & Contact",
                  },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all active:scale-[0.99] ${isDark
                      ? "border-[#1F2922] bg-[#141C16]/70 hover:bg-[#1A261D] hover:border-[#34D399]/40 active:border-[#34D399]"
                      : "border-[#E7E2D6] bg-white/75 hover:bg-white hover:border-[#0F5132]/40 active:border-[#0F5132]"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${isDark
                          ? "bg-[#1F2922] text-[#34D399]"
                          : "bg-[#EFECE6] text-[#0F5132]"
                          }`}
                      >
                        {item.num}
                      </span>
                      <div>
                        <div className="text-sm font-display font-bold tracking-tight">
                          {item.label}
                        </div>
                        <div
                          className={`text-[11px] font-mono ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                            }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                        }`}
                    />
                  </a>
                ))}
              </div>

              {/* Social Links Bar */}
              <div
                className={`mt-3.5 pt-3 border-t flex items-center justify-between text-xs font-mono ${isDark ? "border-[#1F2922] text-[#7D8A80]" : "border-[#E7E2D6] text-[#78716C]"
                  }`}
              >
                <span className="text-[11px] truncate">mehtakajal796@gmail.com</span>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="https://github.com/Kajalmehta29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"}`}
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kajalmehta29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"}`}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      {/* ── MAIN CONTENT ── */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40">
        {/* ══════════════════════════════════════════════════════════════
            01 // HERO SECTION
            ══════════════════════════════════════════════════════════════ */}
        <section ref={heroRef} className="pb-24 md:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left: 2–3 Sentences, Primary Stack, 3 Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div variants={revealVariants} className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isDark ? "bg-[#34D399]" : "bg-[#0F5132]"
                      }`}
                  ></span>
                </span>
                <span
                  className={`text-xs font-mono tracking-wider uppercase font-semibold ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                    }`}
                >
                  Software Developer • Available for SDE Roles
                </span>
              </motion.div>

              <motion.h1
                variants={revealVariants}
                className={`font-display text-4xl sm:text-6xl lg:text-[4.6rem] font-extrabold tracking-tight leading-[1.05] ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                  }`}
              >
                Hi, I'm{" "}
                <span
                  className={
                    isDark
                      ? "bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#F59E0B] bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-[#0F5132] via-[#059669] to-[#B45309] bg-clip-text text-transparent"
                  }
                >
                  Kajal Mehta
                </span>
                .
              </motion.h1>

              <motion.p
                variants={revealVariants}
                className={`text-lg sm:text-xl leading-relaxed max-w-xl font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                  }`}
              >
                I am a Software Developer passionate about building scalable web applications, secure
                REST APIs, and solving real-world problems. Experienced in shipping production ERP modules
                and contributing to active open-source repositories.
              </motion.p>

              {/* Primary Stack */}
              <motion.div
                variants={revealVariants}
                className={`text-xs font-mono tracking-wider pt-1 ${isDark ? "text-[#9BA39B]" : "text-[#78716C]"
                  }`}
              >
                <span
                  className={`font-semibold uppercase ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                    }`}
                >
                  Primary Stack:{" "}
                </span>
                Java{" "}
                <span className={`font-bold ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"}`}>
                  /
                </span>{" "}
                Spring Boot{" "}
                <span className={`font-bold ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"}`}>
                  /
                </span>{" "}
                React{" "}
                <span className={`font-bold ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"}`}>
                  /
                </span>{" "}
                MySQL{" "}
                <span className={`font-bold ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"}`}>
                  /
                </span>{" "}
                Redis{" "}
                <span className={`font-bold ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"}`}>
                  /
                </span>{" "}
                Docker
              </motion.div>

              {/* Required Buttons: View Projects, Resume, and GitHub */}
              <motion.div
                variants={revealVariants}
                className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6"
              >
                {/* Button 1: View Projects */}
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-md ${isDark
                    ? "bg-[#10B981] text-[#0E1210] hover:bg-[#34D399]"
                    : "bg-[#1C1917] text-[#FBF9F4] hover:bg-[#0F5132]"
                    }`}
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </motion.a>

                {/* Button 2: Resume */}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full border font-semibold text-sm transition-colors shadow-xs ${isDark
                    ? "bg-[#161F19] border-[#2A3B30] text-[#F3F4F1] hover:border-[#34D399] hover:text-[#34D399]"
                    : "bg-white border-[#D6CEC2] text-[#1C1917] hover:border-[#0F5132] hover:text-[#0F5132]"
                    }`}
                >
                  <FileText
                    className={`w-4 h-4 ${isDark ? "text-[#34D399]" : "text-[#0F5132]"}`}
                  />
                  <span>Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7D8A80]" />
                </motion.a>

                {/* Button 3: GitHub */}
                <motion.a
                  href="https://github.com/Kajalmehta29"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full border font-semibold text-sm transition-colors shadow-xs ${isDark
                    ? "bg-[#161F19] border-[#2A3B30] text-[#F3F4F1] hover:border-[#F3F4F1]"
                    : "bg-white border-[#D6CEC2] text-[#1C1917] hover:border-[#1C1917]"
                    }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Real Photograph with Parallax Depth */}
            <motion.div
              style={{ y: heroPhotoY }}
              variants={revealVariants}
              className="lg:col-span-5 flex flex-col items-center lg:items-end"
            >
              <motion.div
                whileHover={{ scale: 1.025, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="relative group max-w-sm w-full cursor-pointer"
              >
                <div
                  className={`absolute -inset-4 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 ${isDark
                    ? "bg-gradient-to-tr from-[#10B981]/20 via-[#F59E0B]/20 to-[#34D399]/15"
                    : "bg-gradient-to-tr from-[#0F5132]/15 via-[#B45309]/15 to-[#D97706]/10"
                    }`}
                />
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl aspect-3/4 border ${isDark
                    ? "bg-[#141C16] border-[#26372C]"
                    : "bg-[#F5F1E8] border-[#E7E2D6]"
                    }`}
                >
                  <img
                    src={profilePic}
                    alt="Kajal Mehta - Software Developer"
                    className="w-full h-full object-cover object-top filter grayscale-10 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div
                    className={`absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t ${isDark
                      ? "from-[#0E1210]/95 via-[#0E1210]/50 to-transparent text-[#F3F4F1]"
                      : "from-[#1C1917]/85 via-[#1C1917]/35 to-transparent text-[#FBF9F4]"
                      }`}
                  >
                    <p className="text-sm font-display font-bold">Kajal Mehta</p>
                    <p
                      className={`text-xs font-mono ${isDark ? "text-[#A3ADA3]" : "text-[#D6CEC2]"
                        }`}
                    >
                      VIT Bhopal University • 8.99 CGPA
                    </p>
                  </div>
                </div>
                <div
                  className={`mt-3.5 flex items-center justify-between text-xs font-mono px-1 ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                    }`}
                >
                  <span>Dehradun, India</span>
                  <span
                    className={`font-semibold ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                      }`}
                  >
                    Open to Relocation
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            02 // FEATURED PROJECTS
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="projects"
          className={`py-24 border-t ${isDark ? "border-[#1F2922]" : "border-[#E7E2D6]"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <span
              className={`text-xs font-mono font-bold tracking-widest uppercase block mb-2 ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                }`}
            >
              02 // Featured Projects
            </span>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                }`}
            >
              Selected Software I've{" "}
              <span
                className={
                  isDark
                    ? "bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#F59E0B] bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-[#0F5132] via-[#059669] to-[#B45309] bg-clip-text text-transparent"
                }
              >
                Architected & Shipped.
              </span>
            </h2>
            <p
              className={`text-base mt-2.5 font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                }`}
            >
              Substantial full-stack applications with clear problem statements, algorithmic optimizations, and production-ready architectures.
            </p>
          </motion.div>

          {/* Projects List */}
          <div className={`divide-y ${isDark ? "divide-[#1F2922]" : "divide-[#E7E2D6]"}`}>
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group px-4 -mx-4 rounded-2xl transition-all"
              >
                {/* Index */}
                <div className="lg:col-span-1">
                  <span
                    className={`font-display text-3xl sm:text-4xl font-extrabold transition-colors ${isDark
                      ? "text-[#28382F] group-hover:text-[#34D399]"
                      : "text-[#D6CEC2] group-hover:text-[#0F5132]"
                      }`}
                  >
                    {project.num}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                        }`}
                    >
                      {project.category}
                    </span>
                    <h3
                      className={`font-display text-2xl sm:text-3xl font-bold mt-1 transition-colors ${isDark
                        ? "text-[#F3F4F1] group-hover:text-[#34D399]"
                        : "text-[#1C1917] group-hover:text-[#0F5132]"
                        }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className={`space-y-2 text-sm leading-relaxed ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                      }`}
                  >
                    <p>
                      <strong className={isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"}>
                        The Problem:{" "}
                      </strong>
                      {project.problem}
                    </p>
                    <p>
                      <strong className={isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"}>
                        What I Built:{" "}
                      </strong>
                      {project.solution}
                    </p>
                    <p>
                      <strong className={isDark ? "text-[#34D399]" : "text-[#0F5132]"}>
                        My Contribution:{" "}
                      </strong>
                      {project.contribution}
                    </p>
                  </div>

                  <div
                    className={`text-xs font-mono pt-2 ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                      }`}
                  >
                    <span
                      className={`font-semibold uppercase ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                        }`}
                    >
                      Stack:{" "}
                    </span>
                    {project.techTokens.map((token, tIdx) => (
                      <span key={token}>
                        {token}
                        {tIdx < project.techTokens.length - 1 && (
                          <span
                            className={`mx-2 font-bold ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"
                              }`}
                          >
                            /
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Links: Live Demo (if available) + GitHub Repo */}
                <div className="lg:col-span-3 flex flex-wrap lg:justify-end items-center gap-2.5 pt-2">
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs ${isDark
                        ? "bg-[#10B981] hover:bg-[#34D399] text-[#0E1210]"
                        : "bg-[#0F5132] hover:bg-[#059669] text-white"
                        }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, x: 2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm group/btn ${isDark
                      ? "bg-[#18231C] hover:bg-[#10B981] text-[#F3F4F1] hover:text-[#0E1210] border border-[#2B3D31]"
                      : "bg-[#1C1917] hover:bg-[#0F5132] text-[#FBF9F4]"
                      }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            03 // SKILLS & TECHNOLOGIES
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="skills"
          className={`py-24 border-t ${isDark ? "border-[#1F2922]" : "border-[#E7E2D6]"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span
              className={`text-xs font-mono font-bold tracking-widest uppercase block mb-2 ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"
                }`}
            >
              03 // Skills & Technologies
            </span>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                }`}
            >
              Organized Technical{" "}
              <span
                className={
                  isDark
                    ? "bg-gradient-to-r from-[#F59E0B] to-[#34D399] bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-[#B45309] to-[#0F5132] bg-clip-text text-transparent"
                }
              >
                Overview.
              </span>
            </h2>
            <p
              className={`text-base mt-2.5 font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                }`}
            >
              Concise grouping of technologies I use for production development and system design.
            </p>
          </motion.div>

          {/* Grouped Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className={`p-6 rounded-2xl border transition-all ${isDark
                  ? "bg-[#141C16]/80 border-[#223126]"
                  : "bg-[#F5F1E8]/70 border-[#E7E2D6]"
                  }`}
              >
                <h3
                  className={`font-display text-lg font-bold mb-3 flex items-center gap-2 ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                    }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${isDark ? "bg-[#34D399]" : "bg-[#0F5132]"
                      }`}
                  />
                  <span>{group.category}</span>
                </h3>
                <div
                  className={`flex flex-wrap gap-x-2 gap-y-1.5 text-xs font-mono ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                    }`}
                >
                  {group.skills.map((skill, sIdx) => (
                    <span key={skill}>
                      <span
                        className={`transition-colors ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"
                          }`}
                      >
                        {skill}
                      </span>
                      {sIdx < group.skills.length - 1 && (
                        <span className={`ml-2 ${isDark ? "text-[#28382F]" : "text-[#D6CEC2]"}`}>
                          •
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            04 // EXPERIENCE
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="experience"
          className={`py-24 border-t ${isDark ? "border-[#1F2922]" : "border-[#E7E2D6]"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <span
              className={`text-xs font-mono font-bold tracking-widest uppercase block mb-2 ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                }`}
            >
              04 // Professional Experience
            </span>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                }`}
            >
              Hands-On Work on{" "}
              <span
                className={
                  isDark
                    ? "bg-gradient-to-r from-[#34D399] to-[#F59E0B] bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-[#0F5132] to-[#B45309] bg-clip-text text-transparent"
                }
              >
                Real Applications.
              </span>
            </h2>
            <p
              className={`text-base mt-2.5 font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                }`}
            >
              Internship delivery and open-source contributions with verifiable production outcomes.
            </p>
          </motion.div>

          <div className="space-y-14">
            {experiencesData.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Left */}
                <div className="lg:col-span-4">
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-widest block mb-1 ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                      }`}
                  >
                    {exp.period} // {exp.location}
                  </span>
                  <h3
                    className={`font-display text-2xl font-bold ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                      }`}
                  >
                    {exp.company}
                  </h3>
                  <p
                    className={`text-sm font-semibold mt-0.5 ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                      }`}
                  >
                    {exp.role}
                  </p>
                  <div
                    className={`text-xs font-mono mt-3 ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                      }`}
                  >
                    <span className={isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"}>Tech: </span>
                    {exp.tech.join(" / ")}
                  </div>
                </div>

                {/* Right: Concrete Bullets */}
                <div className="lg:col-span-8 space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <motion.div
                      key={bIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: bIdx * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                          }`}
                      />
                      <p
                        className={`text-sm leading-relaxed font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                          }`}
                      >
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            05 // ABOUT, ACHIEVEMENTS, EDUCATION & CONTACT
            ══════════════════════════════════════════════════════════════ */}
        <section
          id="about"
          className={`py-24 border-t ${isDark ? "border-[#1F2922]" : "border-[#E7E2D6]"}`}
        >
          {/* About Narrative (~80 words) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            {/* 3D AI Avatar Companion */}
            <div className="lg:col-span-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative group max-w-xs mx-auto"
              >
                <div
                  className={`absolute -inset-4 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 ${isDark
                    ? "bg-gradient-to-tr from-[#10B981]/25 via-[#F59E0B]/20 to-[#34D399]/20"
                    : "bg-gradient-to-tr from-[#0F5132]/20 via-[#B45309]/15 to-[#D97706]/15"
                    }`}
                />
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl aspect-square border ${isDark
                    ? "bg-[#141C16] border-[#2B3D31]"
                    : "bg-[#1C1917] border-[#D6CEC2]/60"
                    }`}
                >
                  <img
                    src={avatarAiPic}
                    alt="Kajal Mehta - 3D AI Digital Avatar"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute bottom-0 inset-x-0 p-4 text-[#FBF9F4] bg-gradient-to-t ${isDark
                      ? "from-[#0E1210]/95 via-[#0E1210]/60 to-transparent"
                      : "from-[#1C1917]/90 to-transparent"
                      }`}
                  >
                    <span
                      className={`text-xs font-mono font-semibold flex items-center gap-1.5 ${isDark ? "text-[#34D399]" : "text-[#10B981]"
                        }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                      3D AI Digital Twin
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* About Prose */}
            <div className="lg:col-span-7 space-y-4">
              <span
                className={`text-xs font-mono font-bold tracking-widest uppercase block ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                  }`}
              >
                05 // About Me
              </span>
              <h2
                className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                  }`}
              >
                Software Developer with an{" "}
                <span
                  className={
                    isDark
                      ? "bg-gradient-to-r from-[#34D399] to-[#F59E0B] bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-[#0F5132] to-[#B45309] bg-clip-text text-transparent"
                  }
                >
                  Engineering Mindset.
                </span>
              </h2>

              <p
                className={`text-base sm:text-lg leading-relaxed font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                  }`}
              >
                I'm a software developer who enjoys turning complex backend requirements into reliable,
                maintainable software. With experience shipping client-facing ERP applications during my
                internship and contributing to open-source repositories, my focus centers on resilient API
                architecture, relational database optimization, and scalable full-stack products.
              </p>
              <p
                className={`text-base sm:text-lg leading-relaxed font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                  }`}
              >
                Currently completing my Computer Science degree at{" "}
                <strong className={isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"}>
                  VIT Bhopal University (8.99 CGPA)
                </strong>
                , I bring a demonstrated foundation of academic excellence and leadership as an NCC 'A' Certificate
                holder and District Olympiad Topper, combining disciplined execution with a drive for building resilient software.
              </p>

              {/* Education Callout */}
              <div
                className={`pt-2 flex items-center gap-2 text-xs font-mono ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                  }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="font-bold">Education:</span>
                <span>B.Tech in Computer Science & Engineering — VIT Bhopal (8.99 / 10 CGPA)</span>
              </div>
            </div>
          </div>

          {/* Key Achievements Grid */}
          <div className="mb-20">
            <h3
              className={`text-xs font-mono font-bold uppercase tracking-widest mb-6 ${isDark ? "text-[#F59E0B]" : "text-[#B45309]"
                }`}
            >
              Relevant Achievements & Honors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievementsData.map((item) => {
                const IconComp = item.icon;
                const accentClass = isDark ? item.accentDark : item.accentLight;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -3 }}
                    className={`p-5 rounded-2xl border transition-all ${isDark
                      ? "bg-[#141C16]/80 border-[#223126]"
                      : "bg-[#F5F1E8]/70 border-[#E7E2D6]"
                      }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <IconComp className={`w-4 h-4 ${accentClass}`} />
                      <span className={`text-[11px] font-mono font-bold uppercase ${accentClass}`}>
                        {item.highlight}
                      </span>
                    </div>
                    <h4
                      className={`font-display text-base font-bold mb-1 ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                        }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                        }`}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certificates */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-xs font-mono font-bold uppercase tracking-widest ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                  }`}
              >
                Verified Certifications & Credentials
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificatesData.map((cert) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group cursor-pointer shadow-2xs ${isDark
                    ? "bg-[#141C16] border-[#223126] hover:border-[#34D399]"
                    : "bg-white border-[#E7E2D6] hover:border-[#0F5132]/60"
                    }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider"
                        style={{ color: isDark ? cert.colorDark : cert.colorLight }}
                      >
                        {cert.issuer} • {cert.date}
                      </span>
                      <ExternalLink
                        className={`w-3.5 h-3.5 transition-colors ${isDark
                          ? "text-[#7D8A80] group-hover:text-[#34D399]"
                          : "text-[#A8A29E] group-hover:text-[#0F5132]"
                          }`}
                      />
                    </div>
                    <h4
                      className={`font-display text-sm font-bold mb-2 leading-snug transition-colors ${isDark
                        ? "text-[#F3F4F1] group-hover:text-[#34D399]"
                        : "text-[#1C1917] group-hover:text-[#0F5132]"
                        }`}
                    >
                      {cert.name}
                    </h4>
                  </div>
                  <div
                    className={`pt-2 text-[10px] font-mono flex flex-wrap gap-1 ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                      }`}
                  >
                    {cert.skills.join(" • ")}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className={`pt-12 border-t ${isDark ? "border-[#1F2922]" : "border-[#E7E2D6]"}`}>
            <div className="max-w-2xl space-y-4">
              <span
                className={`text-xs font-mono font-bold tracking-widest uppercase block ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                  }`}
              >
                Get in Touch
              </span>
              <h2
                className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-[#F3F4F1]" : "text-[#1C1917]"
                  }`}
              >
                Let's discuss{" "}
                <span
                  className={
                    isDark
                      ? "bg-gradient-to-r from-[#34D399] to-[#F59E0B] bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-[#0F5132] to-[#B45309] bg-clip-text text-transparent"
                  }
                >
                  software opportunities.
                </span>
              </h2>
              <p
                className={`text-sm sm:text-base font-light ${isDark ? "text-[#A3ADA3]" : "text-[#57534E]"
                  }`}
              >
                Available for Software Engineering internships and full-time roles. My inbox is always open.
              </p>

              {/* Action Buttons: Email, Copy, Resume */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.a
                  href="mailto:mehtakajal796@gmail.com"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs tracking-wide transition-colors shadow-md ${isDark
                    ? "bg-[#10B981] text-[#0E1210] hover:bg-[#34D399]"
                    : "bg-[#1C1917] text-[#FBF9F4] hover:bg-[#0F5132]"
                    }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>mehtakajal796@gmail.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>

                <motion.button
                  onClick={copyEmailToClipboard}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-full border font-semibold text-xs transition-colors shadow-2xs cursor-pointer ${isDark
                    ? "bg-[#161F19] border-[#2A3B30] text-[#F3F4F1] hover:border-[#34D399]"
                    : "bg-white border-[#D6CEC2] text-[#1C1917] hover:border-[#0F5132]"
                    }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check
                        className={`w-3.5 h-3.5 ${isDark ? "text-[#34D399]" : "text-[#0F5132]"
                          }`}
                      />
                      <span className={isDark ? "text-[#34D399]" : "text-[#0F5132]"}>
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy
                        className={`w-3.5 h-3.5 ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
                          }`}
                      />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-full border font-semibold text-xs transition-colors shadow-2xs ${isDark
                    ? "bg-[#161F19] border-[#2A3B30] text-[#F3F4F1] hover:border-[#34D399] hover:text-[#34D399]"
                    : "bg-white border-[#D6CEC2] text-[#1C1917] hover:border-[#0F5132] hover:text-[#0F5132]"
                    }`}
                >
                  <FileText
                    className={`w-3.5 h-3.5 ${isDark ? "text-[#34D399]" : "text-[#0F5132]"}`}
                  />
                  <span>Download Resume</span>
                </motion.a>
              </div>

              {/* Social Channels */}
              <div
                className={`pt-4 flex items-center gap-6 text-xs font-mono uppercase tracking-wider ${isDark ? "text-[#7D8A80]" : "text-[#57534E]"
                  }`}
              >
                <a
                  href="https://linkedin.com/in/kajal-mehta-125a9628b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors flex items-center gap-1 ${isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"
                    }`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Kajalmehta29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors flex items-center gap-1 ${isDark ? "hover:text-[#F3F4F1]" : "hover:text-[#1C1917]"
                    }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className={isDark ? "text-[#506356]" : "text-[#A8A29E]"}>
                  Dehradun, India
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        className={`relative z-10 border-t py-8 px-6 md:px-12 text-xs font-mono transition-colors duration-300 ${isDark
          ? "border-[#1F2922] text-[#7D8A80] bg-[#0E1210]"
          : "border-[#E7E2D6] text-[#78716C] bg-[#FBF9F4]"
          }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={isDark ? "text-[#9BA39B]" : "text-[#57534E]"}>
            © 2026 Kajal Mehta • Software Developer
          </p>
          <div
            className={`flex items-center gap-4 ${isDark ? "text-[#7D8A80]" : "text-[#78716C]"
              }`}
          >
            <a
              href="#projects"
              className={isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"}
            >
              Projects
            </a>
            <span>/</span>
            <a
              href="#skills"
              className={isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"}
            >
              Skills
            </a>
            <span>/</span>
            <a
              href="#experience"
              className={isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"}
            >
              Experience
            </a>
            <span>/</span>
            <a
              href="#about"
              className={isDark ? "hover:text-[#34D399]" : "hover:text-[#0F5132]"}
            >
              About
            </a>
          </div>
        </div>
      </footer>

      {/* ── FLOATING RESUME QUICK ACTION ── */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-xl border shadow-2xl transition-all group ${isDark
          ? "bg-[#141C16] border-[#2A3B30] text-[#F3F4F1] hover:bg-[#10B981] hover:text-[#0E1210]"
          : "bg-[#1C1917] border-white/20 text-[#FBF9F4] hover:bg-[#0F5132]"
          }`}
      >
        <FileText
          className={`w-4 h-4 transition-colors ${isDark
            ? "text-[#34D399] group-hover:text-[#0E1210]"
            : "text-[#10B981] group-hover:text-white"
            }`}
        />
        <span className="text-xs font-mono font-bold uppercase tracking-wider">Resume</span>
        <ArrowUpRight
          className={`w-3.5 h-3.5 transition-colors ${isDark
            ? "text-[#7D8A80] group-hover:text-[#0E1210]"
            : "text-[#A8A29E] group-hover:text-white"
            }`}
        />
      </motion.a>
    </div>
  );
};

export default App;
