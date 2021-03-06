/* eslint-disable comma-dangle */
/* eslint-disable indent */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }],
            },
            {
                test: /\.(s*)css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: { name: 'assets/[hash].[ext]' },
                    // eslint-disable-next-line array-bracket-spacing
                }, ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',

        }),
    ],
};