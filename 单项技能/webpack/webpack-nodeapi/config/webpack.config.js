const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../build')
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        compress: true,
        port: 9000
    }
}