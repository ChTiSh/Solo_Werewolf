const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    clean: true,
  },

  stats: {
    preset: 'minimal',
    builtAt: true,
    entrypoints: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(s?c|sa)ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html',
      // filename: 'index.html',
    }),
    new ProgressPlugin(),
  ],
  devServer: {
    port: 8080,
    static: {
      publicPath: '/build',
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    liveReload: false,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    proxy: {
      '/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    hot: true,
    open: true,
  },
};
