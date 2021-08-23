module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/_variables.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '^/upload': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      },
      '^/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true
      }
    }
  }
};
