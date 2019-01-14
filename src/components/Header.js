import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
      <header>
        <h1>Sherzod Karimov</h1>
          <nav className='menu'>
            <Link to={`/`}>Home</Link>
            <Link to={`/projects`}>Projects</Link>
            <Link to={`/contact`}>Contact</Link>
          </nav>
      </header>
    )
  }

export default Header
