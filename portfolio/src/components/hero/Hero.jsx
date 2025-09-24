import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div>
      <div id='home' className="hero">
        <img src={profile_img} alt="Profile" />
        <h1><span>I' am Prince Kumar,</span> FullStack Developer based in India</h1>
        <p>Hi, I’m Prince Kumar, a Full Stack Developer and Graduate B.Tech CSE student (2025). I build responsive, user-friendly web applications using React.js, Node.js, Express, and MongoDB. I love solving real-world problems through code and constantly learning new technologies.</p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with Me
            </AnchorLink>
          </div>
           <div className="hero-resume">
            <a
              href="https://drive.google.com/file/d/15daYw6RqrOGMKqQ8ZsiY6cvPw7HNg92R/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-link"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
