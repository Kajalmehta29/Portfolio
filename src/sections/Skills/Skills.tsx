import "./Skills.css";
import SkillCard from "./components/SkillCard";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Technology Stack</h2>
        <p>
          Technologies I use to build scalable,
          modern and user-focused applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}