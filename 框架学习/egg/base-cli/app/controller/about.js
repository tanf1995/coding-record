const Controller = require('egg').Controller;
const fs = require('fs')


module.exports =  class About extends Controller{
  async index () {
    this.ctx.body = 'about'
  }
}