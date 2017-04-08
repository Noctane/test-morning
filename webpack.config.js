const path = require('path');
const config = require('./src/config.js');

module.exports = {
  devtool: 'eval-source-map',
  entry: `${__dirname}/src/client.js`,
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      },
      {
        test: /\.(scss)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      path.resolve('src', 'components'),
      'node_modules',
      '/Utils',
      'src'
    ],
    extensions: ['', '.js', '.scss']
  },
  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: config.app.server.port
  }
};
