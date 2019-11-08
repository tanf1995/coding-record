const Controller = require('egg').Controller


module.exports = class Auth extends Controller{
  async login () {
    if (!this.ctx.query.username) {
      return this.ctx.body = 'no username'
    }

    this.ctx.cookies.set('bankName', this.ctx.query.username)
    this.ctx.redirect('/csrf-test', 302)
  }
}