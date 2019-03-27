import React from "react";

const Checkbox = props => {
  return (
    <div>
      <div>
        <input type="checkbox" value="rock" onClick={props.isCheckedPlayer1} />{" "}
        rock
      </div>
      <div>
        <input type="checkbox" value="paper" /> paper
      </div>
      <div>
        <input type="checkbox" value="scissor" /> scissor
      </div>
    </div>
  );
};

export default Checkbox;
