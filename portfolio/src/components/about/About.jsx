import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/About-img.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_img} alt="About" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m a MERN Stack Developer with experience in building web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy creating websites and apps that are fast, user-friendly, and work well on all devices. From designing the front-end to building the back-end and connecting everything with a database, I like working on every part of a project.</p>
            <p>I’m always learning new tools and technologies to improve my skills. I’ve worked on projects like login systems, dashboards, and e-commerce sites. I enjoy solving problems, writing clean code, and working with others to build useful and creative web applications.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>React.js</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Node.js</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Express.js</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>C++</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "40%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
