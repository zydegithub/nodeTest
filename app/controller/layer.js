'use strict';

const Controller = require('egg').Controller;

class LayerController extends Controller {
  // 查询
  async query() {
    const ctx = this.ctx;
    console.log(ctx.query);
    const user = await ctx.service.layer.find(ctx.query);
    ctx.body = user;
    console.log(user);
    return user;
  }
  // 查询
  async queryId() {
    const ctx = this.ctx;
    console.log(ctx.query);
    const user = await ctx.service.layer.findId(ctx.query);
    ctx.body = user;
    return user;
  }
  // 添加
  async add() {
    const ctx = this.ctx;
    console.log(ctx.query);
    const user = await ctx.service.layer.add(ctx.query);
    ctx.body = user;
    return user;
  }
  // 更新
  async update() {
    const ctx = this.ctx;
    console.log(ctx.query);
    const user = await ctx.service.layer.update(ctx.query);
    ctx.body = user;
    return user;
  }
  // 删除
  async destroy() {
    const ctx = this.ctx;
    console.log(ctx.query);
    const user = await ctx.service.layer.destroy(ctx.query);
    ctx.body = user;
    return user;
  }
}

module.exports = LayerController;
