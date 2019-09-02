// #region Global Imports
const express = require('express');
const next = require('next');
const path = require('path');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
// #endregion Global Imports

// #region Local Imports
const devProxy = require('./proxy.js');
const { i18nInstance } = require('./i18n/i18n');
const configI18next = require('./i18n/i18next.config');
// #endregion Local Imports

const PORT = process.env.PORT || 3000;

const app = next({
	dev: process.env.NODE_ENV !== 'production',
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

i18nInstance
	.use(Backend)
	.use(i18nextMiddleware.LanguageDetector)
	.init(configI18next.server, () => {
		app.prepare().then(() => {
			const server = express();

			app.setAssetPrefix(process.env.STATIC_PATH);
			server.use(express.static(path.join(__dirname, '../static')));
			server.use(i18nextMiddleware.handle(i18nInstance));
			server.use('/locales', express.static(path.join(__dirname, '../locales')));
			server.use(express.static(path.join(__dirname, '../static')));
			server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18nInstance));

			if (process.env.PROXY_MODE === 'local') {
				const proxyMiddleware = require('http-proxy-middleware');
				Object.keys(devProxy).forEach(function(context) {
					server.use(proxyMiddleware(context, devProxy[context]));
				});
			}

			server.get('*', async (req, res) => {
				return handler(req, res);
			});

			server.listen(PORT, err => {
				if (err) throw err;
				console.log(`> Ready on http://localhost:${PORT}`);
			});
		});
	});
