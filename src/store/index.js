import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  // 没有异步操作和批量操作时，可以省略action作转发，直接用在组件中commit
  // localstorage可以实现cookie的功能，而且功能比cookie更简单
})
