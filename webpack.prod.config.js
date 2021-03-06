const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'eval',

  output: {
    filename: 'static/js/[name]-chunk.[chunkhash:8].js',
    chunkFilename: 'static/js/[name]-chunk.[chunkhash:8].js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    },

    runtimeChunk: true
  },

  plugins: [
    new CleanWebpackPlugin(['public'])
  ]
}
