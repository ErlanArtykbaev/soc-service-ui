import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  const [input, setInput] = useState('');

  return (
    <footer className="footer">
      <div className={'container'}>
        <div className={'row py-5'}>
          <div className="col-sm-12 col-md-2 d-flex flex-column align-items-start flex-wrap">
            <NavLink to={'/'} className={'footer_white'}>
              ЛОГО
            </NavLink>
            <p className={'m-0 px-10'}>© Соцсервис 2020</p>
          </div>
          <div className="col-sm-12 col-md-2 d-flex flex-column align-items-start flex-wrap px-14">
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
          <div className="col-sm-12 col-md-2 d-flex flex-column align-items-start flex-wrap px-14">
            <NavLink to={'/'} className={'footer_white'}>
              Facebook
            </NavLink>
            <NavLink to={'/'} className={'footer_white'}>
              Twitter
            </NavLink>
            <NavLink to={'/'} className={'footer_white'}>
              Instagram
            </NavLink>
            <NavLink to={'/'} className={'footer_white'}>
              LinkedIn
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-3 d-flex flex-column align-items-start flex-wrap px-14">
            <p className={'m-0'}>Подпишитесь на наши новости</p>
            <div className="form-group">
              <input className="form-field" type="email" placeholder="Email"/>
                <span>@gmail.com</span>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 d-flex flex-column align-items-end flex-wrap fw-300 px-12">
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
