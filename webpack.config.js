const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const SRC_FOLDER = './src';
const DIST_FOLDER = './dist';

module.exports = {
  entry: `${SRC_FOLDER}/scripts/index.js`,
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: {
      keep: /\.git/,
    },
  },
  target: 'web',
  devServer : {
    watchFiles: './src/*'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_FOLDER}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ESLintPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            [
                                "postcss-preset-env",
                                {
                                    // Options
                                },
                            ],
                        ],
                    },
                },
            },
            "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}