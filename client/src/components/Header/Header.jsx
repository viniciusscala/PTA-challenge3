import React from "react";
import logo from "./img/logo.png";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="header-container">
        <img src={logo} alt="Logo Xpace hot dog 19" />
      </div>
    </header>
  );
}

export default Header;
