import type { Project } from "../../../data/projects";
import ProjectListItem from "./ProjectListItem/ProjectListItem";

interface Props {
  projects: Project[];
  selectedProject: Project;
  onSelect: (project: Project) => void;
}

const ProjectSidebar = ({
  projects,
  selectedProject,
  onSelect,
}: Props) => {
  return (
    <aside className="project-sidebar">

      {projects.map((project, index) => (
        <ProjectListItem index={index}
          key={project.id}
          project={project}
          active={selectedProject.id === project.id}
          onClick={() => onSelect(project)}
        />
      ))}

    </aside>
  );
};

export default ProjectSidebar;