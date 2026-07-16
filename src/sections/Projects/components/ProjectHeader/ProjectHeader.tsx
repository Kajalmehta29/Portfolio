import "./ProjectHeader.css";

import {
  Github,
  ExternalLink,
} from "lucide-react";

import type { Project } from "../../../../data/projects";

import QuickInfo from "../QuickInfo/QuickInfo";

interface Props {
  project: Project;
}

const ProjectHeader = ({ project }: Props) => {
  return (
    <header className="project-header">

      <div className="project-meta">

        <span className="project-category">

          {project.category}

        </span>

        <span
          className={`project-status ${
            project.status === "Completed"
              ? "completed"
              : "progress"
          }`}
        >
          {project.status === "Completed"
            ? "Production Ready"
            : "Active Development"}

        </span>

      </div>

      <h2>{project.title}</h2>

      <QuickInfo
        items={project.technologies.slice(0, 3)}
      />

      <p className="project-description">

        {project.overview}

      </p>

      <div className="project-links">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <Github size={18} />

            GitHub

          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-btn primary"
          >
            <ExternalLink size={18} />

            Live Demo

          </a>
        )}

      </div>

    </header>
  );
};

export default ProjectHeader;