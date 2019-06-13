/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');
const path = require('path');
const devProxy = require('./proxy.js');

const PORT = process.env.PORT || 3000;

const app = next({
	dev: process.env.NODE_ENV !== 'production',
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();

	app.setAssetPrefix(process.env.STATIC_PATH);

	server.use(express.static(path.join(__dirname, '../static')));

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

/* eslint-enable @typescript-eslint/no-var-requires */
