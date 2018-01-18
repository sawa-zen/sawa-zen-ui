module.exports = {
  entry: './src/index.js',
  devServer: {
    publicPath: '/',
    contentBase: './public',
    port: 8900,
    historyApiFallback: true,
    hot: false,
    progress: true,
    open: true
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: { symlinks: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
