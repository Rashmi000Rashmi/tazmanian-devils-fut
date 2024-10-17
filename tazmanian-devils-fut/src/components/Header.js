import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/', 
    label: 'Home' 
  },
  { path: '/services', 
    label: 'Services' 
  },
  { path: '/events', 
    label: 'Events' 
  },
  { path: '/about-us', 
    label: 'About Us' 
  },
  { path: '/contact-us', 
    label: 'Contact Us' 
  },
  { path: '/groups', 
    label: 'Groups' 
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const squareRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, { y: -50, opacity: 0, duration: 1 });
    gsap.to(squareRef.current, 
      
      {
      y: '-10px',
      x: '15vw',
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'power2.inOut',
    });
  }, []);


  return (
    <header className="header">  
      <nav>
        <ul>
        <div className="square" ref={squareRef}></div>
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