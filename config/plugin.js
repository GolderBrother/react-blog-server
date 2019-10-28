/*
 * @Author: yaohuang.zhang@zkteco.com 
 * @Date: 2019-10-28 09:29:24 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-28 15:51:01
 * @Description: 这个的作用是用来配置egg.js项目的，支持一些外部插件，安装完需要来这边配置才能用这个插件
 */

'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // egg.js要求我们对于外部模块在plugin.js中进行配置
  mysql : {
    enable: true,
    package: 'egg-mysql'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
``