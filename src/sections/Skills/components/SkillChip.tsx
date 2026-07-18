import "./SkillChip.css";
import type { Skill } from "../../../data/skills";

interface Props {
  skill: Skill;
}

export default function SkillChip({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <div className="skill-chip">
      <Icon className="skill-chip-icon" />
      <span>{skill.name}</span>
    </div>
  );
}