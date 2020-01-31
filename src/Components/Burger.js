import React from "react";
import "./Burger.css";

const Burger = props => {
  return (
    <button className="burger" onClick={props.click}>
      <div className="burger-line1" />
      <div className="burger-line2" />
      <div className="burger-line3" />
    </button>
  );
};

export default Burger;
