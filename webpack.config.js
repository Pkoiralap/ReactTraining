module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/production`
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loader: ['style-loader','css-loader'],
        exclude: /node_modules/
      },
    ]
  }
}