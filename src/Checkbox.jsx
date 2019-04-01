import React from "react";

const Checkbox = props => (
  <div>
    {props.isSignChecked ? null : (
      <div>
        <div>
          <input
            type="checkbox"
            value="rock"
            onClick={props.saveSelectedSign}
          />{" "}
          rock
        </div>
        <div>
          <input
            type="checkbox"
            value="paper"
            onClick={props.saveSelectedSign}
          />{" "}
          paper
        </div>
        <div>
          <input
            type="checkbox"
            value="scissor"
            onClick={props.saveSelectedSign}
          />{" "}
          scissor
        </div>
      </div>
    )}
  </div>
);

export default Checkbox;
