'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询
  async find(id) {
  // "users" 为test数据库数据表名
    const user = await this.app.mysql.get('user', id);
    return { user };
  }
  // 添加
  async add(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.insert('user', id);
    return { user };
  }
  // 更新
  async update(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.update('user', id);
    return { user };
  }
  // 删除
  async destroy(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.delete('user', id);
    return { user };
  }
}

module.exports = UserService;
