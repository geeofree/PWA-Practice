const webpack = require('webpack')
const path = require('path')

const pubDir = path.resolve(__dirname, 'public')
const WebpackHMR = new webpack.HotModuleReplacementPlugin()

module.exports = {
  output: {
    filename: 'static/js/[name].[hash].js'
  },

  devServer: {
    hot: true,
    port: 5000,
    contentBase: pubDir,
    stats: 'errors-only',
    historyApiFallback: true
  },

  plugins: [WebpackHMR]
}