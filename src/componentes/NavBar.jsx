import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    <>
      <div className="hamburguer-menu">
        {showMenu ? (
          <FaTimes onClick={handleMenu} />
        ) : (
          <FaBars onClick={handleMenu} />
        )}
      </div>
      <nav className={`nav-menu ${showMenu ? 'show-menu' : ''}`}>
        <ul className="nav-list">
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
        </ul>
      </nav>
    </>
  );
};

export default NavBar;