import { merge } from 'webpack-merge'
import commonConfiguration from './common.js'

export default merge(commonConfiguration, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // host: '0.0.0.0',
    host: 'local-ip',
    open: true,
    // liveReloadを有効にするときはHMRを無効する
    // liveReload: true,
    // hot: false,
  },
})
