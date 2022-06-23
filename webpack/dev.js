/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const commonConfiguration = require('./common.js')

module.exports = merge(commonConfiguration, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // host: '0.0.0.0',
    host: 'local-ip',
    open: true,
    port: 3000,
    // liveReloadを有効にするときはHMRを無効する
    // liveReload: true,
    // hot: false,
  },
})
