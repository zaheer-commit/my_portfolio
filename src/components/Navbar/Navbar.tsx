
import './Navbar.scss';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar_container">

        <a href="#home" className="my_name" onClick={closeMenu}>
          Zaheer Nazari
        </a>

        <div
          className={`navbar_hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar_links ${isMenuOpen ? 'is-active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#getintouch" onClick={closeMenu}>Get in touch</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
