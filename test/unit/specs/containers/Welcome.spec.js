import Vue from 'vue'
import store from '@/app/composition/makeCreateStore'
import { router, Welcome } from '@/app/router'

describe('Welcome.vue', () => {
  it('should render correct contents', async () => {
    const component = await Welcome()
    const Constructor = Vue.extend(component.default)
    const vm = new Constructor({ router, store }).$mount()
    expect(vm.$el.querySelector('.welcome h1').textContent)
      .to.equal('Welcome to Vue boilerplate')
  })
})
