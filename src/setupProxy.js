const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://fast-sands-52706.herokuapp.com',
            changeOrigin: true,
        })
    );
};
//https://mighty-basin-65724.herokuapp.com
//http://localhost:3030
//https://warm-citadel-74212.herokuapp.com