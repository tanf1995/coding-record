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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573716104446_1006';

  // add your middleware config here
  config.middleware = [];

  // 配置assets模板引擎
  config.view = {
    mapping: {
      '.js': 'assets'
    }
  };

  config.assets = {
    devServer: {
      command: 'roadhog dev',
      port: 8000
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
