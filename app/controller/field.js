'use strict';

const Controller = require('egg').Controller;

class FieldController extends Controller {
  // 查询
  async query() {
    const { ctx } = this;
    ctx.body = await ctx.service.field.find(ctx.query);
  }
  // 添加
  async add() {
    const { ctx } = this;
    ctx.body = await ctx.service.field.add(ctx.query);
  }
  // 更新
  async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.field.update(ctx.query);
  }
  // 删除
  async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.field.destroy(ctx.query);
  }
}

module.exports = FieldController;
