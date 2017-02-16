var packager = require('electron-packager');
packager({
    dir: 'app',
    buildPath: 'twitchComments',
    electronVersion: '1.4.15',
    platform : 'darwin',
    arch: 'x64',
    overwrite: true
}, function() {});
