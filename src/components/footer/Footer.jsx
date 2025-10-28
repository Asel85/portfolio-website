import React from 'react';
import './footer.css';
import instagram from '../../img/icons/instagram.svg';
import gitHub from '../../img/icons/gitHub.svg';
import linkedin from '../../img/icons/linkedIn.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/almaz_aselya_abd_storeboom?igsh=Z2RjYjh2MGd0cmow">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Asel85">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/asel-abdykalykova">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© {new Date().getFullYear()} Frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
