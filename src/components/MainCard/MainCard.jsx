import React, { Component } from "react";
import "./MainCard.css";

class MainCard extends Component {
  render(props) {
    return <div className="background">{this.props.children}</div>;
  }
}

export default MainCard;
