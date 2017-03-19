var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const include = path.resolve(__dirname, '../');

module.exports = function(config, env) {
    var config = genDefaultConfig(config, env);

    config.resolve.extensions = ['.tsx', '.ts', '.js', '.json', '.jsx', ''];
    config.module.loaders.unshift({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include
    });

    return config;
};
