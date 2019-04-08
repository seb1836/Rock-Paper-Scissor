import React, { Component, Fragment } from "react";
import Checkbox from "./Checkbox";
import Score from "./Score";
import Input from "./Input";

const options = ["rock", "paper", "scissor"];

class Player extends Component {
  state = {
    playerName: "",
    scorePlayer: "0",
    playerSign: "",
    isPlayerNameSaved: false,
    isSignSaved: false
  };

  saveName = () => {
    this.setState({ isPlayerNameSaved: true });
  };

  isNameSaved = () => this.state.isPlayerNameSaved;

  saveSelectedSignPlayer = label => {
    console.log(label);
    this.setState({
      playerSign: label,
      isSignSaved: true
    });
  };
  onNameChange = e => {
    this.setState({ playerName: e.target.value });
  };

  /*hidingInputComponent = () => {
    if (!this.state.isPlayerNameSaved) {
      this.setState({ isPlayerNameSaved: true });

      return <Input placeholder={this.props.placeholder} />;
    }
  };*/

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
    return this.state.isSignSaved ? this.createCheckboxes() : null;
  }

  renderConfirmationString() {
    return this.state.isSignSaved
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
        <Score score={this.state.scorePlayer} />
      </Fragment>
    );
  }
}

export default Player;
