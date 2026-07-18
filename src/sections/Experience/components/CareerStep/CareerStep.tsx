import "./CareerStep.css";
import type { CareerStep as Step } from "../../../../data/experience";
import { ChevronDown } from "lucide-react";

interface Props {
  step: Step;
  number: number;
  expanded: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

const CareerStep = ({
  step,
  number,
  expanded,
  onToggle,
}: Props) => {
  return (
    <div className="career-step">
      <div className="career-header" onClick={onToggle}>
        <div>
          <span className="career-number">
            {String(number).padStart(2, "0")}
          </span>

          <h5>{step.title}</h5>

          <span>{step.duration}</span>
        </div>

        <span className={`step-chevron ${expanded ? "rotate" : ""}`}>
          <ChevronDown
    className={`chevron ${expanded ? "rotate" : ""}`}
/>
        </span>
      </div>

      {expanded && (
        <div className="career-content">
          <p>{step.description}</p>

          <div className="career-block">
            <h6>Key Achievements</h6>

            <ul>
              {step.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="career-block">
            <h6>Projects</h6>

            <ul>
              {step.projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="career-block">
            <h6>Tech Stack</h6>

            <div className="tech-list">
              {step.technologies.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerStep;