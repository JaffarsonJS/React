import React from 'react'
import abtStyle from "../CSS/style.module.css"
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import image from "../Assets/1199914.png"

function About() {
  return (
    <div className={abtStyle.abtDiv}>
      <h2>About Me</h2>
      <h6>Introductioon</h6>

      <div className={abtStyle.abtInnerDiv}>
        <div className={abtStyle.imgDiv}>
          <img src={image} alt="" />
        </div>
        <div className={abtStyle.abtInfoDetailDiv}>
          <p>Completed My Final Year Of Engineering Focused On Computer Science & Engineering.a passionate and versatile frontend web developer with a strong focus on creating visually stunning and user-friendly websites. With a deep understanding of HTML, CSS, and JavaScript, I have the ability to turn ideas into captivating digital experiences</p>
            <IoMdContact /> Jaffarson
            <FaPhoneAlt/> <a href="">+91 63697 55044</a>
            <IoMail/> <a href="">jaffarson2000@gmail.com</a>
            <button>Resume</button>
        </div>
      </div>
    </div>
  )
}

export default About
