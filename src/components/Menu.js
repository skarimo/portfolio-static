import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
      <div>
      <Link to={`/home`}>Home</Link>
      <Link to={`/projects`}>Projects</Link>
      <Link to={`/contact`}>Contact</Link>
      </div>
    )
  }

export default Menu
