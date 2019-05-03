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

class App extends Component {
  state = {
    player1Sign: "",
    player2Sign: "",
    isplayer1winner: false,
    isplayer2winner: false,
    scoreplayer1: 0,
    scoreplayer2: 0
  };

  setScore() {
    if (this.props.isplayerwinner) {
      this.setState(prevState => ({
        scorePlayer: prevState.scorePlayer + 1
      }));
    }
  }
  switchRenderBetweenButtonAndWinner(myString) {
    if (
      !this.state.isplayer1winner &&
      !this.state.isplayer2winner &&
      count === 2 &&
      this.state.player1Sign !== "draw"
    ) {
      return this.renderButtonStartMatch();
    } else if (
      (this.state.isplayer1winner || this.state.isplayer2winner) &&
      count === 2
    ) {
      this.setScore();
      return this.displayWinner();
    } else if (this.state.player1Sign === "draw" && count === 2) {
      return "Draw!";
    }
  }

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
    winningMatches.forEach(row => {
      if (
        (player1Sign === row[0] || player2Sign === row[0]) &&
        (player1Sign === row[1] || player2Sign === row[1])
      ) {
        player1Sign === row[0]
          ? this.setState({
              isplayer1winner: true,
              scoreplayer1: this.state.scoreplayer1 + 1
            })
          : this.setState({
              isplayer2winner: true,
              scoreplayer2: this.state.scoreplayer2 + 1
            });
      } else if (this.state.player1Sign === this.state.player2Sign) {
        this.setState({ player1Sign: "draw" });
      }
    });
  }

  displayWinner() {
    return this.state.isplayer1winner && count === 2
      ? "player1 is winner"
      : "player2 is winner";
  }
  renderButtonStartMatch() {
    return count === 2 &&
      !this.state.player1winner &&
      !this.state.player2winner ? (
      <button
        onClick={() =>
          this.checkWinner(this.state.player1Sign, this.state.player2Sign)
        }
      >
        startMatch
      </button>
    ) : null;
  }

  render() {
    return (
      <div className="App">
        <Player
          placeholder="Player1Name"
          saveSign={this.saveSelectedSignPlayer}
          number={1}
          player1SetSign={this.player1SetSign}
          isplayerwinner={this.state.isplayer1winner}
          score={this.state.scoreplayer1}
        />
        <Player
          placeholder="Player2Name"
          saveSign={this.saveSelectedSignPlayer}
          number={2}
          player2SetSign={this.player2SetSign}
          isplayerwinner={this.state.isplayer2winner}
          score={this.state.scoreplayer2}
        />
        {this.switchRenderBetweenButtonAndWinner()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
