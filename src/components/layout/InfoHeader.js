import React from 'react'

import {useTranslation} from 'react-i18next'
import Select from 'react-select'

import insta from '../../assets/img/socIcons/iconmonstr-instagram-11.svg'
import linked from '../../assets/img/socIcons/iconmonstr-linkedin-3.svg'
import twitter from '../../assets/img/socIcons/iconmonstr-twitter-1.svg'
import facebook from '../../assets/img/socIcons/iconmonstr-facebook-1.svg'

import engLang from '../../assets/img/lang/united-states-of-america-flag-icon-64.png'
import kgLang from '../../assets/img/lang/kyrgyzstan-flag-icon-64.png'
import ruLang from '../../assets/img/lang/russia-flag-icon-64.png'


const InfoHeader = () => {

	//const {t, i18next} = useTranslation()

	const handleOption = (lang) => {
		//i18next.changeLanguage(lang)
	}

	const langs = [
		{
			value: 'ru', label: <img src={ruLang} alt='ru lang' className='lang-select' /> 
		},
		{
			value: 'en', label: <img src={engLang} alt='en lang' className='lang-select' /> 
		},
		{
			value: 'kg', label: <img src={kgLang} alt='kg lang' className='lang-select' /> 
		}
	]

	const selectStyle = {
		option: (provided, state) => ({
			...provided,
			backgroundColor: 'transparent' 
		})
	}

  return (
    <div className="info-header">
			<div className='wrap-header'>
				<div className='texts'>
					<span>ул. Исанова 42, Бишкек, Кыргызстан</span>
					<span>+996 (312) 432 738</span>
				</div>
				<div className='icon-wrap'>
					<img className='icon' src={linked} alt='linkedin' />
					<img className='icon' src={insta} alt='instagram' />
					<img className='icon' src={twitter} alt='twitter' />
					<img className='icon' src={facebook} alt='facebook' />
					<Select
						name='lang'
						options={langs}
						styles={selectStyle}
						defaultValue={langs[0]}
					/>
				</div>
			</div>
    </div>
  )
}

export default InfoHeader
