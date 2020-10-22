import React from 'react'
import {NavLink} from 'react-router-dom'
import MainHeader from "../Home/MainHeader";

const Header = () => {
    return (
        <>
            <nav className="container navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/' className='link'>Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink to='/' className='nav-link '>Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to='/team' className='nav-link '>Team </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/projects' className='nav-link '>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/blog' className='nav-link '>News And Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/career' className='nav-link '>Career</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='nav-link '>About</NavLink>
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                        {/*       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                        {/*        Dropdown*/}
                        {/*    </a>*/}
                        {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*        <a className="dropdown-item" href="#">Action</a>*/}
                        {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                        {/*        <div className="dropdown-divider"></div>*/}
                        {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
            <MainHeader/>
        </>
    )
}

export default Header
