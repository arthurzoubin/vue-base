/*
 * Github Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically vuex,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import Vue from 'vue'

import
{
  CHANGE_NAME,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from '@/app/constants/github'

import getters from '@/app/getters/github'

const changeName = ({ commit }, name) => commit(CHANGE_NAME, { name })

const fetchRepos = (username) => {
  const requestUrl = `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  return Vue.http.get(requestUrl).then(response => {
    return response.body
  }, response => {
    if(response.status === 404) {
      return []
    }
  })
}

const loadRepos = async ({ commit, state }) => {
  commit(LOAD_REPOS)
  const username = getters.name(state)
  if(username) {
    const repos = await fetchRepos(username)
    if(repos.length > 0) {
      commit(LOAD_REPOS_SUCCESS, { repos })
    } else {
      commit(LOAD_REPOS_ERROR, { message: 'The author have no repository.' })
    }
  } else {
    commit(LOAD_REPOS_ERROR, { message: 'Please fill the author name.' })
  }
}

export default {
  changeName,
  loadRepos,
}
