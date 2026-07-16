import type { Project } from "../../../data/projects";

import TechStack from "./TechStack/TechStack";
import ProductWalkthrough from "./ProductWalkthrough/ProductWalkthrough";
import FeatureGrid from "./FeatureGrid/FeatureGrid";
import ChallengeSection from './ChallengeSection/ChallengeSection';
interface Props {
  project: Project;
}

const ProjectDrawer = ({ project }: Props) => {
  return (
    <div className="project-drawer">

      <div className="drawer-header">

        <span className="drawer-category">
          {project.category}
        </span>

        <h2>{project.title}</h2>

        {/* <p>{project.about}</p> */}

      </div>
      <ProductWalkthrough

              steps={project.walkthrough} browserUrl={""} theme={"light"}
/>

      <section className="drawer-section">

        <h3>Key Features</h3>

        <FeatureGrid
          features={project.features}
        />

      </section>

      <section className="drawer-section">

        <h3>Challenges</h3>

        <ChallengeSection
          challenges={project.challenges}
        />

      </section>

      <section className="drawer-section">

        <h3>Tech Stack</h3>

        <TechStack
          tech={project.technologies}
        />

      </section>

    </div>
  );
};

export default ProjectDrawer;