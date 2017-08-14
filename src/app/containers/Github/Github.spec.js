import Vue from 'vue'
import Github from './Github'
import store from '@/app/composition/store'
import router from '@/app/router'

describe('Github.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Github)
    const vm = new Constructor({ router, store }).$mount()
    expect(vm.$el.querySelector('.github h1').textContent)
      .to.equal('Get repositories from Github')
  })
})
