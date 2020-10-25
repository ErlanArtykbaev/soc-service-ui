import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className={'container'}>
                <div className={'row py-5'}>
                    <div className="col-sm-12 col-md-2 d-flex flex-column align-items-start flex-wrap">
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                        <p className={'m-0'}>© Соцсервис 2020</p>
                    </div>
                    <div className="col-sm-12 col-md-2 d-flex flex-column align-items-center flex-wrap">
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                    </div>
                    <div className="col-sm-12 col-md-2 d-flex flex-column align-items-center flex-wrap">
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                        <NavLink to={'/'} className={'footer_white'}>ЛОГО</NavLink>
                    </div>
                    <div className="col-sm-12 col-md-3 d-flex flex-column align-items-start flex-wrap">
                        <p className={'m-0'}>Description</p>
                        <input type="text" value={'Email adress'}/>
                    </div>
                    <div className="col-sm-12 col-md-3 d-flex flex-column align-items-end flex-wrap">
                        <p className={'m-0'}>Description</p>
                        <p className={'m-0'}>Description</p>
                        <p className={'m-0'}>Description</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
