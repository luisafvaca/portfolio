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
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
       test: /\.json$/,
       loader: 'json-loader',
     }
    ]
  }
}
