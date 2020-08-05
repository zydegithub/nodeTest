'use strict';

const Service = require('egg').Service;

class LayerService extends Service {
  // 查询
  async find(id) {
    return await this.app.mysql.select('layers', {
      where: {
        layerUser: id.layerUser,
      },
      limit: Number(id.limit), // 查询条数
      offset: Number(id.offset), // 数据偏移量（分页查询使用）
    });
  }

  // 查询
  async findId({ layerId }) {
    return await this.app.mysql.select('layers', {
      where: {
        layerId,
      },
    });
  }
  // 查询
  async findState(id) {
    return await this.app.mysql.select('layers', {
      where: {
        layerState: id.layerState,
      },
    });
  }
  // 添加
  async add(id) {
    return await this.app.mysql.insert('layers', id);
  }
  // 更新
  async update(id) {
    return await this.app.mysql.update('layers', {
      layerGeojson: id.layerGeojson, // 需要修改的数据
      imgUrl: id.imgUrl,
      updateTime: id.updateTime,
    }, {
      where: {
        layerId: id.layerId,
      }, // 修改查询条件
    });
  }
  // 更新
  async updateName(id) {
    return await this.app.mysql.update('layers', {
      showName: id.showName, // 需要修改的数据
      layerName: id.layerName,
      updateTime: id.updateTime,
      layerState: id.layerState,
    }, {
      where: {
        layerId: id.layerId,
      }, // 修改查询条件
    });
  }
  // 删除
  async destroy(id) {
    return await this.app.mysql.delete('layers', id);
  }
}

module.exports = LayerService;
