'use strict';

let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WebpackNotifierPlugin = require('webpack-notifier');

module.exports = function(env = {}) {
    return {
        target: 'electron',
        node: {
            __dirname: false,
            __filename: false
        },
        entry: {
            main: './src/main.js',
            renderer: './src/renderer.ts'
        },
        module: {
            loaders: [
                { test: /\.tsx?$/, exclude: ['node_modules', 'app'], loader: ['ts-loader'] },
                { test: /\.jsx?$/, exclude: ['node_modules', 'app'], loader: ['babel-loader'] },
                {
                    test: /\.css$/,
                    exclude: ['node_modules', 'app'],
                    loader: ExtractTextPlugin.extract({
                        fallback:  'style-loader',
                        use:  ['css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]']
                    })
                }
            ]
        },
        output: {
            path: path.join(__dirname, 'app'),
            filename: '[name].js'
        },
        devtool: env.debug ? '#eval' : false,
        plugins: [
            new webpack.DefinePlugin({ 'global.GENTLY': false }), // support @cycle/http
            new WebpackNotifierPlugin(),
            new ExtractTextPlugin({
                filename: 'style.css',
                allChunks: true
            })
        ]
    }; 
}; 
