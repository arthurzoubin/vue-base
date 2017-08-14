import actions from '@/app/actions/github'
import mutations from '@/app/mutations/github'
import getters from '@/app/getters/github'

const initialStete = {
  name: '',
  loading: false,
  errorMsg: '',
  repos: [],
}

export default {
  namespaced: true,
  state: initialStete,
  actions,
  mutations,
  getters,
}
