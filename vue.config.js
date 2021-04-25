const Mo = require('monaco-editor-webpack-plugin');

module.exports = {
    chainWebpack(config) {
        config.plugin('monaco').use(Mo)
    }
}