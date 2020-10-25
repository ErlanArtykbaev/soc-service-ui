import React from 'react'
import {NavLink} from 'react-router-dom'

import InfoHeader from './InfoHeader'
import logo from '../../assets/img/logo.png'

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
      <div className="menu">
				<div className='left-menu'>
					<NavLink to="/" className="link">
						<img src={logo} alt='logo' className='logo' />
					</NavLink>
				</div>
				<div className='middle-menu'>
					<NavLink to="/" className="link center-link" >
						Главная	
					</NavLink>
					<NavLink to="/projects" className="link center-link" >
						Проекты
					</NavLink>
					<NavLink to="/about" className="link center-link" >
						О Нас
					</NavLink>
					<NavLink to="/blog" className="link center-link" >
						Новости
					</NavLink>
					<NavLink to="/vacancies" className="link center-link" >
						Вакансии
					</NavLink>
					<NavLink to="/contacts" className="link center-link" >
						Контакты
					</NavLink>
				</div>
				<div className='rigth-menu'>
					<NavLink to="/contactUs" className="link cont">
						Консультация
					</NavLink>
				</div>
      </div>
    </div>
  )
}

export default Header
