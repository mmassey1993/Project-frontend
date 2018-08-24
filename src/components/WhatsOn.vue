<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>

      <modal name="foo" :width="900" :height="600" @before-open="beforeOpen">
        <div class="modalContainer">
        <p class="modalTitle">{{this.movie.title}}</p>

        <img v-bind:src="imageLink+this.movie.poster_path" class="modalPoster">
        <div class="modalInfo">
          <p>Starring:<input type="button" class="modalBookButton" value="BOOK"></p>
          <p class="modalMovieCast" v-for="castMember in this.credits.slice(0,5)" v-bind:key="castMember.name">{{castMember.name}}</p>
          <p>Runtime:</p>
          <span class="modalMovieTime" v-bind:key="min.runtime">{{min.runtime}} min </span>
          <br><star-rating text-class="custom-text" :read-only=true :star-size="30" :rounded-corners=false :padding="0" :rating="movie.vote_average" style="margin-top: 10px"></star-rating>
        </div>
        
        <p class="modalMovieOverview">{{this.movie.overview}}</p>
        </div>
      </modal>
      <ul style="width:100%">
        <li v-for="movie in movies" v-bind:key="movie.id">
          <div class="container">
            <img v-bind:src="imageLink+movie.poster_path" alt="" class="image" style="width:100%">
            <div class="middle">
              <div class="text" @click="show(movie)">BOOK</div>
            </div>
          </div>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import TheMovieDB from '@/services/api/TheMovieDB'
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating
  },
  name: 'WhatsOn',
  data () {
    return {
      movies: [],
      imageLink: 'https://image.tmdb.org/t/p/w500',
      movie: {},
      credits: [],
      min: []
    }
  },
  created () {
    TheMovieDB.getMovies().then(movies => {
      this.movies = movies
    })
  },
  methods: {
    beforeOpen: function () {
    },
    more: function () {
      this.$router.push('modal')
    },
    show (movie) {
      /* TheMovieDB.getMovies().then(movies => {
        this.movieTitle = movies.length
      }) */
      this.movie = movie
      this.$modal.show('foo')
      TheMovieDB.getCredits(movie.id).then(credits => {
        this.credits = credits
      })
       TheMovieDB.getRuntime(movie.id).then(min => {
        this.min = min
      })
    },
    hide () {
      this.$modal.hide('hello')
    }

  }
}
</script>

<style scoped>
  .custom-text {
    font-weight: bold;
    font-size: 1.9em;
    border: 1px solid #cfcfcf;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    color: #999;
    background: #fff;
  }

  .modalContainer {
    height: 600px;
    width: 900px;
    background-color: #00386b;
  }
  .modalBookButton {
    margin-top: 1%;
    margin-left: 60%;
    height: 40px;
    width: 130px;
    border-width: 0;
    border-radius: 0;
    background-color: #005baa;
    color: white;
  }
  .modalInfo {
    display:inline-block;
    width: 600px;
    margin-left: 30px;
    height: 300px;
    position: absolute;
    margin-top: 20px;
  }
  .modalTitle {
    text-align: center;
    width: 100%;
    height: 60px;
    font-size: 20px;
    font-weight: lighter;
    background-color: #00294d;
    padding-top: 20px;
    color: white;
border-bottom: black 1px solid;
  }
  .modalMovieOverview {
    font-size: 18px;
    font-weight: lighter;

    margin-left: 40px;
    margin-right: 40px;
    margin-top: 40px;
    color: white;
  }
      .modalMovieCast {
    font-size: 15px;
    font-weight: lighter;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    color: white;
  }
      .modalMovieTime {
    font-size: 25px;
    font-weight: lighter;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;
    color: white;
  }
.modalPoster {
  margin-top: 20px;
  margin-left: 40px;
  height: 300px;
  z-index: 1;
  border: black 0px solid;

}
  ul {
    margin-top: 50px;
    /* border: white 2px solid; */
  }

  ul li {
    display: inline-block;
    width: 250px;
    /* border: white 2px solid; */
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    }

  .container {
    margin: 0;
    position: relative;
    width: 100%;
    
  }

  .image {
    margin: 0;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    -webkit-box-shadow: 0px 0px 23px 9px rgba(255,255,255,0.13);
    -moz-box-shadow: 0px 0px 23px 9px rgba(255,255,255,0.13);
    box-shadow: 0px 0px 23px 9px rgba(255,255,255,0.13);
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: #005baa;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }

</style>
