import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../planet.png';

export default function Header() {
  const links = ['rockets', 'missions', 'profile'];
  return (
    <header className="header">
      <nav className="navbar">
        <img className="headerimg" src={planet} alt="logo" />
        <ul className="app__flex">
          {links.map((link) => (
            <li key={link}>
              <NavLink to={link === 'rockets' ? '/' : `${link}`} activeClassName="active">
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
