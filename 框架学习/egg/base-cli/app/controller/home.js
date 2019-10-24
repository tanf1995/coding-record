const Controller = require('egg').Controller;


class HomeController extends Controller{
    async index(){
        this.ctx.body = 'hello world!';
        this.ctx.body += `<h3>random number: ${this.ctx.helper.getRandomNum()}</h3>`
        this.ctx.set('Content-Type', 'text/html')
    }
}

module.exports = HomeController;