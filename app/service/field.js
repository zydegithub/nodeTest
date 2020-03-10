'use strict';

const Service = require('egg').Service;

class FieldService extends Service {
  // 查询
  async find(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.select('fields', {
      where: {
        layerId: id.layerId,
      },
    });
    return {
      user,
    };
  }
  // 添加
  async add(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.insert('fields', id);
    return {
      user,
    };
  }
  // 更新
  async update(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.update('fields', {
      ENname: id.ENname,
      CNname: id.CNname,
      fieldType: id.fieldType,
      fieldSitua: id.fieldSitua,
    }, {
      where: {
        fieldId: id.fieldId,
      }, // 修改查询条件
    });
    return {
      user,
    };
  }
  // 删除
  async destroy(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.delete('fields', id);
    return {
      user,
    };
  }
}

module.exports = FieldService;
