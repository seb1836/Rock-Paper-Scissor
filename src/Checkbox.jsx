import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="checkbox" value="rock" /> rock
        </div>
        <div>
          <input type="checkbox" value="paper" /> paper
        </div>
        <div>
          <input type="checkbox" value="scissor" /> scissor
        </div>
      </div>
    );
  }
}

export default Checkbox;
