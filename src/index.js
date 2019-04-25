import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./Player";
import "./styles.css";

const winningMatches = [
  ["scissor", "paper"],
  ["rock", "scissor"],
  ["paper", "rock"]
];

const player = [];

class App extends Component {
  state = { player1Sign: "", player2Sign: "" };

  player1SetSign = sign => {
    this.setState(
      {
        player1Sign: sign
      },
      () => {
        console.log(this.state.player1Sign);
      }
    );
  };

  player2SetSign = sign => {
    this.setState({
      player2Sign: sign
    });
  };

  render() {
    return (
      <div className="App">
        <Player
          placeholder="Player1Name"
          saveSign={this.saveSelectedSignPlayer}
          number={1}
          player1SetSign={this.player1SetSign}
        />
        <Player
          placeholder="Player2Name"
          saveSign={this.saveSelectedSignPlayer}
          number={2}
          player2SetSign={this.player2SetSign}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
