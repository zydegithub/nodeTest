'use strict';

const Controller = require('egg').Controller;

class LayerController extends Controller {
  // 查询
  async query() {
    const { ctx } = this;
    ctx.body = await ctx.service.layer.find(ctx.query);
  }
  // 查询
  async queryId() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.layer.findId(ctx.query);
  }
  // 查询
  async queryState() {
    const { ctx } = this;
    ctx.body = await ctx.service.layer.findState(ctx.query);
  }
  // 添加
  async add() {
    const { ctx } = this;
    ctx.body = await ctx.service.layer.add(ctx.query);
  }
  // 更新
  async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.layer.update(ctx.request.body);
  }
  // 更新
  async updateName() {
    const { ctx } = this;
    ctx.body = await ctx.service.layer.updateName(ctx.query);
  }
  // 删除
  async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.layer.destroy(ctx.query);
  }
}

module.exports = LayerController;
