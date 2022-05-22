var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');
const { title } = require('process');

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
      contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '我',
        template: './src/asset/index.html',
        filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    })
  ],
    module: {
        rules: [
          {
            test: /\.(png|svb|jpg|gif)$/,
            use: ["file-loader"] 
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.scss$/i,
            use: [
              // 将 JS 字符串生成为 style 节点
              'style-loader',
              // 将 CSS 转化成 CommonJS 模块
              'css-loader',
              // 将 Sass 编译成 CSS
              {
                  loader: "sass-loader",
                  options: {
                      implementation: require('dart-sass')
                  }
              }
            ],
          }
        ],
      },
  };

