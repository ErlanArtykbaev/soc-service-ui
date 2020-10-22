import React from 'react'
import {NavLink} from 'react-router-dom'

import bisness from '../../assets/img/bisness.svg'

const Header = () => {
	return(
		<div className='header'>
			<div className='menu'>
				<div className='logo'>
					<NavLink to='/' className='link'>Home</NavLink>
				</div>
				<div className='links-pages'>
					<NavLink to='/team' className='link'>Team </NavLink>
					<NavLink to='/projects' className='link'>Projects</NavLink>
					<NavLink to='/blog' className='link'>News And Blog</NavLink>
					<NavLink to='/career' className='link'>Career</NavLink>
					<NavLink to='/about' className='link'>About</NavLink>
				</div>
				<div className='contact'>
					<NavLink to='/contactus' className='link'>Contact Us</NavLink>
				</div>
			</div>
			<div className='header-content'>
				<div className='first-impression'>
					<div className='texts'>
						<h1>
							Join the New Era of Secure Digital Identities and Business Communications
						</h1>
						<p>
							Our unique platform is developed to facilitate all your business processes 
							with the highest security standards. 
						</p>
						<div className='btn-journey-start'>
							journey starts here
						</div>
					</div>
					<div className='gif-box'>
						<img className='gif' src={bisness} alt='like' />
					</div>
				</div>
				<div className='trusted-companies-box'>
					<h4>Trusted by more than 3,000 companies </h4>
					<div className='trusted-companies'>
						<div className='company'>
							company
						</div>
						<div className='company'>
							companies
						</div>
						<div className='company'>
							company
						</div>
						<div className='company'>
							company
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
