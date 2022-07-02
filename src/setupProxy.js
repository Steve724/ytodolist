const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3030',
            changeOrigin: true,
        })
    );
};

//http://localhost:3030

//https://fast-sands-52706.herokuapp.com