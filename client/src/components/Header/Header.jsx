import React from "react";
import Button from "../Button"
//css
import "./Header.css";

function Header(){
    return(
        <header>
            <div>
            <img src="img/logo.png" alt="Logo Xpace"/>
            <Button>Menu</Button>
            </div>
        </header>
    );
}

export default Header;