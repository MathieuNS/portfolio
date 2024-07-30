import React from "react";
import TimelineBlock from "./timelineblock.jsx";
import educations from "../education.js";

function createEducation(education){
    return <TimelineBlock 
    key={education.id}
    date={education.date}
    title={education.title}
    content={education.content}
    />

}

function Education() {
    return <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
            {educations.map(createEducation)}
        </div>
    </section>
}

export default Education;