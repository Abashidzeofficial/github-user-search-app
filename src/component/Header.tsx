import React from 'react'
import profile from '../images/Oval.png';
import location from '../images/icon-location.svg';
import twitter from '../images/icon-twitter.svg';
import githublink from '../images/icon-website.svg';
import company from '../images/icon-company.svg';
import '../component/styles.css';

interface Headerprops {
  input: string
  setInput: (input: string) => void;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Headerprops> = ({ input, setInput, theme, setTheme }) => {
  return (
    <div className={`search-container ${theme === 'LIGHT' ? 'search-bg' : 'input-black'}`}>
      <div className="github-information">
        <a className='profile-img'>
          <img src={profile} alt="profile-img" className="profile-icon" />
        </a>
        <div className="user-info">
          <div className={`github-name ${theme === 'LIGHT' ? 'black-theme' : 'white-theme'}`}><a>Giorgi abashidze</a></div>
          <div className='github-username'><a>@abashidzeoffcial</a></div>
          <div className={`joined ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}><a>joined</a></div>
        </div>
      </div>
      <div className="bio">
        <span className={`bio ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</span>
      </div>
      <div className="repo-follower">
        <div className="repo">Repos <span className='repo-number'>5</span></div>
        <div className="follower">Followers <span className='follower-number'>345</span></div>
        <div className="following">Following<span className='following-number'>2</span> </div>
      </div>
      <div className="social">
        <div className="address">
          <img src={location} alt="location" className="location" />
          <a className={`location-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>San Francisco</a>
        </div>
        <div className="github-link"> <img src={githublink} alt="githublink" className="link-github" />
          <a className={`github-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>github.com</a>
        </div>
        <div className="twitter"><img src={twitter} alt="" className="twitter-icon" />
          <a className={`twitter-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>@abashidze</a>
        </div>
        <div className="company"><img src={company} alt="company" className="company-icon" />
          <a className={`company-user ${theme === 'LIGHT' ? 'light-info' : 'dark-info'}`}>@dials</a>
        </div>
      </div>
    </div >
  )
}

export default Header