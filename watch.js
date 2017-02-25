'use strict';

const webpack = require('webpack');
const conf = require('./webpack.config.js')({
    debug: true
});
const compiler = webpack(conf);

let electron = null;

compiler.watch({}, (err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    if (stats.hasWarnings()) {
        stats.compilation.warnings.forEach((warning) => {
            console.log(warning);
        });
    }
    if (stats.hasErrors()) {
        stats.compilation.errors.forEach((error) => {
            if(error.error && error.error.codeFrame) {
                console.log(error.error.codeFrame);
            } else {
                console.log(error);
            }
        });
        return;
    }

    if (!electron) {
        electron = require('electron-connect').server.create({ path: 'app' });
        electron.start();
        electron.on('quit', () => process.exit(0));
    } else {
        electron.restart();
    }
});
