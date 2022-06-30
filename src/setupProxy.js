const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://mysterious-headland-08309.herokuapp.com',
            changeOrigin: true,
        })
    );
};
