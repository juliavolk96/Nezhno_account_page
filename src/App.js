import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Account from './components/Account';
import Footer from './components/Footer';
import './components/commonStyle.css';
import './components/style.css';

function App() {
  const menuItems = [
    { text: 'Главная', link: '#' },
    { text: 'О нас', link: '#' },
    { text: 'Блог', link: '#' },
  ];
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Ubuntu+Condensed&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header menuItems={menuItems} />
      <Account />
      <Footer menuItems={menuItems} />
    </div>
  );
}

export default App;
