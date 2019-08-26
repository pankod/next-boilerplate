//#region Global Imports
const i18n = require('i18next');
//#endregion Global Imports

i18n.init({
	debug: false,
	fallbackLng: 'en',
	resources: {
		en: {},
		es: {},
		tr: {},
	},
	saveMissing: false,

	interpolation: {
		escapeValue: false, // not needed for react!!
	},

	// react i18next special options (optional)
	react: {
		nsMode: 'fallback', // set it to fallback to let passed namespaces to translated hoc act as fallbacks
		wait: false,
	},
});

module.exports = { default: i18n };
