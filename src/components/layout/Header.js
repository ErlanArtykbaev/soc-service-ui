import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from "../UI/Button/Button";
import $ from 'jquery'
import InfoHeader from './InfoHeader'
import logo from '../../assets/img/logo.png'

const Header = () => {
    $(document).ready(function() {
        $(document).scroll(() => {
            if ($(document).scrollTop() > 50) {
                $('.header').addClass("header-scrolled");
            } else {
                $('.header').removeClass("header-scrolled");
            }
        });
        $(window).resize(function(){
            if ($(window).width() >= 980){
                $(".navbar .dropdown-toggle").hover(function () {
                    $(this).parent().toggleClass("show");
                    $(this).parent().find(".dropdown-menu").toggleClass("show");
                });
                $( ".navbar .dropdown-menu" ).mouseleave(function() {
                    $(this).removeClass("show");
                });
            }
        });
    });


    return (
        // <div className={'header'}>
        //     <nav className="navbar navbar-expand-lg container justify-content-between">
        //         <NavLink className="navbar-brand" to="#">LOGO</NavLink>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse"
        //                 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //                 aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //
        //
        //         <div className="collapse navbar-collapse col-md-9" id="navbarSupportedContent">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link px-18" to="#">Link</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link px-18" to="#">Link</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link px-18" to="#">Link</NavLink>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <NavLink className="nav-link dropdown-toggle px-18" to="#" id="navbarDropdown" role="button"
        //                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                         Dropdown
        //                     </NavLink>
        //                     <div className="dropdown-menu px-18" aria-labelledby="navbarDropdown">
        //                         <div>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                             <h1>qwdqwqwd</h1>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item dropdown px-18">
        //                     <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
        //                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                         Dropdown
        //                     </NavLink>
        //                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <NavLink className="dropdown-item" to="#">Action</NavLink>
        //                         <NavLink className="dropdown-item" to="#">Another action</NavLink>
        //                         <div className="dropdown-divider"></div>
        //                         <NavLink className="dropdown-item" to="#">Something else here</NavLink>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
        //                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                         Dropdown
        //                     </NavLink>
        //                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <NavLink className="dropdown-item" to="#">Action</NavLink>
        //                         <NavLink className="dropdown-item" to="#">Another action</NavLink>
        //                         <div className="dropdown-divider"></div>
        //                         <NavLink className="dropdown-item" to="#">Something else here</NavLink>
        //                     </div>
        //                 </li>
        //             </ul>
        //             <Button>qweqw</Button>
        //         </div>
        //
        //
        //{/*    </nav>*/}
        //{/*</div>*/}

// <div id={'header'} className={'header position-fixed w-100'}>
        // <InfoHeader/>
        // <div className="container">
        // <div className="menu">
        // <div className='left-menu'>
        // <NavLink to="/" className="link">
        // <img src={logo} alt='logo' className='logo'/>
        // </NavLink>
        // </div>
        // <div className='middle-menu'>
        // <NavLink to="/" className="link center-link">
        // Главная
        // </NavLink>
        // <NavLink to="/projects" className="link center-link">
        // Проекты
        // </NavLink>
        // <NavLink to="/about" className="link center-link">
        // О Нас
        // </NavLink>
        // <NavLink to="/blog" className="link center-link">
        // Новости
        // </NavLink>
        // <NavLink to="/vacancies" className="link center-link">
        // Вакансии
        // </NavLink>
        // <NavLink to="/contacts" className="link center-link">
        // Контакты
        // </NavLink>
        // </div>
        // <div className='rigth-menu'>
        // <NavLink to="/contactUs" className="link cont">
        // Консультация
        // </NavLink>
        //{/*            </div>*/}
        //{/*        </div>*/}
        //{/*    </div>*/}
        //{/*</div>*/}


        <div className={'header'}>
            <nav className="navbar navbar-expand-lg container justify-content-between">
                <NavLink className="navbar-brand px-18" to="#">Mega Dropdown</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse col-md-9 px-18" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Category</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category 1
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span className="text-uppercase text-white">Category 1</span>
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
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category 2
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span className="text-uppercase text-white">Category 2</span>
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
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category 3
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                    <Button>qweqw</Button>
                </div>


            </nav>

        </div>
    );
};

export default Header
