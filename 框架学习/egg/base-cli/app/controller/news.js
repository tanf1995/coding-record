const Controller = require('egg').Controller;


class NewsController extends Controller{
    async list(){
        let list = [
            { url: 'http://www.baidu.com', title: '百度' },
            { url: 'http://www.sohu.com', title: '搜狐' }
        ]

        await this.ctx.render('news/list.tpl', { list });
    }

    async saveList() {
        console.log(JSON.parse(this.ctx.request.body))
        this.ctx.respond.set('Content-Type', 'text/plain')
        this.ctx.body = JSON.stringify({
            msg: 'ok'
        })
    }
}

module.exports = NewsController;