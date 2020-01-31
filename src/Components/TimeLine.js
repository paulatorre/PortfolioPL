import React from "react";
import "./TimeLine.css";

const TimeLine = props => {
  return (
    <div>
      <article className="timeline-item">
        <div className="timeline-circle">
          <i className="fa fa-pencil" />
        </div>
        <p className="timeline-date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="timeline-item__title">{props.item.title}</p>

        <p>{props.item.description}</p>
      </article>
    </div>
  );
};

export default TimeLine;

//<p className="timeline-item__institution">{props.item.institution}</p>
