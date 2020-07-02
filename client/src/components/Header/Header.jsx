import React from "react";
import Button from "../Button"
import logo from "./logo.png"
//css
import "./Header.css";

function Header(){
    return(
        <header>
            <div>
            <img src={logo} alt="Logo Xpace"/>
            </div>
        </header>
    );
}

export default Header;