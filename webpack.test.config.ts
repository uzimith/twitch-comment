// tslint:disable:no-var-requires
declare var __dirname;
declare function require(moduleName: string): any;
declare var module;
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const glob = require('glob');

module.exports = function() {
    return {
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        entry: glob.sync('./src/**/*.test.ts'),
        resolve: {
            extensions: ['*', '.tsx', '.ts', '.json', '.jsx', '.js', '.css'],
            modules: ['src', 'node_modules']
        },
        externals: [nodeExternals()],
        module: {
            loaders: [
                { test: /\.tsx?$/, exclude: ['node_modules', 'app'], loader: 'ts-loader' }
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'tests.js'
        },
        devtool: '#eval'
    };
};
