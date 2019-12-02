const devProxy: { [key: string]: {} } = {
    "/api": {
        target: "https://api.nasa.gov",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
    },
};

export default devProxy;
