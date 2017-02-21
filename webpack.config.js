'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = function(env) {
    return {
        target: 'electron',
        node: {
            __dirname: false,
            __filename: false
        },
        entry: {
            'main': './src/main.js',
            'renderer': './src/renderer.js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            loaders: [
                { exclude: /node_modules/, test: /\.jsx?$/, loader: ['babel-loader','regenerator-loader'] }
            ]
        },
        output: {
            path: path.join(__dirname, 'app'),
            filename: '[name].js'
        },
        devtool: env.debug ? '#eval' : false,
        plugins: [
             new webpack.DefinePlugin({ "global.GENTLY": false })
        ]
    }; 
}; 
