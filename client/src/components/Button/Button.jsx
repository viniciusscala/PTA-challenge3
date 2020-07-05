import React from "react";
//css
import "./Button.css";

function Button(props) {
  return <button className="Button">{props.children}</button>;
}

export default Button;
