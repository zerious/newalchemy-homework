import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    session: {}
  },
  mutations: {
    login (state) {
      state.count++
    }
  },
  actions: {
    
  }
})