const path = require('path')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./common.js')

module.exports = merge(commonConfiguration, {
  target: 'web', // live reloadが動かないバグ対応 https://github.com/webpack/webpack-dev-server/issues/2758
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
    open: true,
    // openPage: './sample',
    // stats: 'minimal', // 出力ログをへらす
  },
})
