import Vue from 'vue'
import VueAxios from 'vue-axios'
import { request } from '@/app/utils'
import { fetchRepos } from '@/app/service'

describe('Service', () => {
  beforeEach(function() {
    Vue.use(VueAxios, request)
  })

  it('fetchRepos with correct author name', async function() {
    this.timeout(15000)
    const name = 'arthur'
    const repos = await fetchRepos(name)
    expect(repos.length).to.be.gt(0)
  })

  it('fetchRepos with wrong author name', async function() {
    this.timeout(15000)
    const name = 'arthurbind'
    const repos = await fetchRepos(name)
    expect(repos.length).to.equal(0)
  })
})
