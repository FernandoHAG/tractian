import React from "react";
import "./MainCard.css";
import { Card } from "antd";

function MainCard(props) {
  return (
    <div className="background">
      <div className="container">
        <Card className="box">{props.children}</Card>
      </div>
    </div>
  );
}

export default MainCard;
