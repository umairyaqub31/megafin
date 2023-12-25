import React from "react";
import "./input.css"

function Input(props) {
  return (
    <input style={{ width: '90%', height: '26px' }}
      type="text"
      placeholder={props.placeholder}
    ></input>
  );
}

export default Input;
