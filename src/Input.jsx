import React, { Fragment } from "react";

const Input = ({ onChange, onClick, value, placeholder, buttonContent }) => (
  <Fragment>
    <input onChange={onChange} value={value} placeholder={placeholder} />
    <button OnClick={onClick}>{buttonContent}</button>
  </Fragment>
);

export default Input;
