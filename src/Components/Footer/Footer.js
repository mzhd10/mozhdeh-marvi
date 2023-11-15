import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex">
          <div>
            <p>&copy; {currentYear} by Mozhdeh Marvi. All rights reserved.</p>
          </div>
          <div className="icons">
            <a href="https://github.com/mzhd10">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/withmzhd">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com/mzhd.codes">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/mozhdeh-marvi-7885a0294/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
