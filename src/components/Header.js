import React from 'react'
import { Link } from 'react-router-dom'

import gitHubIcon from './icons/github-icon.png'
import linkedInIcon from './icons/linkedin-icon.png'
import mediumIcon from './icons/medium-icon.png'

const Header = (props) => {
    return (
      <header id='header'>
        <h1>Sherzod</h1>
          <nav className='main-menu'>
            <Link to={`/`}>Home</Link>
            <Link to={`/projects`}>Projects</Link>
            <Link to={`/contact`}>Contact</Link>
          </nav>

          <div class="sidenav">
            <img className="social-logo" src={linkedInIcon} alt="linkedin-logo"/>
            <img className="social-logo" src={mediumIcon} alt="medium-logo"/>
            <img className="social-logo" src={gitHubIcon} alt="github-logo"/>
          </div>
      </header>
    )
  }

export default Header
