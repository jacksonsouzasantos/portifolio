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
      <nav className={`nav-menu ${showMenu ? 'menu-open' : ''}`} role="menubar">
        <div className={`hamburger-menu ${showMenu ? 'menu-open' : ''}`} aria-label="Abrir menu" onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars className="hamburger-icon" />}
        </div>
        <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`} data-testid='nav-menu' role="menu">
          <ul>
            <li className="nav-item">
              <NavLink to="/" onClick={hideMenu} aria-current="page" role="menuitem">
                Home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="nav-item">
              <NavLink exact="true" to="/about" onClick={hideMenu} role="menuitem">
                About
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="nav-item">
              <NavLink exact="true" to="/projects" onClick={hideMenu} role="menuitem">
                Projects
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="nav-item">
              <NavLink exact="true" to="/skills" onClick={hideMenu} role="menuitem">
                Skills
              </NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
