/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
  const config = exports = {
    bodyParser: { // 解除大小
      jsonLimit: '100mb',
      formLimit: '100mb',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578532158437_4160';

  // add your middleware config here
  config.middleware = [];

  config.multipart = {
    mode: 'file',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '39.105.87.199',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'cms_wy',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '39.105.87.199',
    port: 3306,
    database: 'cms_wy',
    username: 'root',
    password: '123456',
    define: {
      timestamps: false,
      freezeTableName: true, // 强制表名称等于模型名称
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
