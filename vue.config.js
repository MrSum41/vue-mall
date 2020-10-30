//这个配置会合并node_modules里面的配置文件
module.exports = {
  configureWebpack: {
    resolve: {
      //别名配置
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}
