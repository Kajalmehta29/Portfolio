import "./Projects.css";

import Container from "../../components/layout/Container/Container";

import ProjectSidebar from "./components/ProjectSidebar";
import ProjectViewer from "./components/ProjectViewer";

import useProjects from "./hooks/useProjects";

const Projects = () => {
  const {
    projects,
    selectedProject,
    setSelectedProject,
  } = useProjects();

  return (
    <section className="projects" id="projects">

      <Container>

        <div className="projects-heading">

          <span>Selected Work</span>

          <h2>
            Products that demonstrate my engineering
            approach and problem-solving mindset.
          </h2>

        </div>

        <div className="projects-layout">

          <ProjectSidebar
            projects={projects}
            selectedProject={selectedProject}
            onSelect={setSelectedProject}
          />

          <ProjectViewer
            project={selectedProject}
          />

        </div>

      </Container>

    </section>
  );
};

export default Projects;