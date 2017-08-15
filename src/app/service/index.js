import Vue from 'vue'

export const fetchRepos = (username) => {
  const requestUrl = `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  return Vue.axios.get(requestUrl).then(response => {
    return response.data
  }, response => {
    return []
  })
}
