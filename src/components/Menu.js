import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
      <header>
        <Link to={`/home`}>Home</Link>
        <Link to={`/projects`}>Projects</Link>
        <Link to={`/contact`}>Contact</Link>
      </header>
    )
  }

export default Menu
