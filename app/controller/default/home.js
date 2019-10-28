/*
 * @Author: golderBrother
 * @Date: 2019-10-27 18:56:01 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-28 19:49:13
 * @Description: 前端的controller 
 */

const { Controller } = require('egg')
class HomeController extends Controller {
    async index(){
        // 获取用户表的数据
        const {app, ctx} = this;
        // ctx.body = '前端的API接口'
        const result = await app.mysql.get('blog_content', {});
        ctx.body = result;
    }

    // 获取文章列表
    async getArticleList(){
        const {app, ctx} = this;
        // 修改时间戳为日期格式: FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s')
        const articleListSql = `SELECT article.id as id, article.type_id as type_id, article.title as title, article.introduce as introduce, article.article_content as article_content, FROM_UNIXTIME(article.addTime, '%Y-%m-%d %H:%i:%s') as addTime, article.view_count as view_count, type.typeName as typeName FROM article LEFT JOIN type ON type_id = type.id;`;
        const result = await app.mysql.query(articleListSql);
        console.log(`getArticleList: `, result);
        ctx.body = result;
    }

    // 根据文章ID获取文章详情  
    async getArticleById(){
        console.log("getArticleById")
        const { app, ctx } = this;
        let id = ctx.params.id;
        const articleDetailsSql = `
            SELECT
                article.id AS id,
                article.type_id AS type_id,
                article.title AS title,
                article.introduce AS introduce,
                article.article_content AS article_content,
                article.addTime AS addTime,
                article.view_count AS view_count,
                type.typeName AS typeName 
            FROM
                article
                LEFT JOIN type ON type_id = type.id
            WHERE type_id = ${id};
        `;
        // 文章的列表信息
        const resList = await app.mysql.query(articleDetailsSql);
        // 文章类别信息
        const resType = await app.mysql.select('type');
        ctx.body = {
            list: resList,
            type: resType
        };
    }
}
module.exports = HomeController
