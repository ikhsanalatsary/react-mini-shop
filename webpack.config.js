'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test';
const isProd = ENV === 'build';

module.exports = (function makeWebpackConfig() {
  let config = {};

  config.entry = isTest ? {} : {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/app.js',
    ],
  };

  config.output = isTest ? {} : {
    path: isProd ? path.join(__dirname, '/dist') : path.join(__dirname, '/public'),
    filename: isProd ? '[name].min.js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].min.js' : '[name].bundle.js',
  };

  if (isTest) {
		config.devtool = 'inline-source-map';
	} else if (isProd) {
		config.devtool = 'source-map';
	}
  else {
		config.devtool = 'eval-source-map';
	}

  config.resolve = {
    root: __dirname,
    alias: {},
    extentions: ['', '.js', '.jsx']
  };

  config.module = {
    loaders: [
      { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file' },
    ]
  };

  config.plugins = [];

	if (!isTest) {
		config.plugins.push(
			new HtmlWebpackPlugin({
				template: './app/index.html',
				inject: 'body',
			}),
			new ExtractTextPlugin('[name].[hash].css', { disable: !isProd }),
      new CopyWebpackPlugin([ { from: 'app/assets', to: 'assets' } ]),
      new webpack.HotModuleReplacementPlugin()
		);
	}

  if (isProd) {
		config.plugins.push(
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin()
    );
  }

  if (!isProd) {
    config.devServer = {
      historyApiFallback: true,
      inline: false,
      hot: true,
    };
  }

	if (isTest) config.watch = true;

  return config;

})();
