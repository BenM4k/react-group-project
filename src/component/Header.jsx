import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../planet.png';

export default function Header() {
  const links = ['rockets', 'missions', 'profile'];
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navdiv">
          <img className="headerimg" src={planet} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <ul className="app__flex">
          {links.map((link) => (
            <li key={link}>
              <NavLink to={link === 'rockets' ? '/' : `${link}`}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
