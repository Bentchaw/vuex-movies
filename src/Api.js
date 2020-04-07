import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/";
const API_KEY = process.env.VUE_APP_API_KEY;
const DEFAULT_TYPE_SEARCH ="discover";
const DEFAULT_PARAM = "language=fr&include_adult=false";

export default {
    async initMovies() {
        try {
            const movies = await axios.get(`${API_END_POINT}${DEFAULT_TYPE_SEARCH}/movie?api_key=${API_KEY}&sort_by=popularity.desc&${DEFAULT_PARAM}`)
            return movies.data.results
        } catch(error) {
            console.error(error)
            throw(error)
        } 
    }
}
