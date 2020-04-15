<template>
    <div>
        <span class="movie-list-title"><h1>Films populaires</h1></span>
        <section class="cards">   
            <div class="card" v-for="movie in initMovies" :key="movie.id">
                <a href="#">
                    <img class="card__img" :src="`${movie.urlImage}`" alt="..."/>
                    <span class="card-details">
                        <p>{{movie.title}}</p>
                    </span>
                </a>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {  
    computed: {
        ...mapGetters([
            'initMovies'
        ])
    },
}
</script>

<style lang="stylus" scoped>
.movie-list-title
    font-size 1.2em
    text-align center
.movie-list-title h1
    margin 50px
.cards
    display flex
    flex-wrap wrap
    justify-content center
    align-items center
    padding 10px 10%
    background-color white

.card
    position relative
    flex 1 1 10%
    display flex
    flex-direction column
    align-items center
    justify-content center
    text-align center
    margin 20px
    padding 20px
    
.card__img
    display flex
    width 220px
    border-radius 5%

.card-details
    width 100%
    padding 5%
        
</style>