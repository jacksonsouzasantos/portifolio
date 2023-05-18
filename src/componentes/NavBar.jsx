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
    // <div className="nav-menu-container">
    <div className="nav-menu-container" role="navigation">
      <nav className={`nav-menu ${showMenu ? 'menu-open' : ''}`} role="menubar">
        {/* <div className="hamburger-menu" aria-label="Abrir 
        menu" onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div> */}
 <div className={`hamburger-menu ${showMenu ? 'menu-open' : ''}`} aria-label="Abrir menu" onClick={handleMenu}>
  {showMenu ? <FaTimes /> : <FaBars className="hamburger-icon"/>}
</div>

        <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`} data-testid='nav-menu' role="menu">
          <li className="nav-item">
          <NavLink to="/" onClick={hideMenu} aria-current="page">
            {/* <NavLink to="/" onClick={hideMenu}> */}
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
