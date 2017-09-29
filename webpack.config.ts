import * as webpack from 'webpack';
import * as path from 'path';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

interface Config extends webpack.Configuration {
  resolve: webpack.NewResolve,
  module: {
    rules: webpack.NewUseRule[]
  }
}

const sourcePath = path.join(__dirname, './src');

const config: webpack.Configuration = {
  context: sourcePath,
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [ "style-loader", 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader'],
          publicPath: "/dist"
        })
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

export default config;