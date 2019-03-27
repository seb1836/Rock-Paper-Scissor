import React, { Component } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Score from "./Score";

class Player extends Component {
  state = {
    playerName: "",
    inputPlayer: "",
    scorePlayer: "0",
    playerSign: ""
  };
  handleClick = (field, value) => {
    this.setState({ [field]: value });
  };

  updateInputPlayer1Value = evt => {
    this.setState({
      inputPlayer1: evt.target.value
    });
    console.log("e");
  };

  updateInputPlayer2Value = evt => {
    this.setState({
      inputPlayer2: evt.target.value
    });
    console.log("2");
  };
  saveSelectedSignPlayer1 = evt => {
    this.setState(
      {
        player1Sign: evt.target.value
      },
      () => {
        console.log(evt.class);
      }
    );
  };

  render() {
    return (
      <div>
        <input
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
        />

        <div>{this.state.player1Name}</div>
        <div>{this.state.player2Name}</div>
        <div class="signePlayer1">
          choose your sign {this.state.player1Name}
        </div>
        <Checkbox isCheckedPlayer1={this.saveSelectedSignPlayer1} />
        <Score />
        {this.state.scorePlayer1}
      </div>
    );
  }
}

export default Player;
