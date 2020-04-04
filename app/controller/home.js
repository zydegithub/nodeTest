'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 查询
  async query() {
    const ctx = this.ctx;
    const user = await ctx.service.user.find(ctx.query);
    ctx.body = user;
    return user;
  }
  // 添加
  async add() {
    const ctx = this.ctx;
    const user = await ctx.service.user.add(ctx.query);
    ctx.body = user;
    return user;
  }
  // 更新
  async update() {
    const ctx = this.ctx;
    const user = await ctx.service.user.update(ctx.query);
    ctx.body = user;
    return user;
  }
  // 删除
  async destroy() {
    const ctx = this.ctx;
    const user = await ctx.service.user.destroy(ctx.query);
    ctx.body = user;
    return user;
  }
}

module.exports = HomeController;
