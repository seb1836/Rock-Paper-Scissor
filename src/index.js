import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import "./styles.css";
import Score from "./Score";
class App extends Component {
  state = {
    player1Name: "",
    player2Name: "",
    inputPlayer1: "",
    inputPlayer2: "",
    scorePlayer1: "0",
    scorePlayer2: "0",
    player1Signe: "",
    player2Signe: ""
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

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="player1 name"
          value={this.state.inputPlayer1}
          onChange={this.updateInputPlayer1Value}
        />
        <Button
          onClick={() =>
            this.handleClick("player1Name", this.state.inputPlayer1)
          }
          content="Player 1"
        />
        <input
          type="text"
          placeholder="player2 name"
          value={this.state.inputPlayer2}
          onChange={this.updateInputPlayer2Value}
        />
        <Button
          onClick={() =>
            this.handleClick("player2Name", this.state.inputPlayer2)
          }
          content="Player 2"
        />
        <div>{this.state.player1Name}</div>
        <div>{this.state.player2Name}</div>
        <div class="signePlayer1">
          choose your signe {this.state.player1Name}
        </div>
        <Checkbox />
        <Score />
        {this.state.scorePlayer1}
        <div class="signePlayer2">
          choose your signe {this.state.player2Name}
        </div>
        <Checkbox />
        <Score />
        {this.state.scorePlayer2}
        <div class="winnerCaption">Winner</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
