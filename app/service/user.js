'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询
  async find(id) {
    return await this.app.mysql.get('user', id);
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
