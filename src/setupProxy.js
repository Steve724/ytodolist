const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://mighty-basin-65724.herokuapp.com',
            changeOrigin: true,
        })
    );
};
//https://mighty-basin-65724.herokuapp.com
//http://localhost:3030