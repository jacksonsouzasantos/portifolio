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
    <div className="nav-menu-container" role="navigation">
      <nav className={`nav-menu ${showMenu ? 'menu-open' : ''}`} aria-label="Menu" role="menubar">
        <div className={`hamburger-menu ${showMenu ? 'menu-open' : ''}`} aria-label="Abrir menu" onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars className="hamburger-icon" />}
        </div>
        <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`} role="menu">
          <li className="nav-item">
            <NavLink to="/" onClick={hideMenu} aria-current="page" role="none">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" onClick={hideMenu} role="none">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" onClick={hideMenu} role="none">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" onClick={hideMenu} role="none">
              Skills
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
