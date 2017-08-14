import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/app/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: modules,
})

export default store
