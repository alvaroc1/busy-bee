'use strict';

var webpack = require('webpack');
var jsPath = 'assets';
var path = require('path');
var srcPath = path.join(__dirname, 'assets');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var entries = {
  'script': ['babel-polyfill', 'script.js']
};

var config = {
  target: 'web',
  devtool: process.env.NODE_ENV === 'production' ? '' : 'eval-source-map',
  entry: entries,
  resolve: {
    alias: {},
    modules: [
      srcPath,
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, jsPath, 'build'),
    publicPath: '',
    filename: '[name].js',
    pathinfo: true,
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /].js?$/],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
        loader: 'babel-loader',
      } 
    ]
  },
};

module.exports = config;
