'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    // const id = ctx.query.user_id;
    console.log(ctx.query);
    const user = await ctx.service.user.find(ctx.query);
    ctx.body = user;
    return user;
  }
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.query.user_id;
    console.log(id);
    const user = await ctx.service.user.destroy(id);
    ctx.body = user;
    return user;
  }
}

module.exports = HomeController;
