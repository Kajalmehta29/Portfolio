import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
//   FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiMysql,
  SiFirebase,
  SiSqlite,
  SiPostman,
  SiClaude,
  SiCursor,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { TbBrandOpenai } from "react-icons/tb";export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  size: "large" | "medium" | "wide";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Crafting responsive user interfaces",
    metric: "5 Technologies",
    size: "large",
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Building scalable server applications",
    metric: "3 Technologies",
    size: "medium",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Flask", icon: SiFlask },
      { name: "PHP", icon: FaPhp },
    ],
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Designing efficient data storage",
    metric: "3 Technologies",
    size: "medium",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    id: "workflow",
    title: "AI Workflow & Developer Toolkit",
    subtitle: "Tools powering my daily development",
    metric: "Daily Use",
    size: "wide",
    skills: [
      { name: "ChatGPT", icon: TbBrandOpenai },
      { name: "Claude", icon: SiClaude },
      { name: "Cursor", icon: SiCursor },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscCode },
    ],
  },
];