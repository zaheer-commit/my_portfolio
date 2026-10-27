import './Footer.scss';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container">

            <ul className="footer_links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#getintouch">Get in touch</a></li>
            </ul>

            <h1> Zaheer Nazari </h1>

            <h2 className="footer_contact"> Kabul AF |
               <a href="mailto:zaheer.kargar@gmail.com" target="_blank"> zaheer.kargar@gmail.com </a>
            </h2>

            <p> © Zaheer Nazari ,{new Date().getFullYear()} </p>

            <div className="footer_icons">
                <a href="https://www.instagram.com/zaheer_19_48?srtk=aXc3bGY3M2tiZG1r" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://github.com/zaheer-commit" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/zaheer-nazari/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
            </div>

        </div>
    </footer>
  );
};

export default Footer;
