import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./Player";
import "./styles.css";

const winningMatches = [
  ["scissor", "paper"],
  ["rock", "scissor"],
  ["paper", "rock"]
];

let count = 0;

const playerSign = [];

class App extends Component {
  state = { player1Sign: "", player2Sign: "" };

  cbPlayer1Sign = () => {
    console.log(this.state.player1Sign, "fdff");
  };
  player1SetSign = sign => {
    this.setState(
      {
        player1Sign: sign
      },

      this.cbPlayer1Sign
    );
    count++;
  };

  player2SetSign = sign => {
    this.setState({
      player2Sign: sign
    });
    count++;
  };

  renderButtonStartMatch() {
    return count === 2 ? <button>startMatch</button> : null;
  }

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
        {this.renderButtonStartMatch()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
