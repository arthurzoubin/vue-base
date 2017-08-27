<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <h2>Demo</h2>
    <ul>
      <li><router-link to="/github">Get repositories from github by name</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Welcome',
  data() {
    return {}
  },
  computed: {
    ...mapState('welcome', [
      'msg',
    ]),
  },
}
</script>
