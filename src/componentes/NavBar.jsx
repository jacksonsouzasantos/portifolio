import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style/NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav-menu-container">
      <nav className={`nav-menu ${showMenu ? 'menu-open' : ''}`}>
        <div className="hamburger-menu" aria-label="Abrir menu" onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`} data-testid='nav-menu'>
          <li className="nav-item">
            <NavLink to="/" onClick={hideMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact="true" to="/about" onClick={hideMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact="true" to="/projects" onClick={hideMenu}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact="true" to="/skills" onClick={hideMenu}>
              Skills
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
