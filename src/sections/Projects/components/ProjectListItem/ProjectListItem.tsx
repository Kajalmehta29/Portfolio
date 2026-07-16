import "./ProjectListItem.css";

import { ArrowRight } from "lucide-react";
import type { Project } from "../../../../data/projects";

interface Props {
  project: Project;
  active: boolean;
  index: number;
  onClick: () => void;
}

const ProjectListItem = ({
  project,
  active,
  index,
  onClick,
}: Props) => {
  return (
    <button
      className={`project-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="project-item-top">

        <span className="project-number">
          {(index + 1).toString().padStart(2, "0")}
        </span>

        {active && (
          <ArrowRight size={18} />
        )}

      </div>

      <h3>{project.title}</h3>

      <p>
        {project.technologies
          .slice(0,2)
          .join(" • ")}
      </p>

      <span className="project-label">

        {project.status==="Completed"
          ?"Production Ready"
          :"In Development"}

      </span>

    </button>
  );
};

export default ProjectListItem;