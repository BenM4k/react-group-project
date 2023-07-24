import React from 'react';
import planet from '../planet.png';

export default function Header() {
  return (
    <header className="header">
      <img className="headerimg" src={planet} alt="logo" />
      <nav className="navbar" />
    </header>
  );
}
