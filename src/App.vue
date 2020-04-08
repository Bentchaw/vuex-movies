<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
    <moviesList/>
  </div>
</template>

<script>


import moviesList from "./components/moviesList"

export default {
  components: {
    moviesList
  },
  created() {
    this.$store.dispatch('initMovies');
  },
}
</script>

<style lang="stylus">
</style>
