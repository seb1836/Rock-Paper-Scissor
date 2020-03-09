import React, { Component, Fragment } from "react";
import Checkbox from "./Checkbox";
import Score from "./Score";
import Input from "./Input";

const options = ["rock", "paper", "scissor"];

class Player extends Component {
  state = {
    playerName: "",
    isPlayerNameSaved: false,
    playerSign: "",
    isSignSaved: false
  };

  saveName = () => {
    this.setState({ isPlayerNameSaved: true });
  };

  onNameChange = e => {
    this.setState({ playerName: e.target.value });
  };

  saveSelectedSignPlayer = label => {
    console.log(label, "f");
    this.setState(
      {
        playerSign: label,
        isSignSaved: true
      },
      this.props.playerSetSign(label, this.props.id)
    );
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
    console.log(this.props);
    return this.props.isPlayerNameSaved ? null : (
      <Input
        placeholder={this.props.placeholder}
        onClick={this.props.saveName}
        onChange={this.props.onNameChange}
        value={this.props.playerName}
        buttonContent="Save"
        id={this.props.id}
      />
    );
  }
  renderName() {
    return this.props.isPlayerNameSaved && !this.props.isSignSaved
      ? this.props.playerName
      : null;
  }

  renderCheckboxes() {
    return !this.props.isSignSaved && this.props.isPlayerNameSaved
      ? this.createCheckboxes()
      : null;
  }

  renderConfirmationString() {
    return this.props.playerSign
      ? `${this.props.playerName} choose his sign`
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
        {/* {this.setScore()} */}
        <Score score={this.props.score} />
      </Fragment>
    );
  }
}

export default Player;
