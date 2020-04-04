'use strict';

const Controller = require('egg').Controller;

class FieldController extends Controller {
  // 查询
  async query() {
    const ctx = this.ctx;
    const user = await ctx.service.field.find(ctx.query);
    ctx.body = user;
    return user;
  }
  // 添加
  async add() {
    const ctx = this.ctx;
    const user = await ctx.service.field.add(ctx.query);
    ctx.body = user;
    return user;
  }
  // 更新
  async update() {
    const ctx = this.ctx;
    const user = await ctx.service.field.update(ctx.query);
    ctx.body = user;
    return user;
  }
  // 删除
  async destroy() {
    const ctx = this.ctx;
    const user = await ctx.service.field.destroy(ctx.query);
    ctx.body = user;
    return user;
  }
}

module.exports = FieldController;
