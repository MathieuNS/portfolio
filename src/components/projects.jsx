import React from "react";
import ProjectBlock from "./projectsblock";
import projects from "../projects";

function CreateProject (project) {
    return <ProjectBlock
                key={project.id}
                title={project.title}
                description={project.content}/>
}


function Projects(){
    return <section className="projects" id="projects">
            <h2 className="heading">
                Projects
            </h2>
            <div className="projects-container">
                {projects.map(CreateProject)}
            </div>

    </section>
}

export default Projects;