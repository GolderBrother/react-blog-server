/*
 * @Author: golderBrother 
 * @Date: 2019-10-27 18:53:49 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-28 19:39:30
 * @Description: 前端使用的所有路由
 */

module.exports = app => {
    const { router, controller } = app;
    router.get('/default/index', controller.default.home.index)
    router.get('/default/getArticleList', controller.default.home.getArticleList)
    router.get('/default/getArticleById', controller.default.home.getArticleDetailsById)
}
