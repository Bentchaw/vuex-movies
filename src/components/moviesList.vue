<template>
    <div>
        <h1>Top films populaire</h1>
        <hr>
        <ul>
            <li v-for="movie in initMovies" :key="movie.id">
                <img width="100px" height="100px" :src="`${movie.urlImage}`" alt="..."/>
            </li>
        </ul>
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
