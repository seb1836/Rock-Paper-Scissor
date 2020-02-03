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
        name: "",
        sign: false,
        score: 0,
        isWinner: false,
        isPlayerNameSaved: false,
        isSignSaved:false,
        placeholder: "Player 1 Name"
      },
      {
        id: 2,
        name: "",
        sign: false,
        score: 0,
        isWinner: false,
        isPlayerNameSaved: false,
        isSignSaved:false,
        placeholder: "Player 2 Name"
      }
    ],

    round: 1
  };

  saveName = id => {
    this.setState(prevState => {
      const updatedPlayers = [...prevState.players];
      const updatedPlayer = { ...updatedPlayers[id - 1] };
      console.log(updatedPlayer);
      updatedPlayer.isPlayerNameSaved = true;
      updatedPlayers[id - 1] = updatedPlayer;
      return { players: updatedPlayers };
    });
  };
  setNewMatch = () => {
    this.setState(
    prevState => ({
      players: prevState.players.map(player => {
        player.name=""
        player.sign = false;
        player.isWinner = false;
        player.placeholder = `Player${player.id} Name`;
        player.score=0;
        player.isPlayerNameSaved=false
        player.isSignSaved = false
        return player;
      }),
      round: 1
    }))
  }
  setNewRound = () => {
    this.setState(
      prevState => ({
        players: prevState.players.map(player => {
          
          player.sign = false;
          player.isWinner = false;
          player.placeholder = `Player${player.id} Name`;
          
          player.isSignSaved=false
          return player;
        }),
        round: (prevState.round += 1)
      }),
      () => console.log(this.state, "new round")
    );
  };

  switchRenderBetweenStartMatchButtonAndWinner(myString) {
    const player1 = this.state.players[0];
    const player2 = this.state.players[1];
    if (!player1.isWinner && !player2.isWinner) {
      return this.renderButtonStartMatch();
    } else if (player1.sign === player2.sign) {
      return `the round ${this.state.round} is a draw`;
    } else if (player1.isWinner || player2.isWinner) {
      return this.displayWinner();
    }
  }

  playerSaveSign = (signSaved, id) => {
    this.setState(
      prevState => {
        const updatedPlayers = [...prevState.players];
        const updatedPlayer = { ...updatedPlayers[id - 1] };
        console.log(updatedPlayer);
        updatedPlayer.sign = signSaved;
        updatedPlayer.isSignSaved=true
        updatedPlayers[id - 1] = updatedPlayer;
        return { players: updatedPlayers };
      },
      () => console.log(this.state, "into save")
    );
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
      } else if (this.state.players[0].sign === this.state.players[1].sign) {
        this.setState(
          prevState => {
            const updatedPlayers = [...prevState.players];
            const updatedPlayer = { ...updatedPlayers[0] };
            updatedPlayer.isWinner = "draw";
            updatedPlayers[0] = updatedPlayer;
            return { players: updatedPlayers };
          },
          () => console.log("passin", this.state)
        );
      }
    });
  }

  displayWinner() {
    return this.state.players[0].isWinner === true
      ? `player1 is the winner of round ${this.state.round}`
      : `player2 is the winner of round ${this.state.round}`;
  }
  renderButtonStartMatch() {
    return this.state.players[0].sign && this.state.players[1].sign ? (
      <button
        onClick={() =>
          this.checkWinner(
            this.state.players[0].sign,
            this.state.players[1].sign
          )
        }
      >
        show result
      </button>
    ) : null;
  }
  onNameChange = (e, id) => {
    console.log(id, "my id");
    if (id === 1) {
      this.setState(prevState => {
        const updatedPlayers = [...prevState.players];
        const updatedPlayer = { ...updatedPlayers[0] };
        updatedPlayer.name = e.target.value;
        updatedPlayers[0] = updatedPlayer;
        return { players: updatedPlayers };
      });
    } else if (id === 2) {
      this.setState(prevState => {
        const updatedPlayers = [...prevState.players];
        const updatedPlayer = { ...updatedPlayers[1] };
        updatedPlayer.name = e.target.value;
        updatedPlayers[1] = updatedPlayer;
        return { players: updatedPlayers };
      });
    }
  };
  renderPlayer() {
    return this.state.players.map((player, index) => {
      return (
        <Player
          key={player.id}
          placeholder={player.placeholder}
          id={player.id}
          playerName={player.name}
          playerSetSign={this.playerSaveSign}
          playerSign={player.sign}
          isplayerwinner={player.isWinner}
          score={player.score}
          isSignSaved={player.isSignSaved}
          isPlayerNameSaved={player.isPlayerNameSaved}
          saveName={this.saveName}
          onNameChange={this.onNameChange}
        />
      );
    });
  }

  renderNextRoundButton() {
    return this.state.players.some(player =>{return player.isWinner}) && this.state.round !==3 ? (
      <button onClick={() => this.setNewRound()}>begin next round</button>
    ) : null;
  }
displayWinnerOfTheMatch()  {
if(this.state.players[0].score>this.state.players[1].score){
  return (<div><p>{this.state.players[0].name} win the match</p><button>start new match</button></div>
  )}else if (this.state.players[1].score>this.state.players[0].score){
  return (<div><p>{this.state.players[1].name} win the match</p><button>start new match</button></div>
  )}
  return (<div><p>there is no winner for this match</p><button onClick={this.setNewMatch}>start new match</button></div>
  )
}

  showMatchResults (){
    return this.state.round===3 && this.state.players[0].isWinner? this.displayWinnerOfTheMatch():null
  }
  render() {
    return (
      <div className="App">
        {this.renderPlayer()}
        {this.switchRenderBetweenStartMatchButtonAndWinner()}
        {this.renderNextRoundButton()}
        {this.showMatchResults()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
