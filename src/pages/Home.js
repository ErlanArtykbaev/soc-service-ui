import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return(
    <div className='home'>
			
      <NavLink to='/admin'>admin</NavLink>
    </div>
  )
}

export default Home
