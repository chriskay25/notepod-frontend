import React from "react";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="app-header">
      <div style={{ position: "relative" }}>
        <Hamburger />
        <h1 className="app-title">NOTEPOD</h1>
      </div>
    </header>
  );
};

export default Header;
