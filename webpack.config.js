'use strict';

let path = require('path');

module.exports = {
    target: 'electron',
    node: {
        __dirname: false,
        __filename: false
    },
    entry: {
        'main': './src/main.js',
        'renderer': './src/renderer.jsx'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { exclude: /node_modules/, test: /\.jsx?$/, loader: 'babel-loader' }
        ]
    },
    output: {
        path: path.join(__dirname, 'app'),
        filename: '[name].js'
    },
};
