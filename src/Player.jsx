import React, { Component } from "react";
import Checkbox from "./Checkbox";
import Score from "./Score";
import Input from "./Input";

class Player extends Component {
  state = {
    playerName: "",
    scorePlayer: "0",
    playerSign: "",
    isPlayerNameSaved: false,
    isSignSaved: false
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
    console.log(this.state.playerName);
  };

  hidingInputComponent = () => {
    if (!this.state.isPlayerNameSaved) {
      this.setState({ isPlayerNameSaved: true });

      return <Input placeholder={this.props.placeholder} />;
    }
  };

  render() {
    return (
      <div>
        <Input
          placeholder={this.props.placeholder}
          playerName={this.state.playerName}
          playerNameHandler={this.playerNameHandler}
          hiding={this.hidingInputComponent}
          isPlayerNameSaved={this.state.isPlayerNameSaved}
        />
        {this.state.isPlayerNameSaved ? (
          <div>
            {this.state.playerName}
            <div className="signePlayer1">
              choose your sign {this.state.playerName}
            </div>
          </div>
        ) : (
          <div className="signePlayer1">choose your sign</div>
        )}
        {this.state.isSignSaved ? (
          <div>`${this.state.playerName} just picked his sign`</div>
        ) : (
          <div>
            <Checkbox
              saveSelectedSign={this.saveSelectedSignPlayer}
              isSignChecked={this.state.isSignSaved}
            />
          </div>
        )}
        <Score />
        {this.state.scorePlayer}
      </div>
    );
  }
}

export default Player;
