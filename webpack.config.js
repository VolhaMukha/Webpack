const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, "/dist")
     },
    mode: "development",
    module: {
        rules: [{
            test: /\.html$/,
            use: ["html-loader"]
        }]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "./index.html"
        })
    ]
};