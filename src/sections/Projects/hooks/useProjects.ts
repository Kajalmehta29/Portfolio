import { useState } from "react";
import { projects } from "../../../data/projects";

const useProjects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return {
    projects,
    selectedProject,
    setSelectedProject,
  };
};

export default useProjects;