import './Navbar.scss';
import language from '../../assets/icons/language.svg'
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);}, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar_container">

        <div className="the_name">
          <a href="#home" className="my_name" onClick={closeMenu}> Zaheer Nazari </a>
          <button className="language" aria-label="Change website language">
            <b>دری</b>
            <img src={language} alt="Language"/>
          </button>
        </div>

        <div
          className={`navbar_hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar_links ${isMenuOpen ? 'is-active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#projects" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Credentials</a></li>
          <li><a href="#projects" onClick={closeMenu}>Experience</a></li>
          <li><a href="#getintouch" onClick={closeMenu}>Get in touch</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
