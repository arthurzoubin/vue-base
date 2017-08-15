import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const Welcome = () => import('@/app/containers/Welcome')
export const Github = () => import('@/app/containers/Github')

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

export const router = new Router({
  mode: 'history',
  routes,
})
