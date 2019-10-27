/*
 * @Author: golderBrother
 * @Date: 2019-10-27 18:56:01 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-27 18:57:05
 * @Description: 前端的controller 
 */

const { Controller } = require('egg')
class HomeController extends Controller {
    async index(){
        const {ctx} = this;
        ctx.body = '前端的API接口'
    }
}
module.exports = HomeController
