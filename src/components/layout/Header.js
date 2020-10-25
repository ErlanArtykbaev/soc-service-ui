import React from 'react'
import {NavLink} from 'react-router-dom'

import InfoHeader from './InfoHeader'

const Header = () => {
  // document.scroll(() => {
  //     if (document.scrollTop() > 50) {
  //         console.log('qwe')
  //         document.getElementsByClassName('MainHeader').classList.add("header-scrolled");
  //     } else {
  //         document.getElementsByClassName('MainHeader').classList.remove("header-scrolled");
  //         console.log('qweqdwqwd')
  //     }
  // })

  window.onscroll = function() {
    myFunction()
  }

  function myFunction() {
    const header = document.getElementById('header')
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.classList.add('headerScrolled')
    } else {
      header.classList.remove('headerScrolled')
    }
  }

  return (
    <div id={'header'} className={'header position-fixed w-100'}>
      <InfoHeader />
      <nav className="container navbar navbar-expand-lg navbar-light bg-light bg-transparent">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/team" className="nav-link ">
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link ">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link ">
                News And Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/career" className="nav-link ">
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link ">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
