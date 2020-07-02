import React from "react";
//css
import "./Button.css";

function Button(){
    return(
        <button>{props.children}</button>
    );
}

export default Button;