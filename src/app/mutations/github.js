import
{
  CHANGE_NAME,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from '@/app/constants/github'

export default {
  [CHANGE_NAME](state, payload) {
    state.name = payload.name
    state.errorMsg = ''
  },
  [LOAD_REPOS](state) {
    state.loading = true
    state.repos = []
  },
  [LOAD_REPOS_SUCCESS](state, payload) {
    state.loading = false
    state.repos = payload.repos
  },
  [LOAD_REPOS_ERROR](state, payload) {
    state.loading = false
    state.errorMsg = payload.message
  },
}
