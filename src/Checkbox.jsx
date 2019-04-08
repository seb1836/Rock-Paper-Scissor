import React, { Component } from "react";

class Checkbox extends Component {
  onClickHandler = () => {
    const { onClick, label } = this.props;
    onClick(label);
  };

  render() {
    const { label } = this.props;
    return (
      <div>
        <input
          id={label}
          type="checkbox"
          name="choice"
          onClick={this.onClickHandler}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    );
  }
}

export default Checkbox;
