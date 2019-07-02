const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.config');


const compiler = webpack(webpackConfig)

// const watching = compiler.watch(
//     {
//         aggregateTimeout: 300,
//         poll: undefined
//     }, 
//     (err, stats) => {
//         if(err || stats.hasErrors()){
//             return console.log("编译错误")
//         }
//         console.log("编译成功")
//     }
// )


const server = new webpackDevServer(compiler, webpackConfig.devServer);

server.listen(3000, "127.0.0.1", () => {
    console.log("start 编译")
})