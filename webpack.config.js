module.exports = {
  entry: './main.js',
  output:{
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modulees/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
     },
     {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}
