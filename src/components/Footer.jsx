import React from 'react';
import instagramIcon from '../images/instagram.svg';
import vkIcon from '../images/vk-icon.svg';
import tgIcon from '../images/tg-icon.svg';
import nezhnoIcon from '../images/Nezhno.svg';

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="footer" id="footer">
          <ul className="footer__menu">
            <li><a href="#">{props.menuItems[0].text}</a></li>
            <li><a href="#">{props.menuItems[1].text}</a></li>
            <li><a href="#">{props.menuItems[2].text}</a></li>
          </ul>
          <div className="center-footer">
            <div className="footer-documents">
              <a href="privacy-politic">Политика конфиденциальности</a>
              <br />
              <a href="contract">Договор публичной оферты</a>
            </div>
            <ul>
              <li>ИП Ларькина К.Ю.</li>
              <li>ОГРНИП 318527500097073</li>
              <li>ИНН 525801278469</li>
            </ul>
          </div>
          <div className="soc_networks">
            <a href="https://www.instagram.com/nezhno.space/" target="_blank">
              <img src={instagramIcon} alt="" />
            </a>
            <a href="https://vk.com/nezhno.space" target="_blank">
              <img src={vkIcon} alt="" />
            </a>
            <a href="https://t.me/nezhno_space" target="_blank">
              <img src={tgIcon} alt="" />
            </a>
            <a href="mailto:care@nezhno.space" target="_blank">
              <img src={nezhnoIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
