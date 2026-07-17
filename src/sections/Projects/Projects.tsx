import "./Projects.css";

import Container from "../../components/layout/Container/Container";

import ProjectSidebar from "./components/ProjectSidebar";
import ProjectViewer from "./components/ProjectViewer";

import useProjects from "./hooks/useProjects";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Projects = () => {
    const {
        projects,
        selectedProject,
        setSelectedProject,
    } = useProjects();
const [mobileViewerOpen, setMobileViewerOpen] = useState(false);
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

                <div className="projects-layout desktop-layout">

    <ProjectSidebar
        projects={projects}
        selectedProject={selectedProject}
        onSelect={setSelectedProject}
    />

    <AnimatePresence mode="wait">

        <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .3 }}
        >
            <ProjectViewer project={selectedProject}/>
        </motion.div>

    </AnimatePresence>

</div>

<div className="mobile-projects">

    {!mobileViewerOpen ? (

        <ProjectSidebar
            projects={projects}
            selectedProject={selectedProject}
            onSelect={(project)=>{
                setSelectedProject(project);
                setMobileViewerOpen(true);
            }}
        />

    ) : (

        <>

            <button
                className="back-to-projects"
                onClick={()=>setMobileViewerOpen(false)}
            >
                ← All Projects
            </button>

            <AnimatePresence mode="wait">

                <motion.div
                    key={selectedProject.id}
                    initial={{opacity:0,x:30}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0,x:-30}}
                >
                    <ProjectViewer project={selectedProject}/>
                </motion.div>

            </AnimatePresence>

        </>

    )}

</div>

            </Container>

        </section>
    );
};

export default Projects;