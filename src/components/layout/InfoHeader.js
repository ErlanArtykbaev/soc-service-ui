import React from 'react'

import {useTranslation} from 'react-i18next'

import insta from '../../assets/img/socIcons/iconmonstr-instagram-11.svg'
import linked from '../../assets/img/socIcons/iconmonstr-linkedin-3.svg'
import twitter from '../../assets/img/socIcons/iconmonstr-twitter-1.svg'
import facebook from '../../assets/img/socIcons/iconmonstr-facebook-1.svg'


const InfoHeader = () => {

	const {t, i18n} = useTranslation()

	const handleOption = async (lang) => {
		await i18n.changeLanguage(lang)
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
					<select className='lang-select' onChange={(e) => handleOption(e.target.value)}>
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
  )
}

export default InfoHeader
