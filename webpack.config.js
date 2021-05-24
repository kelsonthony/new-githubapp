'use strict'

const path = require('path')
const HtmlWbpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src', 'index')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'index.html',
        port: 4000,
        host: '192.168.1.44'
    },

    module: {
        rules: [
        {
            enforce: 'pre',
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            include: /src/,
            loader: 'standard-loader'
        },
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            include: /src/,
            use: ['babel-loader']
        }
        ]
    },

    plugins: [
        new HtmlWbpackPlugin({
            filename: 'index.html'
        })
    ],

    
}