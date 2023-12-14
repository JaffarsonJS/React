import React from 'react'
import Navbar from './Navbar'
import homeStyle from "../CSS/style.module.css"
import logo from "../Assets/1154566.jpg"
import About from './About'

function Home() {
  return (
    <div>
      <Navbar/>

      <div className={homeStyle.homeDiv}>
        <div className={homeStyle.homwInnerDiv}>
        <h3>Hello I'm</h3>
        <h1>Jaffarson</h1>
        <p className={homeStyle.pTitle}>As a Front End Developer</p>
        <p className={homeStyle.ppara}>Specializing in creating dynamic websites and modern web applications using JavaScript and ReactJs. With expertise in design software such as Figma and Adobe XD, I thrive on collaboration and effective communication with designers, backend developers, and project managers. My focus is on writing clean and efficient code to ensure optimal performance. I am committed to continuous learning to incorporate the latest trends and advancements into my work.</p>
        <button>Contact Me</button>
        </div>  

        <div className={homeStyle.imgDiv}>
          <img src={logo} style={{width:"400px"}} alt="" />
        </div>
      </div>

      <About/>
      

    </div>
  )
}

export default Home
