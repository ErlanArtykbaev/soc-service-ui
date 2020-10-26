import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import insta from '../../assets/img/socIcons/iconmonstr-instagram-11.svg';
import linked from '../../assets/img/socIcons/iconmonstr-linkedin-3.svg';
import twitter from '../../assets/img/socIcons/iconmonstr-twitter-1.svg';
import facebook from '../../assets/img/socIcons/iconmonstr-facebook-1.svg';
import English from '../../assets/img/english.png';
import MainLogo from '../../assets/img/logo_white.svg';

const Footer = () => {
    const [input, setInput] = useState('');

    return (
        <footer className="footer">
            <div className={'container'}>
                <div className={'row py-5'}>
                    <div className="col-sm-12 col-md-4 col-lg-2 d-flex flex-column align-items-start flex-wrap">
                        <NavLink to={'/'} className={'footer_white'}>
                            <img src={MainLogo} alt=""/>
                        </NavLink>
                        <p className={'m-0 px-10'}>© Соцсервис 2020</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 d-flex flex-column align-items-start flex-wrap px-14">
                        <NavLink to={'/'} className={'footer_white'}>
                            О ГП Соцсервис
                        </NavLink>
                        <NavLink to={'/'} className={'footer_white'}>
                            Contact
                        </NavLink>
                        <NavLink to={'/'} className={'footer_white'}>
                            Terms & Conditions
                        </NavLink>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 d-flex flex-column align-items-start flex-wrap px-14">
                        <NavLink to={'/'} className={'footer_white'}>
              <span>
                  <img src={facebook} className={'footer_icons'} alt=""/>
              Facebook
              </span>
                        </NavLink>
                        <NavLink to={'/'} className={'footer_white'}>
                            <span>
                  <img src={twitter} className={'footer_icons'} alt=""/>
              Twitter
              </span>
                        </NavLink>
                        <NavLink to={'/'} className={'footer_white'}>
                            <span>
                  <img src={insta} className={'footer_icons'} alt=""/>
              Instagram
              </span>
                        </NavLink>
                        <NavLink to={'/'} className={'footer_white'}>
                            <span>
                  <img src={linked} className={'footer_icons'} alt=""/>
              LinkedIn
              </span>
                        </NavLink>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3 d-flex flex-column align-items-start flex-wrap px-14">
                        <p className={'m-0'}>Подпишитесь на наши новости</p>
                        <br/>
                        <div className="form-group">
                            <input className="form-field px-12 fw-400" type="email" placeholder="Email Адрес"/>
                            <span className={'footer_fieldLabel'}>OK</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3 d-flex flex-column align-items-end flex-wrap fw-300 px-12">
                        <p className={'m-0'}>Исанова 87, 2 этаж, Бишкек, Кыргызстан</p>
                        <p className={'m-0'}> +996 (505) 521 125</p>
                        <p className={'m-0'}> socservice@mail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
