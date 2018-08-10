module.exports = {
  mode: 'development',
  entry: './src/js/entrypoint.js',
  output: {
    path: `${__dirname}/docs/assets/js`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  }
}