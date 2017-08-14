import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Welcome = () => import('@/app/containers/Welcome')
const Github = () => import('@/app/containers/Github')

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/github',
    name: 'Github',
    component: Github,
  },
]

export default new Router({
  mode: 'history',
  routes,
})
