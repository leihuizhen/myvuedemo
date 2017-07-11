// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import App from './App.vue'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.config.productionTip = false
import 'mint-ui/lib/style.css';

import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);

import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
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
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
