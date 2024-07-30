import React from "react";


function ProjectBlock(props) {
    return <div className="project-box">
    <div className="project-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
</div>

}

export default ProjectBlock;