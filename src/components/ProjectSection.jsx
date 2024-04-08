import React from "react";
import ProjectItems from '../assets/ProjectsItems';
import ProjectCard from "./ProjectCard";

function ProjectSection() {
    return (
        <div className='py-5' id='project'>
            <div className='container'>
                <h2 className='mb-5'>Мои работы</h2>
                <div className='row-g4'>
                    {
                        ProjectItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} projectDesc={project.projectDescription} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;