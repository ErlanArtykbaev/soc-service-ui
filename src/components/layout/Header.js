import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
	return(
		<div className='header'>
			<nav className='nav'>
				<NavLink to='/home' className='link'>home</NavLink>
				<NavLink to='/team' className='link'>team and management</NavLink>
				<NavLink to='/projects' className='link'>projects</NavLink>
				<NavLink to='/blog' className='link'>news and blog</NavLink>
				<NavLink to='/career' className='link'>career</NavLink>
				<NavLink to='/about' className='link'>about</NavLink>
				<NavLink to='/contactus' className='link'>contact us</NavLink>
			</nav>
		</div>
	)
}

export default Header
