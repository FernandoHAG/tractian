import React, { Component } from "react";
import "./MainCard.css";
import { Card } from "antd";

class MainCard extends Component {
  render(props) {
    return (
      <div className="background">
        <div className="container">
          <Card className="box">{this.props.children}</Card>
        </div>
      </div>
    );
  }
}

export default MainCard;
