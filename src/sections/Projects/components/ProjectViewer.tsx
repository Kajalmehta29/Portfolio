import type { Project } from "../../../data/projects";

import ProjectHeader from "./ProjectHeader/ProjectHeader";
import ProjectHero from "./ProjectHero";
import ProductWalkthrough from "./ProductWalkthrough/ProductWalkthrough";
import FeatureGrid from "./FeatureGrid/FeatureGrid";
import ChallengeSection from "./ChallengeSection/ChallengeSection";
import TechStack from "./TechStack/TechStack";

interface Props {
    project: Project;
}

const ProjectViewer = ({ project }: Props) => {
    return (
        <div className="project-viewer">

            <ProjectHeader project={project} />

            {project.coverImage && <ProjectHero

                image={project.coverImage}

                url={project.browserUrl}

                theme={project.theme}

            />}

            <section className="drawer-section">

                <h3>Project Overview</h3>

                <p>{project.overview}</p>

            </section>

            <ProductWalkthrough
                steps={project.walkthrough}
                browserUrl={project.browserUrl}
                theme={project.theme}
            />

            <FeatureGrid
                features={project.features}
            />

            <ChallengeSection
                challenges={project.challenges}
            />

            <TechStack
                tech={project.technologies}
            />

        </div>
    );
};

export default ProjectViewer;