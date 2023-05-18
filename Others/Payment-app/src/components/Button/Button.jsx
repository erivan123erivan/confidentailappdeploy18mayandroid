import React from "react";
import "./Button.css";

const Button = ({ btnName, onClick, disabled, classe }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`btn ${classe}`}>
      {btnName}
    </button>
  );
};

export default Button;
