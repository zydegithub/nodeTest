'use strict';

const Service = require('egg').Service;

class LayerService extends Service {
  // 查询
  async find(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.select('layers', {
      where: {
        layerUser: id.layerUser,
      },
      limit: Number(id.limit), // 查询条数
      offset: Number(id.offset), // 数据偏移量（分页查询使用）
    });
    return {
      user,
    };
  }

  // 查询
  async findId(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.select('layers', {
      where: {
        layerId: id.layerId,
      },
    });
    return {
      user,
    };
  }
  // 查询
  async findState(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.select('layers', {
      where: {
        layerState: id.layerState,
      },
    });
    return {
      user,
    };
  }
  // 添加
  async add(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.insert('layers', id);
    return {
      user,
    };
  }
  // 更新
  async update(id) {
    // "users" 为test数据库数据表名llwa
    const user = await this.app.mysql.update('layers', {
      layerGeojson: id.layerGeojson, // 需要修改的数据
      imgUrl: id.imgUrl,
      updateTime: id.updateTime,
    }, {
      where: {
        layerId: id.layerId,
      }, // 修改查询条件
    });
    return {
      user,
    };
  }
  // 更新
  async updateName(id) {
    // "users" 为test数据库数据表名llwa
    const user = await this.app.mysql.update('layers', {
      showName: id.showName, // 需要修改的数据
      layerName: id.layerName,
      updateTime: id.updateTime,
      layerState: id.layerState,
    }, {
      where: {
        layerId: id.layerId,
      }, // 修改查询条件
    });
    return {
      user,
    };
  }
  // 删除
  async destroy(id) {
    // "users" 为test数据库数据表名
    const user = await this.app.mysql.delete('layers', id);
    return {
      user,
    };
  }
}

module.exports = LayerService;
