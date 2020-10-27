import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const Languages = ['en', 'ru', 'kg']

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: false,
		whitelist: Languages,

		interpolation: {
			escapeValue: false
		}
	}).then(r => {return r})

export default i18n