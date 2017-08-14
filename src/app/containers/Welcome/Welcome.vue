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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
