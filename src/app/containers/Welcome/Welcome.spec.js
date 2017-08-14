import Vue from 'vue'
import Welcome from './Welcome'
import store from '@/app/composition/makeCreateStore'
import router from '@/app/router'

describe('Welcome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor({ router, store }).$mount()
    expect(vm.$el.querySelector('.welcome h1').textContent)
      .to.equal('Welcome to Vue boilerplate')
  })
})
