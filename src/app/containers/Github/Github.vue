<template>
  <div class="github">
    <div>
      <h1>Get repositories from Github</h1>
    </div>
    <div>
      <form v-on:submit.prevent="onSubmit">
          <label>Github author name</label><input placeholder="Author Name" :value="name" v-on:input="changeName($event.target.value)" type="text" />
      </form>
      <div v-if="loading">
        Loading...
      </div>
      <div v-if="errorMsg"><strong>{{ errorMsg }}</strong></div>
      <ul v-if="repos.length > 0">
        <li v-for="item in repos">
          <a :href="item.html_url">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import './Github.module'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Github',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('github', [
      'name',
      'loading',
      'errorMsg',
      'repos',
    ]),
  },
  methods: {
    ...mapActions('github', [
      'changeName',
      'loadRepos',
    ]),
    onSubmit() {
      this.loadRepos()
      return true
    },
  },
}
</script>
