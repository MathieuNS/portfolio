import React from "react";
import workexperiences from "../workexperiences.js";
import TimelineBlock from "./timelineblock.jsx";

function createWorkExperience(workexperience){
    return <TimelineBlock 
    key={workexperience.id}
    date={workexperience.date}
    title={workexperience.title}
    content={workexperience.content}
    />

}

function WorkExperiences() {
    return <section className="workexperiences" id="workexperiences">
        <h2 className="heading">Work Experiences</h2>
        <div className="timeline-items">
            {workexperiences.map(createWorkExperience)}
        </div>
    </section>
}

export default WorkExperiences;