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

  //github user api

  // let api = "https://api.github.com/users/Abashidzeofficial";


  //get users information
  const [data, setData] = useState<any[]>([]);
  const [avatar, setAvatar] = useState<null | string>()
  const [name, setName] = useState<null | string>()
  const [username, setUsername] = useState()
  const [joined, setJoined] = useState<string>()
  const [bio, setBio] = useState<string>()
  const [repo, setRepo] = useState<string>()
  const [follower, setFollower] = useState<string>()
  const [following, setFollowing] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [blog, setBlog] = useState<string>()
  const [twitter, setTwitter] = useState<string>()
  const [company, setCompany] = useState<string>()

  //convert users
  const fetchUsers = async () => {
    let response = await fetch("https://api.github.com/users/octocat");
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    setData(data);
    setAvatar(data.avatar_url);
    setName(data.name);
    console.log(data.name);
    setUsername(data.login);
    setJoined(data.created_at);
    setBio(data.bio);
    setRepo(data.repos_url);
    setFollower(data.followers_url);
    setFollowing(data.following_url);
    setLocation(data.location);
    setBlog(data.blog);
    setTwitter(data.twitter_username);
    setCompany(data.company);
    console.log(avatar, name, location);
  }

  console.log(avatar, name, location);
  // fetchUsers()



  const handleTheme = () => {
    setTheme(theme === "LIGHT" ? "DARK" : "LIGHT");
    console.log(theme);
  }

  // const handleSubmission = (e: React.ChangeEvent<HTMLFormElement>) => {

  //   e.preventDefault();
  //   fetchUsers()
  //   setInput("");

  //   // console.log(input);
  // }

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
      <div className="input-group">
        <div className="input-graph">
          <input
            type="text"
            className={`input-txt ${theme === 'LIGHT' ? 'white-theme' : 'input-black'}`}
            placeholder="Search GitHub users..."
            value={input}
            onChange={handleChange}
          >
          </input>

        </div>
        <button className="search-btn" disabled={!input} onClick={fetchUsers} >Search </button>
        <img src={searchIcon} alt="searchIcon" className="search-icon" />
      </div>
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
          repo={repo}
          follower={follower}
          following={follower}
          location={location}
          blog={blog}
          company={company}

        />
      </div>
    </div>
  );
}

export default App;
