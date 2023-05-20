import React from 'react';
import Navigation from './Nav';

 const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" role="navigation">
        <a className="navbar-brand" href="/">Welcome to my Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Navigation />
          </ul>
        </div>
      </nav>
    </header>
  );
};

 export default Header;