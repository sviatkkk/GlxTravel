import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

import './NavbarStyles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const onClickHandler = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={onClickHandler}>
        {click ? (
          <FaTimes size={20} style={{ color: 'white' }} />
        ) : (
          <FaBars size={20} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
