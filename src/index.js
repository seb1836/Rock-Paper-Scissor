import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import "./styles.css";

class App extends Component {
  state = {
    player1Name: "",
    player2Name: ""
  };
  handleClick = (field, value) => {
    this.setState({ [field]: value });
  };
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="player1 name" />
        <Button
          onClick={() =>
            this.handleClick("player1Name", this.state.player1Name)
          }
          content="Player 1"
        />
        <Button
          onClick={() => this.handleClick("player2Name", "test2")}
          content="Player 2"
        />
        <input type="text" placeholder="player2 name" />
        <button type="submit">submit</button>
        <input
          type="text"
          value={this.state.player1Name}
          placeholder="player1Name"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
