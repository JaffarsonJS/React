import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({navName,navLinks,cssStyle}) {
  return (
    <div className={cssStyle}>
        <Link to={navLinks.url1}>{navName.key1}</Link>
        <Link to={navLinks.url2}>{navName.key2}</Link>
        <Link to={navLinks.url3}>{navName.key3}</Link>
        <Link to={navLinks.url4}>{navName.key4}</Link>
        {
            navName.key5 && <Link to={navLinks.url5}>{navName.key5}</Link>
        }
    </div>
  )
}

export default Navbar
