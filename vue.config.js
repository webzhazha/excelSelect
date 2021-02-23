const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      port: 7777,
      
    }
  },
  lintOnSave: false,
  css: {

    loaderOptions: {

      scss: {

        prependData: `@import "@/assets/scss/_variable.scss";` //引入全局变量   

      }

    }

  },
  
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  }
}
