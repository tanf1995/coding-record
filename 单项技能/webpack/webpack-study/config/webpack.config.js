const path = require('path');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        print: './src/components/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build/js'),
        publicPath:'/js/'
    },
    // dev
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./build",
        open: true,
        port: 9000,
        hot: true
    },
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
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            publicPath: "/images",
                            outputPath: "../images",
                            name: '[hash].[ext]',
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "../css/[name][hash].css"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), "build/")]
        }),
        new HtmlWebpackPlugin({
            title: '-Webpack-',
            filename: "../index.html"
        }),
        new ManifestPlugin(),
    ]
}

console.log(path.join(process.cwd(), 'build', 'css'))