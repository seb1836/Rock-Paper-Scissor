import React, { Fragment } from "react";

const Input = ({
  onChange,
  onClick,
  value,
  placeholder,
  buttonContent,
  id
}) => {
  const handleNamechange = () => {
    console.log(id);
    onChange(event, id);
  };

  const handleSaveName = () => {
    onClick(id);
  };
  return (
    <Fragment>
      <input
        onChange={handleNamechange}
        value={value}
        placeholder={placeholder}
      />
      <button onClick={handleSaveName}>{buttonContent}</button>
    </Fragment>
  );
};

export default Input;
