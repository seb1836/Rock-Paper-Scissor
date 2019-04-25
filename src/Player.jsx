import React, { Component, Fragment } from "react";
import Checkbox from "./Checkbox";
import Score from "./Score";
import Input from "./Input";

const options = ["rock", "paper", "scissor"];

let isSignSendToParent = false;

class Player extends Component {
  state = {
    playerName: "",
    scorePlayer: "0",
    isPlayerNameSaved: false,
    playerSign: ""
  };

  saveName = () => {
    this.setState({ isPlayerNameSaved: true });
  };

  isNameSaved = () => this.state.isPlayerNameSaved;

  onNameChange = e => {
    this.setState({ playerName: e.target.value });
  };

  assignSign = () => {
    if (this.props.number === 1) {
      this.props.player1SetSign(this.state.playerSign);
    } else if (this.props.number === 2) {
      this.props.player2SetSign(this.state.playerSign);
    }
  };
  saveSelectedSignPlayer = label => {
    console.log(label, "f");
    this.setState({
      playerSign: label,
      isSignSaved: true
    });
    {
      this.assignSign;
    }
  };
  createCheckboxes() {
    return options.map(option => (
      <Checkbox
        key={option}
        label={option}
        onClick={this.saveSelectedSignPlayer}
      />
    ));
  }
  renderInput() {
    return this.isNameSaved() ? null : (
      <Input
        placeholder={this.props.placeholder}
        onClick={this.saveName}
        onChange={this.onNameChange}
        value={this.state.playerName}
        buttonContent="Save"
      />
    );
  }
  renderName() {
    return this.isNameSaved() ? this.state.playerName : null;
  }

  renderCheckboxes() {
    return !this.state.isSignSaved && this.state.isPlayerNameSaved
      ? this.createCheckboxes()
      : null;
  }

  renderConfirmationString() {
    return isSignSendToParent
      ? `${this.state.playerName} choose is sign`
      : null;
  }

  render() {
    return (
      <Fragment>
        {this.renderInput()}
        {this.renderName()}
        {this.renderCheckboxes()}
        {this.renderConfirmationString()}
        {/*{this.callAssignSign()}*/}
        <Score score={this.state.scorePlayer} />
      </Fragment>
    );
  }
}

export default Player;
