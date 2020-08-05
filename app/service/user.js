'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询
  async find({ id }) {
    const { ctx } = this;
    return await ctx.model.user.findAll({
      // attributes: [ 'username' ],
      where: {
        id,
      },
      // 查询操作的时候，加入这个参数可以直接拿到对象类型的查询结果，否则还需要通过方法调用解析
      raw: true,
    });
  }
  // 添加
  async add(id) {
    return await this.app.mysql.insert('user', id);
  }
  // 更新
  async update(id) {
    return await this.app.mysql.update('user', id);
  }
  // 删除
  async destroy(id) {
    return await this.app.mysql.delete('user', id);
  }
}

module.exports = UserService;
