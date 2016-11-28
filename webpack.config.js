var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require ('html-webpack-plugin');

var config = {
  context: __dirname,
  entry: ['bootstrap-loader', path.resolve('src/js/index.jsx')],
  pathinfo: true,
  devtool: 'source-map',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'electron-test',
      filename: path.resolve('dist/index.html'),
      template: path.resolve('src/js/index.ejs'),
      hash: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader!sass-loader',
      }) },
      {
        test: /\.jpg$|\.png|\.gif|\.ico$/,
        loader: 'file-loader?name=img/[name].[ext]'
      },
      {
        test: /\.woff|woff2|ttf|eot|svg$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
    ]
  },
  resolve: {
    root: [
      path.resolve('./src'),
    ],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ejs', '.js', 'jsx', '.sass']
  },
  // need this to allow react to 'talk' to electron
  target: 'electron-renderer'
};


module.exports = config;
