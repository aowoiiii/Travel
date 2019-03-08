import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
Vue.use(Vuex)

/**
 * vuex理念，利用公共存储空间，某一组件改变公共数据，其他组件也能感知到
 * 单向数据流：
 * 写入/修改 Vue components => Actions(一些异步操作) => Mutations(事务) => State(公共数据)
 * 或者直接修改 Vue => Mutations(事务) => State(公共数据)
 * 读取 Vue components => State(公共数据)
 */
export default new Vuex.Store({
  state,
  mutations
})
