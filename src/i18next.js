import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const Languages = ['en', 'ru', 'kg']

i18next
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: true,
		whitelist: Languages,

		interpolation:{
			escapeValue: false
		}
	})

export default i18next
