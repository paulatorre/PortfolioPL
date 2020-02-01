import React from "react";
import "./SkillsList.css";

const SkillsList = ({ name, value, color }) => {
  return (
    <div className="skillItems_container">
      <div className="skillItems_title">{name}</div>
      <div className="skillItems_bar">
        <div
          style={{
            backgroundColor: color,
            width: value,
            height: "15px",
            borderRadius: "20px"
          }}
        />
      </div>
    </div>
  );
};

export default SkillsList;
