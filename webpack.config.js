'use strict';

let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WebpackNotifierPlugin = require('webpack-notifier');
let ElectronConnectWebpackPlugin = require('electron-connect-webpack-plugin');

module.exports = function(env = {}) {
    const plugins = [
        new webpack.DefinePlugin({ 'global.GENTLY': false }), // support @cycle/http
        new WebpackNotifierPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ];
    if (env.electron) {
        plugins.push(new ElectronConnectWebpackPlugin({path: 'app'}));
    }
    return {
        target: 'electron',
        node: {
            __dirname: false,
            __filename: false
        },
        entry: {
            main: './src/mainProcess.js',
            renderer: './src/renderer.ts'
        },
        resolve: {
            extensions: ['*', '.css', '.js', '.ts']
        },
        module: {
            loaders: [
                { test: /\.tsx?$/, exclude: ['node_modules', 'app'], loader: ['ts-loader'] },
                {
                    test: /\.css$/,
                    exclude: ['node_modules', 'app'],
                    loader: ExtractTextPlugin.extract({
                        fallback:  'style-loader',
                        use:  ['css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]', 'postcss-loader']
                    })
                }
            ]
        },
        output: {
            path: path.join(__dirname, 'app'),
            filename: '[name].js'
        },
        devtool: env.debug ? '#eval' : false,
        plugins: plugins
    }; 
}; 
