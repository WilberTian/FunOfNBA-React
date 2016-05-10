var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'redux': path.join(__dirname, 'node_modules/redux')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
	  exclude: /node_modules/,
      include: path.join(__dirname, 'src/client')
    }, {
      test: /\.css?$/,
      loaders: ['style', 'css'],
      include: path.join(__dirname, 'src/client/styles')
    }, {
      test: /\.png$/,
      loader: 'url-loader?limit=8192',
      include: path.join(__dirname, 'src/client/images')
    }, {
      test: /\.svg$/,
      loader: 'url-loader?limit=8192',
      include: path.join(__dirname, 'src/client/images')
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }]
  }
};
