<template>
  <div id="app">
    <header>
      <nav id="nav">
        <div class="nav__link">
          <router-link to="/">Accueil</router-link>
          <router-link to="#">Films</router-link>
          <router-link to="#">Séries</router-link> 
          <router-link to="#">Mes sélections</router-link>
        </div>
      </nav>
    </header>
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
* 
  margin 0
  padding 0
  box-sizing border-box
body
  height 100vh
  font-family poppins
  font-weight 600
  font-size 16px
a
  text-decoration none

header 
  background-color black  
  height 100px
  color white
  display flex
  justify-content space-around
  align-items center
  padding 30px 70px

#nav
  list-style none
  flex 1

.nav__link a 
  padding 0 15px
  text-transform uppercase
  color #fff
  cursor pointer
  letter-spacing 2px

.nav__link a:hover
  color #D3D3D3
</style>
