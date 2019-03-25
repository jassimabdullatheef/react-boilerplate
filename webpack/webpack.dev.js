const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    externals: {
        'Config': JSON.stringify(require('../config/config.dev.json'))
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 8000,
        index: 'index.html',
        open: true,
        historyApiFallback: true
    }
});
