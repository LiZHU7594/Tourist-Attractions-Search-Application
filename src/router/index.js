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
      // 单文件组件
    },{
      path: '/city',
      name: 'City',
      component: City
      // 单文件组件
    },{
      path: '/detail/:id',
      // 带冒号表示这个是动态路由，后面的参数会放到id这个变量里面
      name: 'Detail',
      component: Detail
      // 单文件组件
    },{
      path: '/detailmp',
      name: 'DetailMP',
      component: DetailMP
      // 单文件组件
    },{
      path: '/hotel/:id',
      // 带冒号表示这个是动态路由，后面的参数会放到id这个变量里面
      name: 'Hotel',
      component: Hotel
      // 单文件组件
    }],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
      // 页面刷新的时候总是回到最顶部
}
})
