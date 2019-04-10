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

  saveSelectedSignPlayer = label => {
    console.log(label);
    this.setState({
      playerSign: label,
      isSignSaved: true
    });
  };

  render() {
    return (
      <div className="App">
        <Player
          placeholder="Player1Name"
          saveSign={this.saveSelectedSignPlayer}
        />
        <Player
          placeholder="Player2Name"
          saveSign={this.saveSelectedSignPlayer}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
