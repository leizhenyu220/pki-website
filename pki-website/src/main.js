import Vue from 'vue'
// 引入Vuex,导入Store
import store from "./store/store"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'; // 首页CSS
import './assets/css/common.css'; // 公共CSS
// 引入路由
import VueRouter from 'vue-router'
//router是在src路径下新建的文件夹（后面会提到）
import router from './router'

import App from './App.vue'
import i18n from '../src/i18n/index.js' // 第一步：引入多语言配置文件index.js

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router, // 路由
  store, // Vuex
  i18n // 国际化（语言切换）
}).$mount('#app')
