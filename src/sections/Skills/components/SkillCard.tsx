import "./SkillCard.css";
import type { SkillCategory } from "../../../data/skills";
import SkillChip from "./SkillChip";

interface Props {
  category: SkillCategory;
}

export default function SkillCard({ category }: Props) {
  return (
    <div className={`skill-card ${category.size}`}>
      <div className="skill-card-header">
        <div>
          <h3>{category.title}</h3>
          <p>{category.subtitle}</p>
        </div>

        <span className="skill-metric">
          {category.metric}
        </span>
      </div>

      <div className="skill-chip-container">
        {category.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}