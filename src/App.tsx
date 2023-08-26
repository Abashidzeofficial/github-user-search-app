import React, { useState } from 'react';
import './App.css';
import './component/styles.css';
import Header from './component/Header';
import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';
import searchIcon from './images/icon-search.svg';

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("LIGHT");

  const handleTheme = () => {
    setTheme(theme === "LIGHT" ? "DARK" : "LIGHT");

    console.log(theme);
  }

  const handleSubmission = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
    console.log(input);
  }

  const handleChange = (e: any) => {
    setInput(e.target.value);

  };
  return (
    <form className={`wrapper ${theme === 'DARK' ? 'dark-theme' : 'light-theme'}`} onSubmit={handleSubmission}>
      <div className="header-group">
        <span className={`header-txt ${theme === 'LIGHT' ? 'black-theme' : 'white-theme'}`} >devfinder</span>
        <div className="contrast-light">
          {theme === 'DARK' ? (
            <button className="them" onClick={handleTheme}>
              <span className="light">LIGHT</span>
              <img src={sun} alt="sun-light" className="sun-light" />
            </button>
          )
            : (
              <button className='them' onClick={handleTheme}>
                <span className="light">DARK</span>
                <img src={moon} alt="moon-light" className="moon-light" />
              </button>
            )}

        </div>
      </div>
      <div className="input-group">
        <div className={`input-graph ${theme === 'LIGHT' ? 'light-theme' : 'dark-theme'}`}>
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
