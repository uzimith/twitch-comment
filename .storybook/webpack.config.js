var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const include = path.resolve(__dirname, '../');

module.exports = function(config, env) {
    var config = genDefaultConfig(config, env);

    console.log(config.resolve);

    config.resolve.fallback = undefined; // disable node_modules
    config.resolve.extensions = ['.tsx', '.ts', '.js', '.json', '.jsx', ''];
    config.resolve.modules = [
        path.resolve(__dirname, '../src/'),
        path.resolve(__dirname, '../node_modules')
    ];
    config.module.loaders.unshift({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include
    });

    return config;
};
