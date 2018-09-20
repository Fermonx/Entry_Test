const Encore = require ('@symfony/webpack-encore');
Encore
    .setOutputPath('web/build')
    .setPublicPath('build')
    .addEntry('main', './assets/js/app.js')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVueLoader(function(options){});

const config = Encore.getWebpackConfig();

module.exports = config;