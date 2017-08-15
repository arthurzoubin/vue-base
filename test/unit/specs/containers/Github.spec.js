import Vue from 'vue'
import store from '@/app/composition/makeCreateStore'
import { router, Github } from '@/app/router'

describe('Github.vue', () => {
  it('should render correct contents', async () => {
    const component = await Github()
    const Constructor = Vue.extend(component.default)
    const vm = new Constructor({ router, store }).$mount()
    expect(vm.$el.querySelector('.github h1').textContent)
      .to.equal('Get repositories from Github')
  })

  it('should call onSubmit function', async () => {
    const component = await Github()
    const Constructor = Vue.extend(component.default)
    const vm = new Constructor({ router, store }).$mount()
    const flag = vm.onSubmit()
    expect(flag).to.equal(true)
  })
})
