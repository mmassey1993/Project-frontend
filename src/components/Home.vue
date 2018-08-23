<template>
  <carousel :perPageCustom="[[768, 1], [1024, 1]]" :autoplay="true" :unagile="true" :autoplayTimeout="3000" autoplayHoverPause="true" :loop="true" paginationActiveColor="#005caa">
    <slide>
      <img src="../assets/movies/movie1.jpg"/>
    </slide>
    <slide>
      <img src="../assets/movies/movie2.jpg"/>
    </slide>
    <slide>
      <img src="../assets/movies/movie3.jpg"/>
    </slide>
    <slide>
      <img src="../assets/movies/movie4.jpg"/>
    </slide>
    <slide>
      <img src="../assets/movies/movie1.jpg"/>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 300px;
  width: 100%;
}
</style>
