import React, { useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem)
    setIsMobileMenuOpen(false) // Close mobile menu on click
  }

  return (
    <div className='navbar'>
      {/* Mobile menu open icon */}
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-icon"
        onClick={toggleMenu}
      />

      <div className="navbar-logo">
        <h1 className="nav-logo">Prince Kumar</h1>
        <img className="nav-img" src={theme_pattern} alt="Pattern" />
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
        {/* Close icon inside mobile menu */}
        <img
          src={menu_close}
          alt="Close Menu"
          className='nav-mob-close'
          onClick={toggleMenu}
        />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => handleMenuClick("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
