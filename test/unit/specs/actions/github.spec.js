import
{
  CHANGE_NAME,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from '@/app/constants/github'

const actionsInjector = require('inject-loader!@/app/actions/github.js')

const DEFAULT_REPOS = [
  { html_url: 1, name: 'Apple' },
  { html_url: 2, name: 'Orange' },
  { html_url: 3, name: 'Carrot' },
]

const actions = actionsInjector({
  '@/app/service': {
    fetchRepos(name) {
      if(name === 'arthur') {
        return DEFAULT_REPOS
      } else {
        return []
      }
    },
  },
}).default

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).to.equal(type)
      if(payload) {
        expect(mutation.payload).to.deep.equal(payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if(count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if(expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('Github actions', () => {
  it('Change author name', done => {
    testAction(actions.changeName, 'arthur', {}, [
      { type: CHANGE_NAME, payload: { name: 'arthur' } },
    ], done)
  })

  it('Get repos without author name', done => {
    testAction(actions.loadRepos, null, {}, [
      { type: LOAD_REPOS },
      { type: LOAD_REPOS_ERROR, payload: { message: 'Please fill the author name.' } },
    ], done)
  })

  it('Get repos with correct author name', done => {
    testAction(actions.loadRepos, null, { name: 'arthur' }, [
      { type: LOAD_REPOS },
      { type: LOAD_REPOS_SUCCESS, payload: { repos: DEFAULT_REPOS } },
    ], done)
  })

  it('Get repos with wrong author name', done => {
    testAction(actions.loadRepos, null, { name: 'arthurbin' }, [
      { type: LOAD_REPOS },
      { type: LOAD_REPOS_ERROR, payload: { message: 'The author have no repository.' } },
    ], done)
  })
})
