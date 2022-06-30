const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://aqueous-dawn-43027.herokuapp.com',
            changeOrigin: true,
        })
    );
};
