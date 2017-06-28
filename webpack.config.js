const path = require('path');
module.exports = {
  entry: {
    'fquery' : './src/core/index.js'

  },

  output: {
    filename: 'fquery.js',
    path: path.join(__dirname, 'dist'),
    // library: 'fQuery'
    libraryTarget: 'window'
  },

  module : {
    loaders: [
      {
        test: /^src\/.*\.js/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: ['./src', './node_modules']
  }
}
