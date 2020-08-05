'use strict';

const Service = require('egg').Service;

class FieldService extends Service {
  // 查询
  async find({ layerId }) {
    return await this.app.mysql.select('fields', {
      where: {
        layerId,
      },
    });
  }
  // 添加
  async add(id) {
    return await this.app.mysql.insert('fields', id);
  }
  // 更新
  async update(id) {
    return await this.app.mysql.update('fields', {
      ENname: id.ENname,
      CNname: id.CNname,
      fieldType: id.fieldType,
      fieldSitua: id.fieldSitua,
    }, {
      where: {
        fieldId: id.fieldId,
      }, // 修改查询条件
    });
  }
  // 删除
  async destroy(id) {
    return await this.app.mysql.delete('fields', id);
  }
}

module.exports = FieldService;
