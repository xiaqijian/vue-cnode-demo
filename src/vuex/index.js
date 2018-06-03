import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginkey: '登录'
  },
  mutations: {
    changelogin (state) {
      state.loginkey = localStorage.getItem('cnodeKey') === ('' || null) ? '登录' : '退出'
    }
  }
})
