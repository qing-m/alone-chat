const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  //部署的基本URL
  publicPath: process.env.NODE_ENV === "production" ? "/alone-chat" : "/",
  //打包后文件名字
  outputDir: "alone-chat",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  //出现语法错误时也会在development环境编译
  lintOnSave: process.env.NODE_ENV === "development",
  //不需要生成环境的source map
  productionSourceMap: false,
  //如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
