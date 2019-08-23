const i18next = require('i18next');
const XHR = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');
const configI18next = require('./i18next.config');
const i18nInstance = i18next;

if (process.browser) {
	i18nInstance.use(XHR).use(LanguageDetector);
}

if (!i18nInstance.isInitialized) i18nInstance.init(configI18next.default);

const getInitialProps = (req, namespaces) => {
	if (!namespaces) namespaces = i18nInstance.options.defaultNS;
	if (typeof namespaces === 'string') namespaces = [namespaces];

	req.i18n.toJSON = () => null;
	const initialI18nStore = {};
	req.i18n.languages.forEach(l => {
		initialI18nStore[l] = {};
		namespaces.forEach(ns => {
			initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
		});
	});

	return {
		i18n: req.i18n,
		initialI18nStore,
		initialLanguage: req.i18n.language,
	};
};

module.exports = {
	getInitialProps,
	i18nInstance,
	I18n: i18next.default,
};
