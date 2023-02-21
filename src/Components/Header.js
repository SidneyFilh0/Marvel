import React from "react";

import "../Assets/css/Header.css"
import marvelLogo from "../Assets/img/logo.png"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={marvelLogo} alt="Marvel Logo"/>
      </div>
    </header>
  )
}

export default Header