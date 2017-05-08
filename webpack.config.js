const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/dist/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve('/client/dist/build'),
    filename: 'bundle.js'
  },
  // devServer: {
  //   proxy: { // proxy URLs to backend development server
  //     '/api': 'http://localhost:8080'
  //   },
  //   contentBase: path.resolve('./client/src'), // boolean | string | array, static file location
  //   compress: true, // enable gzip compression
  //   historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  //   hotOnly: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  //   https: false, // true for self-signed, object for cert authority
  //   noInfo: true, // only errors & warns on hot reload
  // },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(jpe?g|png|gif|svg)$/i, use: ["file-loader?name=/client/dist/assets/[name].[ext]"]},
      { test: /\.(otf|ttf|woff)$/i, use: ["file-loader?name=/client/dist/font/[name].[ext]"]}
    ],
  },
  plugins: [HtmlWebpackPluginConfig]
};
