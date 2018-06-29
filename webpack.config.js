const path = require('path')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')

const devConfig = require('./webpack.dev.config.js')
const prodConfig = require('./webpack.prod.config.js')

const srcDir = path.resolve(__dirname, 'src')
const pubDir = path.resolve(__dirname, 'public')
const swDir = path.resolve(srcDir, 'service-worker.js')

const env = process.env.NODE_ENV

const mainConfig = {
  mode: env,

  entry: {
    app: srcDir
  },

  output: {
    path: pubDir
  },

  resolve: {
    modules: [srcDir, 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
}

if (env === 'development') {
  module.exports = merge(mainConfig, devConfig)
} else {
  module.exports = merge(mainConfig, prodConfig)
}