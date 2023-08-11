import React from 'react';
import logoImage from '../images/logo.svg';
import userImage from '../images/user.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="header_wrap">
        <button className="header_btn"></button>
        <div className="header_logo">
          <a href="/">
            <img src={logoImage} alt="Logo" />
          </a>
        </div>
        <nav className="nav header_nav">
          <ul className="nav_list">
            <li><a href="#">{props.menuItems[0].text}</a></li>
            <li><a href="#">{props.menuItems[1].text}</a></li>
            <li><a href="#">{props.menuItems[2].text}</a></li>
          </ul>
        </nav>
        <a href="auth" className="header_user">
          <img src={userImage} alt="user" />
        </a>
        <a className="header-btn" href="registration">Старт</a>
      </div>
      {/* <div className="header_auth">
        <ul className="account_navigation-list navigation-list_slider">
          <li className="active account_fullname"><a href="account">Мои данные</a></li>
          <li className="account_subscription"><a href="subscription">Моя подписка</a></li>
          <li className="account_calendar"><a href="">Календарь</a></li>
        </ul>
      </div> */}
    </header>
  );
}

export default Header;
