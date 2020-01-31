import React from "react";

const SkillsList = props => {
  return (
    <div>
      <p>{props.item.name}</p>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={props.item.level}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: "70%" }}
      >
        <span>{props.item.level}</span>
      </div>
    </div>
  );
};

export default SkillsList;
