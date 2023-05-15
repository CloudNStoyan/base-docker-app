const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "app.bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  devServer: {
    port: 8001,
    allowedHosts: "all",
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    historyApiFallback: true,
  },
  mode: "development",
  module: {
    rules: require("./webpack.rules"),
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Client",
      inject: "body",
      template: "./src/template.html",
      favicon: "",
    }),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
