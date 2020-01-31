import React from "react";
import "./ExpCard.css";

const ExpCard = props => {
  return (
    <div>
      <article className="card">
        <header
          className="card-header"
          style={{
            background: `url(${props.item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.8"
          }}
        >
          <h4 className="card-header__title">{props.item.jobTitle}</h4>
        </header>
        <p className="card-header__company">{props.item.company}</p>
        <p className="date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </article>
    </div>
  );
};
export default ExpCard;
