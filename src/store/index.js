import Vue from 'vue'
import Vuex from 'vuex'

import api from '../Api'
Vue.use(Vuex)

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/'

export default new Vuex.Store({
  state: {
    movies:'',
  },
  getters: {
    initMovies: state => state.movies,
  },
  mutations: {
    initMovies: (state, payload) => {
      const moviesData = payload.slice(1,10);
      state.movies = moviesData.map(movie => {
        movie.urlImage = `${BASE_URL_IMG}${movie.poster_path}`
        return movie
      }) 
    }
  },
  actions: {
    initMovies: async (context) => {
      const data = await api.initMovies();
      context.commit('initMovies', data)
    }
  },
})
