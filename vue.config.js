module.exports = {
  devServer: {
    proxy: {
      // 跨域设置
      "/robot": {
        // 目标API地址,钉钉机器人默认地址
        target: "https://oapi.dingtalk.com/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/robot": "/robot"
        }
      },
      "/sohu": {
        // 目标API地址,钉钉机器人默认地址
        target: "http://pv.sohu.com/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/sohu": ""
        }
      }
    }
  }
}