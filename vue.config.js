module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  devServer: {
    host: "192.168.1.147",//要设置当前访问的ip 否则失效
    open: true, //浏览器自动打开页面
    proxy: {
      '/api': {
        target: 'https://fd.yishian.net:8443/applet/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
