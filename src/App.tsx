import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink, Award } from "lucide-react";
import { useRef } from "react";

const containerVars: Variants = {
  animate: { transition: { staggerChildren: 0.12 } }
};
const itemVars: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const skills = ["SpringBoot", "Java", "React", "Flutter", "Python", "MySQL", "Postman", "Spring Security", "PHP", "Supabase"];

const experiences = [
  {
    year: "2025 — PRESENT",
    role: "Junior Associate Developer Intern",
    company: "Calanjiyam Consultancies",
    desc: "Designing system architecture and implementing backend logic with PHP and MySQL.",
    tag: "Full-time"
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
  { name: "Software Engineering Intern", issuer: "HackerRank", color: "#2EC866" },
  { name: "Computer Networking", issuer: "Coursera", color: "#0056D2" },
  { name: "AWS Cloud Practitioner", issuer: "IntelliPaat", color: "#FF9900" },
  { name: "Postman API Fundamentals", issuer: "Postman", color: "#FF6C37" },
];

const projects = [
  {
    title: "Smart Expense Splitter",
    desc: "Reduced transaction volume by 60% using Graph-based Debt Simplification. Built with Spring Boot & Flutter.",
    stack: ["SpringBoot", "Flutter", "MySQL"],
    num: "01"
  },
  {
    title: "Donate Bridge",
    desc: "Real-time animal shelter donation platform with live updates and payment flows.",
    stack: ["React", "Supabase", "TailwindCSS"],
    num: "02"
  }
];

const App = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-canvas text-ink selection:bg-sage/20 font-sans overflow-x-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-canvas/80 border-b border-border-subtle">
        <div className="font-bold tracking-tighter text-2xl">K.M<span className="text-sage">.</span></div>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-muted">
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#experience" className="hover:text-ink transition-colors">Experience</a>
          <a href="#work" className="hover:text-ink transition-colors">Work</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
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
                B.Tech CS student at VIT Bhopal building high-performance backends and elegant interfaces — specializing in SpringBoot, Flutter, and React.
              </motion.p>
              <motion.div variants={itemVars} className="flex gap-5 text-muted pt-2">
                <a href="https://github.com" className="hover:text-ink transition-colors"><Github className="w-5 h-5" /></a>
                <a href="https://linkedin.com" className="hover:text-ink transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="mailto:mehtakajal796@gmail.com" className="hover:text-ink transition-colors"><Mail className="w-5 h-5" /></a>
              </motion.div>
            </div>
            <motion.div variants={itemVars} className="relative aspect-square max-w-sm ml-auto w-full group">
              <div className="absolute -inset-3 border border-sage/30 rounded-sm translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              <div className="relative h-full w-full bg-[#E5E5E1] overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur-sm rounded-sm p-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted">VIT Bhopal — CGPA</p>
                  <p className="text-xl font-light tracking-tighter">8.87<span className="text-sage">/10</span></p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS MARQUEE */}
        <div className="py-16 border-y border-border-subtle overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 px-8">
                {skills.map((s) => (
                  <span key={s} className="text-4xl md:text-5xl font-light tracking-tighter text-muted/20 hover:text-sage/60 transition-colors uppercase">
                    {s} <span className="text-sage/20 ml-12">✦</span>
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
                <a href="mailto:mehtakajal796@gmail.com" className="text-[11px] uppercase tracking-widest px-5 py-3 bg-ink text-canvas rounded-sm hover:bg-sage hover:text-ink transition-all duration-300">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="md:col-span-7 md:pl-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-sage mb-8">— Tech Stack</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { cat: "Backend", items: ["SpringBoot", "Java", "PHP", "Python"] },
                  { cat: "Frontend & Mobile", items: ["React", "Flutter", "HTML/CSS"] },
                  { cat: "Database", items: ["MySQL", "Supabase"] },
                  { cat: "Tools", items: ["Postman", "Spring Security", "Git"] },
                ].map(({ cat, items }) => (
                  <div key={cat} className="p-5 border border-border-subtle rounded-sm hover:border-sage/50 transition-colors group">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-sage mb-3 font-semibold">{cat}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map(item => (
                        <span key={item} className="text-xs text-muted group-hover:text-ink transition-colors font-medium">{item}</span>
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
                  <span className="text-[10px] font-mono text-sage uppercase tracking-widest">2022 — 2026</span>
                  <span className="text-[9px] uppercase tracking-widest px-3 py-1 border border-border-subtle rounded-full text-muted">Education</span>
                </div>
                <h3 className="text-3xl font-light tracking-tight group-hover:italic transition-all duration-300 mb-1">VIT Bhopal University</h3>
                <p className="text-sm text-sage/80 mb-3 font-medium">B.Tech in Computer Science</p>
                <div className="flex items-center gap-6">
                  <p className="text-sm text-muted leading-relaxed">Pursuing a strong academic record with consistent hands-on project development.</p>
                  <div className="shrink-0 text-right">
                    <p className="text-3xl font-light tracking-tighter">8.87</p>
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative p-6 border border-border-subtle rounded-sm overflow-hidden hover:border-transparent transition-all duration-500 cursor-pointer"
                  style={{ "--cert-color": cert.color } as React.CSSProperties}
                >
                  {/* Hover fill effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${cert.color}15 0%, ${cert.color}05 100%)` }} />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: cert.color }} />

                  <div className="relative flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4" style={{ color: cert.color }} />
                        <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: cert.color }}>{cert.issuer}</span>
                      </div>
                      <h4 className="text-base font-medium tracking-tight leading-snug">{cert.name}</h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                  </div>
                </motion.div>
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
          <div className="space-y-4">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group p-8 border border-border-subtle rounded-sm hover:bg-ink hover:text-canvas transition-all duration-500 cursor-pointer"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-1">
                    <span className="text-4xl font-light text-muted/20 group-hover:text-canvas/20 transition-colors">{proj.num}</span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-2xl font-light tracking-tight mb-2">{proj.title}</h3>
                    <p className="text-sm text-muted group-hover:text-canvas/60 transition-colors leading-relaxed">{proj.desc}</p>
                  </div>
                  <div className="md:col-span-5 flex flex-wrap gap-2">
                    {proj.stack.map(s => (
                      <span key={s} className="text-[9px] uppercase tracking-widest px-3 py-1.5 border border-border-subtle group-hover:border-canvas/30 rounded-full text-muted group-hover:text-canvas/60 transition-all">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-canvas transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-28 border-t border-border-subtle">
          <div className="text-center space-y-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-sage">— Let's Talk</p>
            <h2 className="text-7xl md:text-9xl font-light tracking-tighter">
              Say<br /><span className="italic text-muted/30" style={{ fontFamily: "Georgia, serif" }}>hello.</span>
            </h2>
            <div className="flex justify-center gap-6 pt-4">
              <a href="mailto:mehtakajal796@gmail.com" className="flex items-center gap-2 text-sm px-6 py-3 bg-ink text-canvas rounded-sm hover:bg-sage hover:text-ink transition-all duration-300">
                <Mail className="w-4 h-4" /> mehtakajal796@gmail.com
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-2 text-sm px-6 py-3 border border-border-subtle rounded-sm hover:border-sage transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="p-10 border-t border-border-subtle flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">© 2026 Kajal Mehta</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Based in Mumbai</p>
      </footer>
    </div>
  );
};

export default App;