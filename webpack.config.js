var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require ('html-webpack-plugin');

var plugins = [];
var preLoaders = [];

plugins.push(new HtmlWebpackPlugin({
    title: 'electron-test',
    filename: path.resolve('dist/index.html'),
    template: path.resolve('src/js/index.ejs'),
    hash: true,
  })
);
plugins.push(new ExtractTextPlugin('[name].css'));

preLoaders.push({
  test: /\.jsx?$/,
  loader: 'eslint',
});

var config = {
  context: __dirname,
  entry: path.resolve('src/js/index.jsx'),
  pathinfo: true,
  devtool: 'source-map',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  plugins: plugins,
  module: {
    preLoaders: preLoaders,
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
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
      },
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
    extensions: ['', '.ejs', '.js', 'jsx', '.less']
  }
};


module.exports = config;
