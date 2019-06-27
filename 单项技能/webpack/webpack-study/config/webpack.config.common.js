const path = require('path');
// plugins
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


function commonConfigCreator(options){
    /**
     * options{
     *      indexHtmlName  输出主页面名
     *      output: {
     *          relativePath  出口相对当前目录路径
     *          publicPath  
     *      }
     *      picLoader: { 图片loader
     *          publicPath
     *          outputPath
     *      }
     * }
     * 
     */
    options = options || {};

    return {
        entry: {
            main: './src/index.js',
            print: './src/components/print.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, options.output.relativePath),
            publicPath: options.output.publicPath
        },
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8000,
                                publicPath: options.picLoader.publicPath,
                                outputPath: options.picLoader.outputPath,
                                name: '[hash].[ext]',
                            }
                        },
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), "build/")]
            }),
            new HtmlWebpackPlugin({
                title: '-Webpack-',
                filename: options.indexHtmlName,
                template: path.resolve(__dirname, "../public/index.html")
            }),
            new ManifestPlugin()
        ]
    }
}

module.exports = commonConfigCreator;