const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./common.js')

module.exports = merge(
  commonConfiguration,
  {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      host: '0.0.0.0',
      useLocalIp: true,
      contentBase: path.resolve(__dirname, '../public'),
      watchContentBase: true,
      open: true,
      // openPage: './sample',
      // stats: 'minimal', // 出力ログをへらす
    },
  },
)
