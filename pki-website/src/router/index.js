import Vue from "vue"
import VueRouter from "vue-router";
import Login from "../views/login/login" // 登录页
import Home from "../views/home/home" // 首页
import product from "../views/product/product" // 产品介绍
import technical from "../views/technical/technical" // 服务与支持
import latest from "../views/latest/latest" // 服务与支持
import about from "../views/about/about" // 关于我们
import caseDetails from "../views/case/case" // 案例详情
import newsDetails from "../views/news/news" // 新闻详情
import personal from "../views/personal/personal" // 个人中心
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'login',
            path:'/',
            component:Login,
            meta: "登录"
        }, {
            name:'home',
            path:'/home',
            component:Home,
            meta: {title: "首页"},
            icon: "home"
        }, {
            name: "product",
            path: "/product",
            component: product,
            meta: "产品介绍"
        }, {
            name: "technical",
            path: "/technical",
            component: technical,
            meta: "服务与支持"
        }, {
            name: "latest",
            path: "/latest",
            component: latest,
            meta: "最新动态"
        }, {
            name: "about",
            path: "/about",
            component: about,
            meta: "关于我们"
        }, {
            name: "case",
            path: "/case",
            component: caseDetails,
            meta: "案例"
        }, {
            name: "news",
            path: "/news",
            component: newsDetails,
            meta: "新闻"
        }, {
            name: "personal",
            path: "/personal",
            component: personal,
            meta: "个人中心"
        }
    ]
})

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
