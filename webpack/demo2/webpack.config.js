const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

const dev = Boolean(process.env.WEBPACK_SERVE)

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.html$/,
        use: 'html-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'none'
    })
  ]
}

if (dev) {
  module.exports.serve = {
    host: '0.0.0.0',
    port: 8080,
    dev: {
      publicPath: '/assets'
    },
    add: app => {
      app.use(convert(history({
        index: '/assets'
      })))
    }
  }
}
