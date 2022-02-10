import React from "react";
import "./Header.css";
import redditLogoImg from "./redditLogoDark.png";

const Header = () => {
  return (
    <header>
      <div className="headerLogo">
        <img src={redditLogoImg} alt="Reddit Logo Black and White"/>
        <p>Minimal Reddit - Dark</p>
      </div>
    </header>
  );
};

export default Header;
