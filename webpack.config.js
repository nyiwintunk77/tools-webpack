const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    static: {
        directory: path.resolve(__dirname, "./dist"),
    },
    historyApiFallback: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: [{
             loader: 'babel-loader',
             options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
         },]
       },
       {
        test: /\.(scss|sass|css)$/i, 
        use: [
          {loader:'classnames-loader'},
          {loader:'style-loader'},
          {loader: 'css-loader',
            // options: {
            //   modules: {
            //       mode:'local',
            //       localIdentName: '[name]__[local]'
            //   },
            //   sourceMap: true
            // }
          }, 
          {loader:'sass-loader'}]
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    // '@babel/plugin-transform-react-jsx', { throwIfNamespace: false }
    // ['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }]
  ]
};