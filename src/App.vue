<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import api from "./Api";
export default {
  data() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  created() {
    api.initMovies() 
  },
}


</script>

<style lang="stylus">
</style>
