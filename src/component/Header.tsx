import React from 'react'
import profile from '../images/Oval.png';
import location from '../images/icon-location.svg';
import twitter from '../images/icon-twitter.svg';
import githublink from '../images/icon-website.svg';
import company from '../images/icon-company.svg';


function Header() {
  return (
    <div className="search-container">
      <div className="github-information">
        <a className='profile-img'>
          <img src={profile} alt="profile-img" className="profile-icon" />
        </a>
        <div className="user-info">
          <div className='github-name'><a>Giorgi abashidze</a></div>
          <div className='github-username'><a>@abashidzeoffcial</a></div>
          <div className='joined'><a>joined</a></div>
        </div>
      </div>
      <div className="bio">
        <p className='bio'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
      </div>
      <div className="repo-follower">
        <div className="repo">Repos <span className='repo-number'>5</span></div>
        <div className="follower">Followers <span className='follower-number'>345</span></div>
        <div className="following">Following<span className='following-number'>2</span> </div>
      </div>
      <div className="social">
        <div className="address">
          <img src={location} alt="location" className="location" />
          <a className='location-user'>San Francisco</a>
        </div>
        <div className="github-link"> <img src={githublink} alt="githublink" className="link-github" />
          <a className='github-user'>github.com</a>
        </div>
        <div className="twitter"><img src={twitter} alt="" className="twitter-icon" />
          <a className='twitter-user'>@abashidze</a>
        </div>
        <div className="company"><img src={company} alt="company" className="company-icon" />
          <a className='company-user'>@dials</a>
        </div>
      </div>
    </div >
  )
}

export default Header