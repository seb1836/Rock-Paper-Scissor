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
  state = {
    player1Sign: "",
    player2Sign: "",
    isplayer1winner: false,
    isplayer2winner: false
  };

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

  checkWinner(player1Sign, player2Sign) {
    winningMatches.map(function(winningSign) {
      if (
        (player1Sign === winningSign[0] || player2Sign === winningSign[0]) &&
        (player1Sign === winningSign[1] || player2Sign === winningSign[1])
      ) {
        return player1Sign === winningSign[0]
          ? this.setState({ isplayer1winner: true })
          : this.setState({ isplayer2winner: true });
      }
    });
  }

  displayWinner() {
    return this.state.isplayer1winner
      ? "player1 is winner"
      : "player2 is winner";
  }
  renderButtonStartMatch() {
    return count === 2 &&
      !this.state.player1winner &&
      !this.state.player2winner ? (
      <button
        onClick={this.checkWinner(
          this.state.player1Sign,
          this.state.player2Sign
        )}
      >
        startMatch
      </button>
    ) : (
      this.displayWinner()
    );
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
