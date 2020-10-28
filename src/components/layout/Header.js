import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from "../UI/Button/Button";
import $ from 'jquery'
import InfoHeader from './InfoHeader'
import logo from '../../assets/img/logo.png'

const Header = () => {
    $(document).ready(function () {
        $(document).scroll(() => {
            if ($(document).scrollTop() > 50) {
                $('.header').addClass("header-scrolled");
            } else {
                $('.header').removeClass("header-scrolled");
            }
        });
        $(window).resize(function () {
            if ($(window).width() >= 980) {
                $(".navbar .dropdown-toggle").hover(function () {
                    $(this).parent().toggleClass("show");
                    $(this).parent().find(".dropdown-menu").toggleClass("show");
                });
                $(".navbar .dropdown-menu").mouseleave(function () {
                    $(this).removeClass("show");
                });
            }
        });
    });


    return (

        <div className={'header shadow'}>
            <nav className="navbar navbar-expand-lg container justify-content-between">
                <NavLink to="/" className="navbar-brand px-18">
                    <img src={logo} alt='logo' className='logo'/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-md-9 px-18" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/"  className="nav-link" id="navbarDropdown" role="button"
                                     aria-haspopup="true" aria-expanded="false">
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">

                            <NavLink to="/projects"  className="nav-link" id="navbarDropdown" role="button"
                                     aria-haspopup="true" aria-expanded="false">
                                Проекты
                            </NavLink>
                            <div className="dropdown-menu p-2 border-0 shadow-lg" aria-labelledby="navbarDropdown">

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span className="text-uppercase text-white">Category 1</span>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <NavLink to={'/projects'} className="nav-link">
                                                        projects
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <NavLink to="">
                                                <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt=""
                                                     className="img-fluid"/>
                                            </NavLink>
                                            <p className="text-white">Short image call to action</p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/about"  className="nav-link" id="navbarDropdown" role="button"
                                 aria-haspopup="true" aria-expanded="false">
                                О нас
                            </NavLink>
                            <div className="dropdown-menu p-2 border-0 shadow-lg" aria-labelledby="navbarDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span className="text-uppercase text-white">Category 2</span>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <NavLink to="/about" >
                                                        О нас
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <NavLink to="">
                                                <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt=""
                                                     className="img-fluid"/>
                                            </NavLink>
                                            <p className="text-white">Short image call to action</p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/news"  className="nav-link" id="navbarDropdown" role="button"
                                     aria-haspopup="true" aria-expanded="false">
                                Новости
                            </NavLink>
                            <div className="dropdown-menu p-2 border-0 shadow-lg" aria-labelledby="navbarDropdown">
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span className="text-uppercase text-white">Category 3</span>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Link item</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">

                                            <a href="">
                                                <img src="https://dummyimage.com/200x100/ccc/000&text=image+link" alt=""
                                                     className="img-fluid"/>
                                            </a>
                                            <p className="text-white">Short image call to action</p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </li>

                    </ul>
                    <Button>Консультация</Button>
                </div>


            </nav>

        </div>
    );
};

export default Header
