const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: './dist', // set the root folder for localhost:4040
    },
    hot: true,
    allowedHosts: 'all',
    compress: false,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 4040,
  },
});
