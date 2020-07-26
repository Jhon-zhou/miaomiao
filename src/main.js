import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'                         //全局注册axios组件

Vue.prototype.$axios = axios;

Vue.filter('setWH',(url,arg) => {                  //地址栏宽高过滤器
    return url.replace(/w\.h/,arg);
});

import Scroller from '@/components/Scroller'        //全局注册Scroll组件（better-scroll）
Vue.component('Scroller',Scroller)

import Loading from '@/components/Loading'        //全局注册Loading组件
Vue.component('Loading',Loading)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
