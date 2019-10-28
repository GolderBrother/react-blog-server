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
  config.keys = appInfo.name + '_1572172529875_4630';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // mysql config
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'react-blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  }

  config.security = {
    csrf : {
      enable: false
    },
    // 域名白名单，*表示所有都允许通过
    domainWhiteList: ["*"]
  }

  // egg-cors 解决跨域安全相关问题
  config.cors = {
    origin: "localhost:3000", //只允许这个域进行访问接口;设置为 '*' 表示所有的域都可以访问(这是很不安全的)
    credentials: true, // 开启认证(允许携带cookie)
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS" // 设置允许的请求方法
  }

  return {
    ...config,
    ...userConfig,
  };
};
