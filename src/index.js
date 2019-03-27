import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Player from "./Player";
import "./styles.css";
import Score from "./Score";
class App extends Component {
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
      <div className="App">
        <Player placeholder="Player1Name" />
        <Player placeholder="Player2Name" />
        <Car color="red" />
        <Car color="blue" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
