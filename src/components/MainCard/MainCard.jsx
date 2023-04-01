import React from "react";
import "./MainCard.css";

function MainCard(props) {
  return <div className="background">{props.children}</div>;
}

export default MainCard;
