import axios from 'axios'
export default {

  getMovies () {
    return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f000b5430a909fe857a7de49bf27895e&language=en-US&page=1')
      .then(function (response) {
        console.log(response.data)
        return response.data.results
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getMoviesComingSoon () {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=f000b5430a909fe857a7de49bf27895e&language=en-US&page=2')
      .then(function (response) {
        console.log(response.data)
        return response.data.results
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getCredits (id) {
    return axios.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=f000b5430a909fe857a7de49bf27895e')
      .then(function (response) {
        console.log(response.data)
        return response.data.cast
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getRuntime (id) {
    return axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=f000b5430a909fe857a7de49bf27895e&language=en-US')
      .then(function (response) {
        console.log(response.data)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
