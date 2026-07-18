import "./CompanyCard.css";
import type { ExperienceItem } from "../../../../data/experience";
import CareerStep from "../CareerStep/CareerStep";
import { ChevronDown } from "lucide-react";

interface Props {
  item: ExperienceItem;
  expanded: boolean;
  expandedStep: string | null;
  onToggle: () => void;
  onToggleStep: (id: string) => void;
}

const CompanyCard = ({
  item,
  expanded,
  expandedStep,
  onToggle,
  onToggleStep,
}: Props) => {
  return (
    <div
      className="company-content"
      onClick={onToggle}
    >
      <div className="company-header">
        <div>
          <span className="company-duration">{item.duration}</span>

          <h3>{item.title}</h3>

          <h4>{item.subtitle}</h4>
        </div>

        {item.type === "company" && (
          <span className={`chevron ${expanded ? "rotate" : ""}`}>
            <ChevronDown
    className={`chevron ${expanded ? "rotate" : ""}`}
/>
          </span>
        )}
      </div>

      <p>{item.description}</p>

      {expanded &&
        item.steps?.map((step, index) => (
          <CareerStep
            key={step.id}
            step={step}
            number={index + 1}
            expanded={expandedStep === step.id}
            onToggle={(e) => {
              e.stopPropagation();
              onToggleStep(step.id);
            }}
          />
        ))}
    </div>
  );
};

export default CompanyCard;