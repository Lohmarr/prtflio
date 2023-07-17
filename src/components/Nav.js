import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  return (
    <nav>
      <ul>
        <li className='nav-item'>
          <NavLink to="/AboutMe">About Me</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/Resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};
 export default Navigation;