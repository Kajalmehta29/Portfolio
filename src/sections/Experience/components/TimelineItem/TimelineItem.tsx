import "./TimelineItem.css";
import type { ExperienceItem } from "../../../../data/experience";
import CompanyCard from "../CompanyCard/CompanyCard";

interface Props {
  item: ExperienceItem;
  side: "left" | "right";
  index: number;

  expanded: boolean;
  expandedStep: string | null;

  onToggle: () => void;
  onToggleStep: (id: string) => void;
}

const TimelineItem = ({ item, side, index, expanded, expandedStep, onToggle, onToggleStep }: Props) => {
  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-card">
        <CompanyCard
  item={item}
  expanded={expanded}
  expandedStep={expandedStep}
  onToggle={onToggle}
  onToggleStep={onToggleStep}
/>
      </div>

      <div className="timeline-marker">
        <div className="timeline-dot">{index}</div>
      </div>

      <div className="timeline-spacer" />
    </div>
  );
};

export default TimelineItem;