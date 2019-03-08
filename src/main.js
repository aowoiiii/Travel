// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 点击延迟解决
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播插件
import store from './store' // vuex

import 'styles/reset.css' // css 重置
import 'styles/border.css' // 消除1边框问题
import 'styles/iconfont.css' // 字体图标
import 'swiper/dist/css/swiper.css' // 轮播插件css

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
