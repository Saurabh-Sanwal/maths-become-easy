import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo + Name */}
      <div className="navbar-brand">
        <img src="websitelogo.jpeg" alt="Logo" className="logo" />
        <h1 className="site-name">Maths Become Easy</h1>
      </div>

      {/* Hamburger Button */}
      <button
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Home
        </NavLink>
        <NavLink
          to="/chapters"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Chapters
        </NavLink>
        <NavLink
          to="/progress"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Progress
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
