// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App'
import store from './composition/makeCreateStore'
import { router } from './router'
import { request } from './utils'

Vue.config.productionTip = false

// Use axios
Vue.use(VueAxios, request)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
