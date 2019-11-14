'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 单页静态模板
  assets: {
    enable: true,
    package: 'egg-view-assets'
  }
};
