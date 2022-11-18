const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', //원본 URL적어야됨 (https말고 X )
      changeOrigin: true,
    }) 
  ); 
};