import React, {useEffect, useState} from 'react'

import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from '../../store/actions/languageAction';

import insta from '../../assets/img/socIcons/iconmonstr-instagram-11.svg'
import linked from '../../assets/img/socIcons/iconmonstr-linkedin-3.svg'
import twitter from '../../assets/img/socIcons/iconmonstr-twitter-1.svg'
import facebook from '../../assets/img/socIcons/iconmonstr-facebook-1.svg'


const InfoHeader = () => {
    const dispatch = useDispatch();
    const language = useSelector(state => state.language.language);


    const [lang, setLang] = useState('ru')
    const {t, i18n} = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const qwe = (v) => {
        dispatch(changeLanguage(v));
    };

    return (
        <div className="info-header">
            <div className="container">
                <div className='wrap-header'>
                    <div className='texts'>
                        <span>{t("Address.1")}</span>
                        <span>+996 (312) 432 738</span>
                    </div>
                    <div className='icon-wrap'>
                        <img className='icon' src={linked} alt='linkedin'/>
                        <img className='icon' src={insta} alt='instagram'/>
                        <img className='icon' src={twitter} alt='twitter'/>
                        <img className='icon' src={facebook} alt='facebook'/>
                        <select className='lang-select' onChange={(e) => {
                            let targetValue = e.target.value;
                            switch (targetValue) {
                                case 'ru':
                                    qwe(targetValue);
                                    break;
                                case 'en':
                                    qwe(targetValue);
                                    break;
                                case 'kg':
                                    qwe(targetValue);
                                    break;
                                default:
                                    break;
                            }
                            return setLang(targetValue);
                        }}>
                            <option value='ru' defaultChecked={true}>
                                рус
                            </option>
                            <option value="en">
                                eng
                            </option>
                            <option value="kg">
                                кыр
                            </option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoHeader
