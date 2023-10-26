import React from 'react';
import Header from './components/Header.jsx';
import Account from './components/Account.jsx';
import Footer from './components/Footer.jsx';
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
      <Header menuItems={menuItems} />
      <Account />
      <Footer menuItems={menuItems} />
    </div>
  );
}

export default App;
