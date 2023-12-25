import React from "react";

function CustomButton(props) {
  return (
    <button
      style={{
        width: "100%",
        height: "50px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#E26A4F",
        color: "white",
      }}
    >
      {props.title}
    </button>
  );
}

export default CustomButton;
