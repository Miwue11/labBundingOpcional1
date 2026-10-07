const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.png$/i,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                type: "javascript/auto",
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    devServer: {
        port: 8080,
        open: true,
    },
};