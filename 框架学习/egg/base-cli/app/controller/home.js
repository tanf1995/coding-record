const Controller = require('egg').Controller;


class HomeController extends Controller{
    async index(){
        // this.ctx.redirect('/runtimeEnv')
        this.ctx.body = 'hello world!';
    }
}

module.exports = HomeController;