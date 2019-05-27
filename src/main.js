// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
// 自动查找匹配文件。App.vue是一个单文件组件
import router from './router'
import fastClick from 'fastClick'
// 解决移动端某些机型延迟的问题
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
// 各个文件都需要使用iconfont

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 挂载点,挂载到id=App的目录上，指的是index.html的元素
  // app.vue是整个应用的根组件
  router,
  // 路由就是根据网址的不同返回不同的内容给用户
  // app.vue中的<router-view/>代表的就是当前路由对应的内容
  // 在ES6里面，键和值相同时，可以省略router:router
  store,
  // store被放在根实例里面，被派发到所有的子组件里面
  components: { App },
  // 定义了一个叫App的App组件，ES6的写法，实际上是App：App
  template: '<App/>'
  // 渲染
})
