import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./Player";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player placeholder="Player1Name" />
        <Player placeholder="Player2Name" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
