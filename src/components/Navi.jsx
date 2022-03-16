import React from "react"
import { Link } from "react-scroll";
import { useState } from "react";


export const Navi = (props) => {
  const [show, setShow] = useState(false);
  const handleNavClick = () => {
    setShow(false);
  };
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            onClick={() => setShow(!show)}
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand page-scroll nav-header' href='#top'>
            Zfit
          </a>
        </div>

        <div
          className={`collapse navbar-collapse  ${show ? "show" : ""}`}
        id="navbarCollapse"
        >
          <ul className='nav navbar-nav navbar-right aligntest'>
            <li>
              <Link
                onClick={handleNavClick}
                className='nav-link'
                to='about'
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                >ABOUT
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavClick}
                className='nav-link'
                to='team'
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                >TEAM
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavClick}
                className='nav-link'
                to='services'
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                >SERVICES
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavClick}
                className='nav-link'
                to='gallery'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >GALLERY
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavClick}
                className='nav-link'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
