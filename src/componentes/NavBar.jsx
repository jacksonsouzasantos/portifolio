import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <nav className={`nav-menu ${showMenu ? 'menu-open' : ''}`}>
      <div className="hamburger-menu">
        {showMenu ? (
          <FaTimes onClick={handleMenu} />
        ) : (
          <FaBars onClick={handleMenu} />
        )}
      </div>
      <ul className={`nav-list ${showMenu ? 'show-menu' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={hideMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={hideMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" onClick={hideMenu}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" onClick={hideMenu}>
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
