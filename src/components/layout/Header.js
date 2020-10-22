import React from 'react'
import {NavLink} from 'react-router-dom'

import bisness from '../../assets/img/bisness.svg'

const Header = () => {
	return(
		<div className='header'>
			<div className='menu'>
				<div className='logo'>
					<NavLink to='/' className='link'>home</NavLink>
				</div>
				<div className='links-pages'>
					<NavLink to='/team' className='link'>team and management</NavLink>
					<NavLink to='/projects' className='link'>projects</NavLink>
					<NavLink to='/blog' className='link'>news and blog</NavLink>
					<NavLink to='/career' className='link'>career</NavLink>
					<NavLink to='/about' className='link'>about</NavLink>
				</div>
				<div className='contact'>
					<NavLink to='/contactus' className='link'>contact us</NavLink>
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
				<div className='trusted-companies'>

				</div>
			</div>
		</div>
	)
}

export default Header
