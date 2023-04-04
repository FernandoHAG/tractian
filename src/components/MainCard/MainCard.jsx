import React from "react";
import "./MainCard.css";
import { useSelector } from "react-redux";
import { Card } from "antd";

function MainCard(props) {
  const { theme } = useSelector((state) => state.config);
  return (
    <div className="container">
      <Card className={"box" + (theme === "light" ? " dark-container" : "")}>
        <div className="align-center">{props.children}</div>
      </Card>
    </div>
  );
}

export default MainCard;
