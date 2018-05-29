const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index : './src/bundles/index.bundle.js',
    test :  './src/bundles/test.bundle.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: "MyLib"
  }
};
