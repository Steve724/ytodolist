const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://secret-fortress-65333.herokuapp.com',
            changeOrigin: true,
        })
    );
};
