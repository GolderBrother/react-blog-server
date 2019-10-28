## 认识 egg.js 框架

- egg.js 采用 Koa 的上层框架 egg.js，所谓上层框架就是在 Koa 的基础上，封装的框架。他主要针对于企业级开发，所以性能和稳定性上都非常不错，而且在国内有很高的声望，由阿里技术团队支持
- egg.js 是由阿里开源的面向企业级开发的 Node.js 服务端框架，目的就是帮助团队和开发人员降低开发和维护成本。需要说的是他的底层是 Koa2 来搭建的。Koa2 虽然已经很好了，但是它并没有任何约定和规范，这样在团队开发中，会出现混乱的现象。
  > 中文文档地址：https://eggjs.org/zh-cn/intro/quickstart.html
  > Github 地址：https://github.com/eggjs/egg

目前项目由 1.3 万 star，是非常火爆的开源项目，不过使用的大部分都是国人。框架主要是简化我们的开发流程。

## egg.js 目录结构介绍

- app 文件夹:项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。
- config 文件夹：这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。
- logs 文件夹：日志文件夹，正常情况下不用修改和查看里边内容。
- node_modules:项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。
- run 文件夹：运行项目时，生成的配置文件，基本不修改里边的文件。
- test 文件夹：测试使用的配合文件，这个在测试时会使用。
- .autod.conf.js: egg.js 自己生成的配置文件，不需要进行修改。
- eslinttrc 和 eslintignore：代码格式校验的配置文件。
- .gitgnore：git 设置忽略管理的配置文件。
- package.json： 包管理和命令配置文件，这个文件经常进行配置。

> 比较重要的是 app 文件夹、config 文件夹和 package.json 文件

## Egg.js 目录约定规范

Koa2 框架虽然小巧好用，但是在团队开发中使用，是缺少规范的，所以不擅长企业级开发。Egg.js 框架就是在 Koa2 的基础上规范了这些约定，所以也带来了一些文件目录的限制。

在 app 目录下，egg 要求我们必须要有下面的文件：

- controller 文件夹：控制器，渲染和简单的业务逻辑都会写道这个文件里。配置路由时也会用到（路由配置需要的文件都要写在控制器里）。
- public 文件夹：公用文件夹，把一些公用资源都放在这个文件夹下。
- router.js: 项目的路由配置文件，当用户访问服务的时候，在没有中间件的情况下，会先访问 router.js 文件。
- service 文件夹：这个是当我们的业务逻辑比较复杂或和数据库打交道时，会把业务逻辑放到这个文件中。
- view 文件夹：模板文件夹，相当于表现层的专属文件夹，这个项目，我们使用接口的形式，所以不需要建立 view 文件夹。
- extend 文件：当我们需要写一些模板中使用的扩展方法时，我们会放到这个文件夹里。
- middleware：中间件文件夹，用来写中间件的，比如最常用的路由守卫。

## RESTful 简介和约束方式

RESTful 是目前最流行的网络应用程序设计风格和开发方式，大量使用在移动端 App 上和前后端分离的接口设计。这种形式更直观并且接口也有了一定的约束性。

约束的请求方式和对应的操作。

- GET(SELECT) ： 从服务端取出资源，可以同时取出一项或者多项。
- POST(CREATE) ：在服务器新建一个资源。
- PUT(UPDATE) ：在服务器更新资源（客户端提供改变后的完整资源）。
- DELETE(DELETE) ：从服务器删除资源。

## 安装 egg-cors

`egg-cors`模块是专门用来解决 egg.js 跨域问题的，只要简单的配置就可以完成跨域的设置

### 安装

`yarn add egg-cors`

### 配置 config/plugin.js 文件

在安装完成后需要对`/service/config/plugin.js`文件进行修改，加入 egg-cors 模块即可。

```js
exports.cors: {
    enable: true,
    package: 'egg-cors'
}
```

## 配置 config.default.js

在配置完成 plugin.js 文件以后，还需要设置`config.default.js`文件。这个文件主要设置的是允许什么域名和请求方法可以进行跨域访问。配置代码如下。

```js
config.security = {
  csrf: { enable: false },
  // 域名白名单，*表示所有都允许通过
  domainWhiteList: ["*"]
};
config.cors = {
  origin: "http://localhost:3000", //只允许这个域进行访问接口;设置为 '*' 表示所有的域都可以访问(这是很不安全的)
  credentials: true, // 开启认证(允许携带cookie)
  allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS" // 设置允许的请求方法
};
```

step:

2019.10.27
https://jspang.com/posts/2019/09/19/react-demo.html#p14：中台搭建3-restful-api设计简介和路由配置
第十四节 p14：中台搭建 3-RESTful API 设计简介和路由配置 已学完
