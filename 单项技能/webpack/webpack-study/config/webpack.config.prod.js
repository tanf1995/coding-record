const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfigCreator = require('./webpack.config.common');
//plugin
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const prodConfig = {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    publicPath: "/css",
                    fallback: "style-loader",
                    use: "css-loader",
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "../css/[name][hash].css"
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BundleAnalyzerPlugin(),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            cacheGroups: {
                commons: {
                    name: "commons",
                    // chunks: "initial",
                    chunks: "async",
                    // chunks: "all",
                    minChunks: 1 ,  // 模块被引用最小次数
                    minSize: 30000 
                }
            }
        }
    }
}

const commonConfigOptions = {
    indexHtmlName: "../index.html",
    output: {
        relativePath: "../build/js",        
        publicPath: "/js/"
    },
    picLoader: { 
        publicPath: "/images",
        outputPath: "../images"
    }
}

module.exports = merge(commonConfigCreator(commonConfigOptions), prodConfig);