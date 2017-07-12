// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 导入 vue-resource，并使用
import VueResource from 'vue-resource';
// ES6模块方式
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
Vue.use(VueResource);



import App from './App.vue'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.config.productionTip = false
//导入静态样式
import 'mint-ui/lib/style.css';
import '../static/css/style.css';


//定义组件
import  home from './components/home/home.vue';
import  list from  './components/list/list.vue';
import  cart from  './components/cart/cart.vue';
import  setting from  './components/settting/setting.vue';
//定义路由
const  routes=[
  { path: '/', redirect: '/home'},//重定向
  {path:'/home',component:home},
  {path:'/list',component:list},
  {path:'/cart',component:cart},
  {path:'/setting',component:setting}
]

//创建router实例,然后传routes配置
const router = new VueRouter({
  routes
})


// 輪播
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Swipe, SwipeItem } from 'mint-ui';
// tabbar
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);
/* eslint-disable no-new */
//头部
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App }
    router,
    render : c=>c(App) //到时候去渲染哪一个组件作为我们App的入口文件
})
