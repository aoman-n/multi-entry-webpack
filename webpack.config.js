const path = require('path');

module.exports = {
  entry: {
    login: path.join(__dirname, '/src/login.js'),
    main: path.join(__dirname, '/src/index.js')
  },
  output: {
    path: path.join(__dirname, '/public/bundle'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    publicPath: '/bundle/',
    historyApiFallback: true,
    port: 5000,
  }
}