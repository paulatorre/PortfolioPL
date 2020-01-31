import React from "react";

function InfoCard(props) {
  return (
    <div className="infocard">
      <figure>
        <img src={props.info.imgSrc} alt="" />
      </figure>
      <h1>{props.info.name}</h1>
      <p>{props.info.profession}</p>
      <p>
        <i className="fa fa-envelope" /> {props.info.email}
      </p>
      <p>
        <i className="fa fa-phone" /> {props.info.phone}
      </p>
    </div>
  );
}

export default InfoCard;
