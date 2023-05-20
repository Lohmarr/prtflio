import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  return (
    <nav>
      <ul>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/about-me">About Me</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};
 export default Navigation;