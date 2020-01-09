'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询
  async find(id) {
  // "users" 为test数据库数据表名
    const user = await this.app.mysql.get('sys_user', id);
    return { user };
  }
  // 删除
  async destroy(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.delete('sys_user', { user_id: id });
    return { user };
  }
}

module.exports = UserService;
