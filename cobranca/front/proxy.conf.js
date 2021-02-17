const PROXY_CONFIG = [
    {
      context: '/api/*',
      target: 'http://localhost:8080/',
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/api': ''},
      changeOrigin: false
    }
];

module.exports = PROXY_CONFIG;