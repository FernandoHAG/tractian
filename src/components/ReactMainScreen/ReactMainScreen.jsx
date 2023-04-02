import React, { Component } from "react";
import "./ReactMainScreen.css";
import MainCard from "../MainCard/MainCard";

class ReactMainScreen extends Component {
  render() {
    return (
      <MainCard>
        <div className="App"></div>
      </MainCard>
    );
  }
}

export default ReactMainScreen;
