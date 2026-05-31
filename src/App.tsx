import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink, Award } from "lucide-react";
import { useRef } from "react";
import profilePic from "./assets/profile.jpeg";

const containerVars: Variants = {
  animate: { transition: { staggerChildren: 0.12 } }
};
const itemVars: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const skills = ["HTML", "CSS", "JavaScript", "PHP", "SpringBoot", "Java", "React", "Flutter", "MySQL", "Postman", "Spring Security"];

const experiences = [
  {
    year: "April 2025 — PRESENT",
    role: "Junior Associate Developer Intern",
    company: "Calanjiyam Consultancies and Technologies",
    desc: "Designing system architecture and implementing backend logic with PHP and MySQL.",
    tag: "Part-time"
  },
  {
    year: "2024",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    desc: "Ranked 81st among 5,000+ globally. Contributed to Python and front-end repositories across 10+ projects.",
    tag: "Open Source"
  }
];

const certs = [
  {
    name: "Software Engineering Intern",
    issuer: "HackerRank",
    color: "#2EC866",
    link: "https://drive.google.com/file/d/1bvGaK_KL0eiZ71p9Jfk6cdNs7Pi37CSi/view?usp=sharing"
  },
  {
    name: "Computer Networking",
    issuer: "Coursera",
    color: "#0056D2",
    link: "https://drive.google.com/file/d/14X-wMCsxnDWelSCgG_juce3GnJUAwiY8/view?usp=drive_link"
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "IntelliPaat",
    color: "#FF9900",
    link: "https://drive.google.com/file/d/1iTZfIxcq7gv7iAuN_oVF9cxnEupKQPqX/view?usp=sharing"
  },
  {
    name: "Postman API Fundamentals",
    issuer: "Postman",
    color: "#FF6C37",
    link: "https://badges.parchment.com/public/assertions/o0_AYRroRS2ClFFbuRj3vQ?identity__email=mehtakajal796@gmail.com"
  },
];

const projects = [
  {
    title: "Smart Expense Splitter",
    desc: "Reduced transaction volume by 60% using Graph-based algorithms. Built with Spring Boot & Flutter.",
    stack: ["SpringBoot", "Flutter", "MySQL"],
    color: "bg-sky/20",
    num: "01",
    link: "https://github.com/Kajalmehta29/SmartExpenseSplitter"
  },
  {
    title: "Donate Bridge",
    desc: "Platform connecting donors to animal shelters in India using real-time updates.",
    stack: ["HTML", "CSS", "JS", "Supabase"],
    color: "bg-rose/20",
    num: "02",
    link: "https://github.com/Kajalmehta29/DonateBridge"
  },
  {
    title: "Astronomy Explorer",
    desc: "A pure HTML, CSS, and JavaScript project that showcases major stars, constellations, and all planets with quick educational facts.",
    stack: ["HTML", "CSS", "JavaScript"],
    color: "bg-sage/20",
    num: "03",
    link: "https://github.com/Kajalmehta29/astronomy-explorer"
  }
];

const techStack = [
  { cat: "Backend", items: ["SpringBoot", "Java", "PHP"], color: "bg-sky/40" },
  { cat: "Frontend & Mobile", items: ["React", "Flutter", "HTML/CSS", "JavaScript"], color: "bg-rose/40" },
  { cat: "Database", items: ["MySQL"], color: "bg-sage/40" },
  { cat: "Tools", items: ["Postman", "Git", "Figma"], color: "bg-peach/40" },
];


const App = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-canvas text-ink selection:bg-sage/20 font-sans overflow-x-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-8 py-4 md:py-6 flex justify-between items-center backdrop-blur-md bg-canvas/80 border-b border-border-subtle">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Monogram from Public Folder */}
          <img
            src="/monogram.png"
            alt="KM Logo"
            className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
          />
          {/* Minimalist Name */}
          <span className="font-bold tracking-tighter text-lg md:text-xl hidden xs:block">
            Kajal Mehta<span className="text-sage">.</span>
          </span>
        </div>

        <div className="hidden sm:flex gap-4 md:gap-8 text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-muted">
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#experience" className="hover:text-ink transition-colors">Experience</a>
          <a href="#work" className="hover:text-ink transition-colors">Work</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </div>

        {/* Mobile simple link for very small screens */}
        <div className="sm:hidden text-[9px] uppercase tracking-widest text-sage font-bold">
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8">

        {/* HERO */}
        <section ref={heroRef} className="min-h-screen flex items-center pt-24 relative">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} variants={containerVars} initial="initial" animate="animate" className="grid md:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-8">
              <motion.div variants={itemVars} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                <p className="text-sage font-medium tracking-widest text-xs uppercase">Available for opportunities</p>
              </motion.div>
              <motion.h1 variants={itemVars} className="text-7xl md:text-9xl font-light tracking-tighter leading-[0.85]">
                Kajal<br /><span className="italic text-muted/40" style={{ fontFamily: "Georgia, serif" }}>Mehta</span>
              </motion.h1>
              <motion.p variants={itemVars} className="max-w-md text-base text-muted leading-relaxed">
                I am a Computer Science student at VIT Bhopal  who views code as a medium for both logic and art. With a focus on backend architecture  and a passion for polished interfaces, I build systems that are as efficient as they are elegant.
              </motion.p>
              <motion.div variants={itemVars} className="flex gap-5 text-muted pt-2">
                <div className="flex gap-5 text-muted pt-2">
                  <a
                    href="https://github.com/Kajalmehta29"
                    target="_blank"
                    className="hover:text-github transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kajal-mehta-125a9628b/"
                    target="_blank"
                    className="hover:text-linkedin transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:mehtakajal796@gmail.com"
                    className="hover:text-gmail transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div variants={itemVars} className="relative aspect-square max-w-sm ml-auto w-full group">
              <div className="absolute -inset-3 border border-sage/30 rounded-sm translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              <div className="relative h-full w-full bg-[#E5E5E1] overflow-hidden rounded-sm">
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur-sm rounded-sm p-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted">VIT Bhopal — CGPA</p>
                  <p className="text-xl font-light tracking-tighter">8.97<span className="text-sage">/10</span></p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS MARQUEE */}
        <div className="py-12 md:py-16 border-y border-border-subtle overflow-hidden">
          <div className="animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 md:gap-16 px-4 md:px-8">
                {skills.map((s) => (
                  <span key={s} className="text-2xl md:text-5xl font-light tracking-tighter text-muted/20 hover:text-sage/60 transition-colors uppercase">
                    {s} <span className="text-sage/20 ml-6 md:ml-12">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT / SKILLS SECTION ── */}
        <section id="about" className="py-28">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-sage mb-6">— About</p>
              <h2 className="text-5xl font-light tracking-tighter leading-tight mb-6">
                Crafting software<br /><span className="italic" style={{ fontFamily: "Georgia, serif" }}>with intent.</span>
              </h2>
              <p className="text-muted leading-relaxed text-sm mb-8">
                I'm a Computer Science student passionate about building systems that are fast, elegant, and purposeful. I love the intersection of backend architecture and polished user experiences.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="mailto:mehtakajal796@gmail.com" className="text-[11px] uppercase tracking-widest px-5 py-3 bg-sage text-white rounded-sm hover:bg-ink transition-all duration-300 shadow-sm shadow-sage/20">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="md:col-span-7 md:pl-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-sage mb-8">— Tech Stack</p>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map(({ cat, items, color }) => (
                  <div key={cat} className={`p-6 rounded-2xl ${color} border border-black/5`}>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/70 mb-3">{cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map(item => (
                        <span key={item} className="text-xs font-medium text-ink bg-white/50 px-2 py-1 rounded-md">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </section>

        {/* ── EXPERIENCE SECTION ── */}
        <section id="experience" className="py-28 border-t border-border-subtle">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-sage mb-4">— Experience</p>
              <h2 className="text-5xl font-light tracking-tighter leading-tight sticky top-28">
                Where I've<br /><span className="italic" style={{ fontFamily: "Georgia, serif" }}>worked.</span>
              </h2>
            </div>
            <div className="md:col-span-8 space-y-0">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group py-10 border-b border-border-subtle last:border-b-0 cursor-default"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-sage uppercase tracking-widest">{exp.year}</span>
                    <span className="text-[9px] uppercase tracking-widest px-3 py-1 border border-border-subtle rounded-full text-muted group-hover:border-sage/50 group-hover:text-sage transition-all">
                      {exp.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl font-light tracking-tight group-hover:italic transition-all duration-300 mb-1">{exp.company}</h3>
                  <p className="text-sm text-sage/80 mb-3 font-medium">{exp.role}</p>
                  <p className="text-sm text-muted leading-relaxed max-w-lg">{exp.desc}</p>
                </motion.div>
              ))}

              {/* EDUCATION inline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group py-10 border-b border-border-subtle"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono text-sage uppercase tracking-widest">2023 — 2027</span>
                  <span className="text-[9px] uppercase tracking-widest px-3 py-1 border border-border-subtle rounded-full text-muted">Education</span>
                </div>
                <h3 className="text-3xl font-light tracking-tight group-hover:italic transition-all duration-300 mb-1">VIT Bhopal University</h3>
                <p className="text-sm text-sage/80 mb-3 font-medium">B.Tech in Computer Science</p>
                <div className="flex items-center gap-6">
                  <p className="text-sm text-muted leading-relaxed">Pursuing a strong academic record with consistent hands-on project development.</p>
                  <div className="shrink-0 text-right">
                    <p className="text-3xl font-light tracking-tighter">8.97</p>
                    <p className="text-[9px] uppercase tracking-widest text-sage">CGPA / 10</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="py-28 border-t border-border-subtle">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-sage mb-4">— Credentials</p>
              <h2 className="text-5xl font-light tracking-tighter leading-tight">
                Certified<br /><span className="italic" style={{ fontFamily: "Georgia, serif" }}>& verified.</span>
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certs.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 border border-border-subtle rounded-xl overflow-hidden hover:border-transparent transition-all duration-500 cursor-pointer block"
                  style={{ "--cert-color": cert.color } as React.CSSProperties}
                >
                  <div className="relative flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4" style={{ color: cert.color }} />
                        <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: cert.color }}>
                          {cert.issuer}
                        </span>
                      </div>
                      <h4 className="text-base font-medium tracking-tight leading-snug">{cert.name}</h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted group-hover:text-ink transition-colors shrink-0 mt-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="work" className="py-28 border-t border-border-subtle">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-sage mb-4">— Selected Work</p>
              <h2 className="text-5xl font-light tracking-tighter leading-tight">
                Things I've<br /><span className="italic" style={{ fontFamily: "Georgia, serif" }}>built.</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-6">
            {projects.map((proj, i) => (
              <div key={i} className={`p-8 rounded-3xl ${proj.color} border border-black/5 flex justify-between items-center group`}>
                <div>
                  <span className="text-4xl font-light opacity-30">{proj.num}</span>
                  <h3 className="text-2xl font-medium mt-2">{proj.title}</h3>
                  <p className="text-sm text-ink/70 mt-2 max-w-lg">{proj.desc}</p>
                  <div className="flex gap-2 mt-4">
                    {proj.stack.map(s => (
                      <span key={s} className="text-[10px] uppercase bg-white/40 px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/50 rounded-full hover:bg-white transition-all duration-300"
                >
                  <ArrowUpRight className="w-8 h-8 text-ink group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* ── CONTACT SECTION ── */}
        <section id="contact" className="py-28 border-t border-border-subtle">
          <div className="grid md:grid-cols-12 gap-6">

            {/* Left Side: Big CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-sage/20 rounded-[2rem] p-12 flex flex-col justify-between items-start min-h-[400px] border border-black/5"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-sage font-bold mb-8">— Let's collaborate</p>
                <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.85] mb-8">
                  Have an <br />
                  <span className="italic" style={{ fontFamily: "Georgia, serif" }}>idea?</span>
                </h2>
              </div>

              <a
                href="mailto:mehtakajal796@gmail.com"
                className="group flex items-center gap-4 bg-ink text-canvas px-8 py-4 rounded-full hover:bg-sage hover:text-ink transition-all duration-500 shadow-xl shadow-sage/10"
              >
                <span className="text-sm font-medium uppercase tracking-widest">Start a conversation</span>
                <div className="p-2 bg-canvas/10 rounded-full group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </motion.div>

            {/* Right Side: Social & Info Grid */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">

              {/* Socials Card */}
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="bg-rose/20 rounded-[2rem] p-8 border border-black/5 flex flex-col justify-between"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold text-rose-800/60">Digital Spaces</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://linkedin.com/in/kajal-mehta-125a9628b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-linkedin transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Kajalmehta29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-github transition-colors group"
                  >
                    <Github className="w-4 h-4 transition-transform group-hover:scale-110" /> GitHub
                  </a>
                </div>
              </motion.div>

              {/* Location/Availability Card */}
              <motion.div
                className="bg-sky/20 rounded-[2rem] p-8 border border-black/5 flex flex-col justify-between"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold text-sky-800/60">Current Status</p>
                <div>
                  <p className="text-sm font-medium">Available for Internships</p>
                  <p className="text-[10px] text-muted uppercase mt-1">Based in Dehradun, India</p>
                </div>
              </motion.div>

            </div>
            {/* --- FLOATING RESUME BUTTON --- */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-ink text-canvas rounded-full shadow-2xl hover:bg-sage hover:text-ink transition-all duration-500 group animate-soft-pulse"
            >
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Resume</span>
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </motion.a>
          </div>
        </section>

      </main>

      <footer className="p-10 border-t border-border-subtle flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">© 2026 Kajal Mehta</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Based in Dehradun</p>
      </footer>
    </div>
  );
};

export default App;