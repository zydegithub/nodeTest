'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 查询
  async query() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.find(ctx.query);
  }
  // 添加
  async add() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.add(ctx.query);
  }
  // 更新
  async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.update(ctx.query);
  }
  // 删除
  async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.destroy(ctx.query);
  }
}

module.exports = HomeController;
