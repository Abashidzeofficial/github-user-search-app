import React, { useState } from 'react';

import './App.css';
import './component/styles.css';
import Header from './component/Header';
import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';
import searchIcon from './images/icon-search.svg';

const App: React.FC = () => {
  const [input, setInput] = useState("");

  const handleSubmission = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
    console.log(input);
  }

  const handleChange = (e: any) => {
    setInput(e.target.value);

  };
  return (
    <form className="wrapper" onSubmit={handleSubmission}>
      <div className="header-group">
        <p className="header-txt">devfinder</p>
        <div className="contrast-light">
          <p className="light">LIGHT</p>
          <img src={sun} alt="sun-light" className="sun-light" />
        </div>
      </div>
      <div className="input-group">
        <div className="input-graph">
          <input
            type="text"
            className="input-txt"
            placeholder="Search GitHub users..."
            value={input}
            onChange={handleChange}
          >
          </input>

        </div>
        <button className="search-btn">Search</button>
        <img src={searchIcon} alt="searchIcon" className="search-icon" />
      </div>
      <div className="container">
        <Header
          input={input}
          setInput={setInput}
        />
      </div>
    </form>
  );
}

export default App;
