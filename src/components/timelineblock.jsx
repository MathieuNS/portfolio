import React from "react";

function TimelineBlock(props){
    return  <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-date">
                        {props.date}
                    </div>
                    <div className="timeline-content">
                        <h3>{props.title}</h3>
                        <p>{props.content}</p>
                    </div>
            </div>
}

export default TimelineBlock;