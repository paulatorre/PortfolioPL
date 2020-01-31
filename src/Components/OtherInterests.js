import React from "react";
import "./OtherInterests.css";

const OtherInterests = props => {
  return (
    <div className="interests-container">
      <div className="interests-card">
        <span className="interests-icon">
          <i className="fa fa-heart" style={{ color: "pink" }} />
        </span>
        <h3>Ayurveda</h3>
        <ul>
          <li>Meditation</li>
          <li>Yoga</li>
        </ul>
      </div>
      <div className="interests-card">
        <span className="interests-icon">
          <i className="fa fa-recycle" style={{ color: "lightgreen" }} />
        </span>
        <h3>Sustainability</h3>
        <ul>
          <li>Reducing waste</li>
          <li>Build a sustainable wardrobe</li>
        </ul>
      </div>
    </div>
  );
};

export default OtherInterests;
