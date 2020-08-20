const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "./dist"),
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/scripts'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "static/",
                            useRelativePath: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        // copy assets to dist
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "./assets" }
            ],
        })
    ]
};