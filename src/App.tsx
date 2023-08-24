import React from 'react';

import './App.css';
import './component/styles.css';
import Header from './component/Header';
import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <p className="header-txt">devfinder</p>
      <div className='contrast-dark'>
        <p className='dark'>DARK </p>
        <img src={moon} alt="dark and light" className="dl" />
      </div>
      <div className="contrast-light">
        <p className="light">LIGHT</p>
        <img src={sun} alt="sun-light" className="di" />
      </div>
      <div className="input-group">
        <div className="input-graph">
          <input type="text" className="input-txt" />
        </div>
        <button className="search-btn">Search</button>
      </div>
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
