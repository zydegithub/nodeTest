'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询
  async find(id) {
  // "users" 为test数据库数据表名
    const user = await this.app.mysql.select('layers', {
      where: {
        layerUser: id.layerUser,
      },
    });
    return { user };
  }
  // 添加
  async add(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.insert('layers', id);
    return { user };
  }
  // 更新
  async update(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.update('layers', id);
    return { user };
  }
  // 删除
  async destroy(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.delete('layers', id);
    return { user };
  }
}

module.exports = UserService;
