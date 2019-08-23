const path = require('path');

const configI18next = {
	server: {
		fallbackLng: 'en',
		load: 'current',
		ns: ['common'],
		whitelist: ['en', 'es', 'tr'],
		backend: {
			loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
			addPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.missing.json'),
		},
		detection: {
			order: ['path', 'cookie', 'navigator', 'header'],
			lookupCookie: 'i18next',
			lookupFromPathIndex: 0,
			caches: ['cookie'],
			excludeCacheFor: ['cimode'],
			cookieMinutes: 10000,
		},
	},
	default: {
		fallbackLng: 'en',
		load: 'current', // we only provide en, de -> no region specific locals like en-US, de-DE
		// have a common namespace used around the full app
		ns: [],
		whitelist: ['en', 'es', 'tr'],

		debug: false, //process.env.NODE_ENV !== 'production',
		saveMissing: false, //process.env.NODE_ENV !== 'production',

		interpolation: {
			escapeValue: false, // not needed for react!!
			formatSeparator: ',',
			format: (value, format, lng) => {
				if (format === 'uppercase') return value.toUpperCase();
				return value;
			},
		},
		detection: {
			order: ['path', 'cookie', 'navigator', 'subdomain'],
			lookupCookie: 'i18next',
			lookupFromPathIndex: 0,
			lookupFromSubdomainIndex: 0,
			caches: ['cookie'],
			excludeCacheFor: ['cimode'],
			cookieMinutes: 10000,
		},
	},
};

module.exports = configI18next;
