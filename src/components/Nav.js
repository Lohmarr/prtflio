import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  return (
    <nav>
      <ul>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/">About Me</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/Portfolio">Portfolio</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName="active nav-link" to="/Resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};
 export default Navigation;