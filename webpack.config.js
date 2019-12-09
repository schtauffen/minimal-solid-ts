const path = require('path')

const config = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: [path.resolve(__dirname)],
    publicPath: '/dist'
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-env', 'babel-preset-solid', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties', '@babel/proposal-object-rest-spread'],
            cacheDirectory: true,
          }
        }
      }
    ]
  }
}

module.exports = config
