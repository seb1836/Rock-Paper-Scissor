import React, { Component } from "react";
import Button from "./Button";

class Input extends Component {
  state = {};

  updateInputPlayerValue = evt => {
    this.setState({
      inputPlayer: evt.target.value
    });
    console.log(this.state.inputPlayer);
  };

  render() {
    if (this.props.isPlayerNameSaved === false) {
      return (
        <div>
          <input
            type="text"
            placeholder={this.props.placeholder}
            onChange={this.props.playerNameHandler}
          />
          <Button onClick={this.props.hiding} content="Player 1" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Input;
