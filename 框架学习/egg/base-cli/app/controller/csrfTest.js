const Controller = require('egg').Controller
const fs = require('fs')
const path = require('path')


module.exports = class CsrfTest extends Controller {
  async index () {
    this.ctx.set('Content-Type', 'text/html');
    this.ctx.body = fs.readFileSync(path.join(__dirname, '../view/csrfTest/index.html'));
  }

  async quickTransfer () {
    this.ctx.set('Content-Type', 'text/html');
    this.ctx.body = fs.readFileSync(path.join(__dirname, '../view/csrfTest/transfer.html'));
  }

  async transfer () {
    let bankName = this.ctx.cookies.get('bankName')

    if (bankName) {
      this.ctx.body = `${bankName} 转账 ${this.ctx.request.body.money} 成功: ${this.ctx.request.body.receiver}`
    } else {
      this.ctx.status = 400
      this.ctx.body = '认证错误!'
    }
  }

  async adv () {
    this.ctx.set('Content-Type', 'text/html');
    this.ctx.body = fs.readFileSync(path.join(__dirname, '../view/csrfTest/adv.html'));
  }
}