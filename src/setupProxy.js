const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://mysterious-wave-64325.herokuapp.com/',
            changeOrigin: true,
        })
    );
};
