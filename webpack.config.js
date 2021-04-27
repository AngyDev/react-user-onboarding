const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/scripts/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    mode: 'development',

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ]
        }, {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: 'fonts',
                },
            }]
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: 'images'
                }
            }]
        }]
    },
    plugins: [
        // to define the css file in one file instead of the head of the html file
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ],
}