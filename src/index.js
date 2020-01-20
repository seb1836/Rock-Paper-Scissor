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
    const player1 = this.state.players[0]
    const player2 = this.state.players[1]
    if (
      !player1.isWinner &&
      !player2.isWinner && player1.isWinner !=="draw"
    ) {
      return this.renderButtonStartMatch();
    } else if (player1.sign === player2.sign) {
      return "Draw";
    }else if (player1.isWinner || player2.isWinner) {
      

      return this.displayWinner();
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
          ? this.setState(prevState => {
              const updatedPlayers = [...prevState.players];
              const updatedPlayer = { ...updatedPlayers[0] };
              console.log(updatedPlayer);
              updatedPlayer.score += 1;
              updatedPlayer.isWinner = true;
              updatedPlayers[0] = updatedPlayer;
              return { players: updatedPlayers };
            })
          : this.setState(prevState => {
              const updatedPlayers = [...prevState.players];
              const updatedPlayer = { ...updatedPlayers[1] };
              console.log(updatedPlayer);
              updatedPlayer.score += 1;
              updatedPlayer.isWinner = true;
              updatedPlayers[1] = updatedPlayer;
              return { players: updatedPlayers };
            });
      }
      this.setState(prevState => {
        const updatedPlayers = [...prevState.players];
        const updatedPlayer = { ...updatedPlayers[0] };
        updatedPlayer.isWinner = "draw";
        updatedPlayers[0] = updatedPlayer;
        return { players: updatedPlayers };
      }, () => console.log("passin", this.state));
      ;
    });
  }

  displayWinner() {
    return this.state.players[0].isWinner===true
      ? "player1 is winner"
      : "player2 is winner";
  }
  renderButtonStartMatch() {
    return this.state.players[0].sign !== "" &&
      this.state.players[1].sign !== "" ? (
      <button
        onClick={() =>
          this.checkWinner(
            this.state.players[0].sign,
            this.state.players[1].sign
          )
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
