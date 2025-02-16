import React from 'react'
import "../assets/styles/reset.css"
import "../assets/styles/Headers.css"
import lock from "../assets/images/lock.png"


const Header = () => {
  return (
    <header>
        <h1>minehaux</h1>

        <div className="links">
          <a href="google.com">Home</a>
          <a href="google.com">Featured</a>
          <a href="google.com">Properties</a>
          <a href="google.com">Why us?</a>
          <a href="google.com">Testimonial</a>
          <a href="google.com">Contact</a>
          <div className="logout">
            <img src={lock} alt="" />
            <a href="google.com">Log Out</a>
          </div>
          
        </div>
    </header>
  )
}

export default Header