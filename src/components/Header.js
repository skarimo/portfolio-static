import React from 'react'
import { Link } from 'react-router-dom'

import gitHubIcon from './icons/github-icon.png'
import linkedInIcon from './icons/linkedin-icon.png'
import mediumIcon from './icons/medium-icon.png'

const Header = (props) => {
  const linkedInLink = "https://www.linkedin.com/in/sherzod-karimov-869625160/"
  const gitHubLink = "https://github.com/skarimo"
  const mediumLink = "https://medium.com/@karimovj"

    return (
      <header id='header'>
        <h1>SHERZOD</h1>
          <nav className='main-menu'>
            <Link to={`/`}>Home</Link>
            <Link to={`/projects`}>Projects</Link>
            <Link to={`/contact`}>Contact</Link>
          </nav>

          <div class="sidenav">
            <a href={linkedInLink}><img className="social-logo" src={linkedInIcon} alt="linkedin-logo"/></a>
            <a href={mediumLink}><img className="social-logo" src={mediumIcon} alt="medium-logo"/></a>
            <a href={gitHubLink}><img className="social-logo" src={gitHubIcon} alt="github-logo"/></a>
          </div>
      </header>
    )
  }

export default Header
