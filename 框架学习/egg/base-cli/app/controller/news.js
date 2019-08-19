const Controller = require('egg').Controller;


class NewsController extends Controller{
    async list(){
        const ctx = this.ctx;
        const page = ctx.query.age || 1;
        const newsList = await ctx.service.news.list(page);

        await this.ctx.render('news/list.tpl', {list: newsList});
    }
}

module.exports = NewsController;