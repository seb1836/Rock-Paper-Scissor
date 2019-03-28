import React, { Component } from "react";
import Button from "./Button";

class Input extends Component {
  state = {
    inputPlayer: ""
  };

  updateInputPlayerValue = evt => {
    this.setState({
      inputPlayer: evt.target.value
    });
    console.log(this.state.inputPlayer);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.playerName}
          onChange={this.props.playerNameHandler}
        />
        <Button
          onClick={() => this.props.playerNameHandler}
          content="Player 1"
        />
      </div>
    );
  }
}

export default Input;
