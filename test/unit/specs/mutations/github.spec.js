import mutations from '@/app/mutations/github'

import
{
  CHANGE_NAME,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from '@/app/constants/github'

describe('Github mutations', () => {
  it('CHANGE_NAME', () => {
    const state = { name: '' }
    const payload = { name: 'arthur' }
    mutations[CHANGE_NAME](state, payload)
    expect(state.name).to.equal(payload.name)
  })

  it('LOAD_REPOS', () => {
    const state = {
      loading: false,
    }
    mutations[LOAD_REPOS](state)
    expect(state.loading).to.equal(true)
  })

  it('LOAD_REPOS_SUCCESS', () => {
    const state = {
      repos: [],
    }
    const payload = {
      repos: [
        { html_url: 1, name: 'Apple' },
      ],
    }
    mutations[LOAD_REPOS_SUCCESS](state, payload)
    expect(state.repos).to.deep.equal(payload.repos)
  })

  it('LOAD_REPOS_ERROR', () => {
    const state = {
      errorMsg: '',
    }
    const payload = {
      message: 'error message',
    }
    mutations[LOAD_REPOS_ERROR](state, payload)
    expect(state.errorMsg).to.deep.equal(payload.message)
  })
})
