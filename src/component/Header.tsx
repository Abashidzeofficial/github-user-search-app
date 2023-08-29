import React from 'react'
import profile from '../images/Oval.png';
import locationuser from '../images/icon-location.svg';
import twittericon from '../images/icon-twitter.svg';
import githublink from '../images/icon-website.svg';
import companyicon from '../images/icon-company.svg';
import '../component/styles.css';

interface Headerprops {
  input: string
  setInput: (input: string) => void;
  // setName: (name: string) => void;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  avatar: any;
  name: null | string;
  username: any;
  joined: any;
  bio: string | undefined;
  repos: string;
  follower: string | undefined;
  following: string | undefined;
  location: string | undefined;
  blog: string | undefined;
  company: any | undefined;
  data: any[];
  twitter: string;

}


const Header: React.FC<Headerprops> = ({ input, setInput, theme,
  setTheme,
  avatar,
  name,
  username,
  joined,
  bio,
  repos,
  follower,
  following,
  location,
  blog,
  company,
  data,
  twitter

}) => {
  return (
    <div className={`search-container ${theme === 'LIGHT' ? 'search-bg' : 'input-black'}`}>
      <div className="github-information">
        <a className='profile-img'>
          <img src={avatar} alt="profile-img" className="profile-icon" />
        </a>
        <div className="user-info">
          <div className={`github-name ${theme === 'LIGHT' ? 'black-theme' : 'white-theme'}`}><a>{name}</a></div>
          <div className='github-username'><a>{username}</a></div>
          <div className={`joined ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}><a>{joined}</a></div>
        </div>

      </div>
      <div className="bio">
        <span className={`bio ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>{bio}Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</span>
      </div>
      <div className={`repo-follower ${theme === 'DARK' ? 'dark-theme' : 'light-theme'}`}>
        <div className="repo" >Repos<span className={`repo-number ${theme === 'LIGHT' ? 'black-theme' : 'white-theme'}`}>{repos}</span></div>
        <div className="follower">Followers  <span className={`follower-number ${theme === 'LIGHT' ? 'black-theme' : 'white-theme'}`}>{follower}</span></div>
        <div className="following">Following<span className={`following-number ${theme === 'LIGHT' ? 'black-theme' : 'white-theme'}`}> {following}</span> </div>
      </div>
      <div className="social">
        <div className="address">
          <img src={locationuser} alt="location" className="location" />
          <a className={`location-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}> {location === null || location === "undefined" ? "not available" : location}</a>
        </div>
        <div className="github-link"> <img src={githublink} alt="githublink" className="link-github" />
          <a className={`github-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>{blog === null || blog === "undefined" ? "not available" : blog}</a>
        </div>
        <div className="twitter"><img src={twittericon} alt="" className="twitter-icon" />
          <a className={`twitter-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>{twitter === null || twitter === "undefined" ? "not available" : twitter}</a>
        </div>
        <div className="company"><img src={companyicon} alt="company" className="company-icon" />
          <a className={`company-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>{company === null || company === "undefined" ? "not available" : company}</a>
        </div>
      </div>
    </div >
  )
}

export default Header