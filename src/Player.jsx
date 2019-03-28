import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Score from "./Score";
import Input from "./Input";

class Player extends Component {
  state = {
    playerName: "",
    inputPlayer: "",
    scorePlayer: "0",
    playerSign: ""
  };

  saveSelectedSignPlayer = evt => {
    this.setState(
      {
        playerSign: evt.target.value
      },
      () => {
        console.log(this.state.playerSign);
      }
    );
  };

  playerNameHandler = evt => {
    this.setState({ playerName: evt.target.value });
  };

  render() {
    return (
      <div>
        <Input
          placeholder={this.props.placeholder}
          playerNameHandler={this.playerNameHandler}
        />
        {/*<input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.inputPlayer1}
          onChange={this.updateInputPlayer1Value}
        />
        <Button
          onClick={() =>
            this.handleClick("player1Name", this.state.inputPlayer1)
          }
          content="Player 1"
        />*/}

        <div>{this.state.playerName}</div>

        <div class="signePlayer1">choose your sign {this.state.playerName}</div>
        <Checkbox isCheckedPlayer1={this.saveSelectedSignPlayer} />
        <Score />
        {this.state.scorePlayer}
      </div>
    );
  }
}

export default Player;
