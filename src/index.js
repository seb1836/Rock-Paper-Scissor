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
    players: [
      {
        id: 1,
        sign: "",
        score: 0,
        isWinner: false,
        placeholder: "Player 1 Name"
      },
      {
        id: 2,
        sign: "",
        score: 0,
        isWinner: false,
        placeholder: "Player 2 Name"
      }
    ],
    player1Sign: "",
    player2Sign: "",
    isplayer1winner: false,
    isplayer2winner: false,
    scoreplayer1: 0,
    scoreplayer2: 0,
    round: 1
  };

  setScore() {
    // if (this.props.isplayerwinner) {
    //   console.log(this.props.isplayerwinner,"playerwinner")
    //   this.setState(prevState => ({
    //     scorePlayer: prevState.scorePlayer + 1
    //   }));
    // }
  }
  uppgradeNumberOfRound = () => {
    this.setState(
      prevState => ({ round: prevState.round++ }),
      () => console.log(this.state.round, "tessst")
    );
  };

  switchRenderBetweenButtonAndWinner(myString) {
    if (
      !this.state.isplayer1winner &&
      !this.state.isplayer2winner &&
      this.state.player1Sign !== "draw"
    ) {
      return this.renderButtonStartMatch();
    } else if (this.state.isplayer1winner || this.state.isplayer2winner) {
      this.setScore();

      return this.displayWinner();
    } else if (this.state.player1Sign === "draw") {
      return "Draw";
    }
  }

  playerSaveSign = (signSaved, id) => {
    this.state.players.forEach((player, index) => {
      if (index === player.id - 1) {
      }
    });
    this.setState(
      prevState => {
        const updatedPlayers = [...prevState.players];
        const updatedPlayer = { ...updatedPlayers[id - 1] };
        console.log(updatedPlayer);
        updatedPlayer.sign = signSaved;
        updatedPlayers[id - 1] = updatedPlayer;
        return { players: updatedPlayers };
      },
      () => console.log(this.state, "into save")
    );
  };

  player1SetSign = sign => {
    this.setState(
      {
        player1Sign: sign
      },

      this.cbPlayer1Sign
    );
  };

  player2SetSign = sign => {
    this.setState({
      player2Sign: sign
    });
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
    return this.state.isplayer1winner
      ? "player1 is winner"
      : "player2 is winner";
  }
  renderButtonStartMatch() {
    return this.state.players[0].sign !== "" &&
      this.state.players[1].sign !== "" ? (
      <button
        onClick={() =>
          this.checkWinner(this.state.player1Sign, this.state.player2Sign)
        }
      >
        startMatch
      </button>
    ) : null;
  }

  renderPlayer() {
    return this.state.players.map((player, index) => {
      return (
        <Player
          key={player.id}
          placeholder={player.placeholder}
          id={player.id}
          playerSetSign={this.playerSaveSign}
          isplayerwinner={player.isWinner}
          score={player.score}
        />
      );
    });
  }
  render() {
    return (
      <div className="App">
        {this.renderPlayer()}
        {this.switchRenderBetweenButtonAndWinner()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
