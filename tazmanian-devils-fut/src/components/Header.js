import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/events', label: 'Events' },
  { path: '/about-us', label: 'About Us' },
  { path: '/contact-us', label: 'Contact Us' },
  { path: '/groups', label: 'Groups' },
];

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;