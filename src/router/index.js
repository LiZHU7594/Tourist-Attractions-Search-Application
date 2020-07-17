import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
// 路由的配置都放在router这个文件夹下面的index.js里面
import Detail from '@/pages/detail/Detail'
import DetailMP from '@/pages/detailmp/Detail'
import Hotel from '@/pages/hotel/Hotel'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }, {
    path: '/detailmp',
    name: 'DetailMP',
    component: DetailMP
  }, {
    path: '/hotel/:id',
    name: 'Hotel',
    component: Hotel
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
