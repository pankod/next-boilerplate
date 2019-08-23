import * as i18n from 'i18next';

i18n
	.init({
		debug: false,
		fallbackLng: 'en',
		resources: {
			en: {},
			es: {},
			tr: {}
	 	},
		saveMissing: false,

		interpolation: {
			escapeValue: false // not needed for react!!
		},

		// react i18next special options (optional)
		react: {
			nsMode: 'fallback', // set it to fallback to let passed namespaces to translated hoc act as fallbacks
			wait: false
		}
	});

export default i18n;
