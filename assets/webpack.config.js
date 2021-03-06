const path = require('path');

module.exports = {

  entry: [
    path.join(__dirname, './icons')
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
         test: /\.(jpe?g|png|gif|svg)$/i,
         use: [
           'url-loader?limit=10000',
           'img-loader'
         ]
      }
    ]
  }
};
