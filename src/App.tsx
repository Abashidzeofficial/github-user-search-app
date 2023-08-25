import React from 'react';

import './App.css';
import './component/styles.css';
import Header from './component/Header';
import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';
import searchIcon from './images/icon-search.svg';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="header-group">
        <p className="header-txt">devfinder</p>
        {/* <div className='contrast-dark'>
          <p className='dark'>DARK </p>
          <img src={moon} alt="dark and light" className="dl" />
        </div> */}
        <div className="contrast-light">
          <p className="light">LIGHT</p>
          <img src={sun} alt="sun-light" className="sun-light" />
        </div>
      </div>
      <div className="input-group">
        <div className="input-graph">
          <input type="text" className="input-txt" placeholder="Search GitHub users..." />

        </div>
        <button className="search-btn">Search</button>
        <img src={searchIcon} alt="searchIcon" className="search-icon" />
      </div>
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
