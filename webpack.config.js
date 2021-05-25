module.exports = {
  renderer: {
    entry: {
      menu:'./src/renderer/javascripts/index.js',
      users: './src/renderer/javascripts/users.js',
    },
    output: {
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader'
            }
          ]
        }
      ]
    }
  },
  preload: {
    entry: './src/preload/index.js'
  },
  main: {
    entry: './src/main/index.js'
  }
}
