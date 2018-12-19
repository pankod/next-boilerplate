export default devProxy = {
	'/api': {
		target: 'https://exampleapi.co/api/',
		pathRewrite: { '^/api': '/' },
		changeOrigin: true
	}
}