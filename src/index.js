import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./Player";
import "./styles.css";

const winningMatches = [
  ["scissor", "paper"],
  ["rock", "scissor"],
  ["paper", "rock"]
];

class App extends Component {
  state = {
    player1Sign: "",
    player2Sign: ""
  };

  assignSign = () => {
    let currentMatch = new Array(2);
    let count = 0;
    for (let i = 0; i < count; i++) {
      currentMatch[i] = [`${this.state.playerSign}`];
      count++;
    }
  };

  render() {
    return (
      <div className="App">
        <Player placeholder="Player1Name" assign={this.assignSign} />
        <Player placeholder="Player2Name" assign={this.assignSign} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
