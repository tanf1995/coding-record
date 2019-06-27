const merge = require('webpack-merge');
const path = require('path');
const commonConfigCreator = require('./webpack.config.common');


const devConfig = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        open: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
}

const commonConfigOptions = {
    indexHtmlName: "index.html",
    output: {
        relativePath: "../dist",        
        publicPath: "/"
    },
    picLoader: { 
        publicPath: "/",
        outputPath: "./"
    }
}

module.exports = merge(commonConfigCreator(commonConfigOptions), devConfig);