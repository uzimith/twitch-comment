var packager = require('electron-packager');
packager({
    dir: 'app',
    out: './dist',
    buildPath: 'twitchComments',
    electronVersion: '1.4.15',
    platform : 'darwin',
    // platform : 'win32',
    arch: 'x64',
    overwrite: true
}, function(err, appPaths) {
    if (err) console.log(err);
    console.log('Done: ' + appPaths);
});
