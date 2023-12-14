import React from 'react'
import navStyles from "../CSS/style.module.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className={navStyles.navDiv}>
      <h1 className='styleFont'>Jaffarson</h1> 
           
        <ul className={navStyles.navListStyle}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
