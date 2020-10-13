import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
	return(
		<div className='header'>
			<nav className='nav'>
				<NavLink to='/home' className='link'/>
				<NavLink to='/team' className='link'/>
				<NavLink to='/projects' className='link'/>
				<NavLink to='/blog' className='link'/>
				<NavLink to='/career' className='link'/>
				<NavLink to='/about' className='link'/>
				<NavLink to='/contactus' className='link'/>
			</nav>
		</div>
	)
}

export default Header
