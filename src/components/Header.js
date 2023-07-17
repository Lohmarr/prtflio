import React from "react";
import Navigation from "./Nav";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" role="navigation">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <a className="nav-item" href="/">
              Home
            </a>
            <Navigation />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
