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
				<ul className={`nav-list ${showMenu ? 'show-menu' : ''}`} data-testid="nav-menu" role="menu">
					<li className="nav-item">
						<NavLink to="/" onClick={hideMenu} aria-current="page">
							Início
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about" onClick={hideMenu}>
							Sobre
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/projects" onClick={hideMenu}>
							Projetos
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/skills" onClick={hideMenu}>
							Habilidades
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;