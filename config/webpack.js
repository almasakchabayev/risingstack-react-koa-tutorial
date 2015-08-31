var path = require('path');
var plugins = [];
if(process.env.NODE_ENV === 'production'){
  var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
  plugins.push(new UglifyJsPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};