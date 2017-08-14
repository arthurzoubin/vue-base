// Get author name
const name = state => state.name
// Get loading
const loading = state => state.loading
// Get error message
const errorMsg = state => state.errorMsg
// Get repos
const repos = state => state.repos

export default {
  name,
  loading,
  errorMsg,
  repos,
}
