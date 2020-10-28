import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from '../../store/actions/languageAction';

import insta from '../../assets/img/socIcons/iconmonstr-instagram-11.svg'
import linked from '../../assets/img/socIcons/iconmonstr-linkedin-3.svg'
import twitter from '../../assets/img/socIcons/iconmonstr-twitter-1.svg'
import facebook from '../../assets/img/socIcons/iconmonstr-facebook-1.svg'
import ChevronDown from '../../assets/img/ChevronDown.svg'
import {LANGUAGES} from '../../constants';
import {NavLink} from "react-router-dom";



const InfoHeader = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.language.language);

    const [lang, setLang] = useState('ru')
    const {t, i18n} = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const changeToSelectedLanguage = (v) => {
        if (currentLanguage !== v) {
            setLang(v);
            dispatch(changeLanguage(v));
        }
    };



    return (
        <div className="info-header">
            <div className="container">
                <div className='wrap-header'>
                    <div className='texts'>
                        <NavLink to={'/about'}>Pro</NavLink>

                        <span>{t("Address.1")}</span>
                        <span>+996 (312) 432 738</span>
                    </div>
                    <div className='icon-wrap'>
                        <img className='icon' src={linked} alt='linkedin'/>
                        <img className='icon' src={insta} alt='instagram'/>
                        <img className='icon' src={twitter} alt='twitter'/>
                        <img className='icon' src={facebook} alt='facebook'/>
                        <div className="dropdown">
                            <button className="btn " type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className='icon' src={linked} alt='linkedin'/>
                                <img className={'text-white'} src={ChevronDown} alt="Chevron Down"/>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {LANGUAGES.map((v)=>{
                                    return <div key={v} onClick={() => changeToSelectedLanguage(v)} className="dropdown-item">{v}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoHeader
