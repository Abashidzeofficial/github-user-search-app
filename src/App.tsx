import React, { useState } from 'react';
import './App.css';
import './component/styles.css';
import Header from './component/Header';
import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';
import searchIcon from './images/icon-search.svg';

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(
    // window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"    //rodesac windowsze defaultad gvaqvs darki avtomaturad daayenebs darks da piriqit laits
    "LIGHT"
  );
  const [value, setValue] = useState("Abashidzeofficial");
  const [show, setShow] = useState(false);

  //github user api

  let api = "https://api.github.com/users/" + input;


  //get users information
  const [data, setData] = useState<any[]>([]);
  const [avatar, setAvatar] = useState<any>()
  const [name, setName] = useState<any>()
  const [username, setUsername] = useState()
  const [joined, setJoined] = useState<string>()
  const [bio, setBio] = useState<string>()
  const [repos, setRepos] = useState<any>()
  const [follower, setFollower] = useState<string>()
  const [following, setFollowing] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [blog, setBlog] = useState<string>()
  const [twitter, setTwitter] = useState<any>()
  const [company, setCompany] = useState<string>()



  //convert users
  const fetchUsers = async () => {
    let response = await fetch(api);
    let data = await response.json();
    setData(data);
    setAvatar(data.avatar_url);
    setName(data.name);
    setUsername(data.login);
    setJoined(data.created_at);
    setBio(data.bio);
    setRepos(data.public_repos.toString());
    setFollower(data.followers);
    setFollowing(data.following);
    setLocation(data.location);
    setBlog(data.blog);
    setTwitter(data.twitter_username);
    setCompany(data.company);
  }


  // fetchUsers()



  const handleTheme = () => {
    setTheme(theme === "LIGHT" ? "DARK" : "LIGHT");
  }

  const handleSubmission = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");

  }

  const handleChange = (e: any) => {
    setInput(e.target.value);

  };
  return (
    <div className={`wrapper ${theme === 'DARK' ? 'dark-theme' : 'light-theme'}`} >
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
              <button className='them' onClick={handleTheme} >
                <span className="light-moon">DARK</span>
                <img src={moon} alt="moon-light" className="moon-light" />
              </button>
            )}

        </div>
      </div>
      <form className="input-group" onSubmit={handleSubmission}>
        <div className="input-graph" >
          <input
            type="text"
            className={`input-txt ${theme === 'LIGHT' ? 'white-theme' : 'input-black'}`}
            placeholder="Search GitHub username..."
            value={input}
            onChange={handleChange}
          >
          </input>

        </div>
        <button className="search-btn" disabled={!input} onClick={fetchUsers} >Search </button>
        <img src={searchIcon} alt="searchIcon" className="search-icon" />
      </form>
      <div className="container">
        <Header
          input={input}
          setInput={setInput}
          theme={theme}
          setTheme={setTheme}
          avatar={avatar}
          name={name}
          username={username}
          joined={joined}
          bio={bio}
          repos={repos}
          follower={follower}
          following={following}
          location={location}
          blog={blog}
          company={company}
          data={data}
          twitter={twitter}
        />

      </div>

    </div>

  );
}


export default App;
