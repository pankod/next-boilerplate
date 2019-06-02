const devProxy = {
    '/api': {
        target: 'https://api.nasa.gov',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
    },
};

module.exports = devProxy;
