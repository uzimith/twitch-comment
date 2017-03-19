// tslint:disable:no-var-requires
declare var __dirname;
declare var process;
declare function require(moduleName: string): any;
declare var module;

const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ElectronConnectWebpackPlugin = require('electron-connect-webpack-plugin');

interface Environment {
    electron?: boolean;
    debug?: boolean;
}

module.exports = function(env: Environment = {}) {
    const plugins = [
        new WebpackNotifierPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ];
    if (env.electron) {
        plugins.push(new ElectronConnectWebpackPlugin({ path: 'app' }));
    }
    return {
        target: 'electron',
        node: {
            __dirname: false,
            __filename: false
        },
        context: path.resolve(__dirname + '/src'),
        entry: {
            main: './process/main.ts',
            renderer: './renderer.tsx',
        },
        resolve: {
            extensions: ['*', '.tsx', '.ts', '.json', '.jsx', '.js', '.css'],
            modules: ['src', 'node_modules']
        },
        module: {
            loaders: [
                { test: /\.tsx?$/, exclude: ['node_modules', 'app'], loader: ['ts-loader'] },
                {
                    test: /\.css$/,
                    exclude: ['node_modules', 'app'],
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
                            'postcss-loader'
                        ]
                    })
                }
            ]
        },
        output: {
            path: path.join(__dirname, 'app'),
            filename: '[name].js'
        },
        devtool: env.debug ? '#eval' : false,
        plugins
    };
};
