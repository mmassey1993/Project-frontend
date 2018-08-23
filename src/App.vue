<template>
  <div id="app">

    <div id="topBanner">
      <img id="logo" src="./assets/logo3.png" v-on:click="makeActive('/')">
      <ul id="account">
        <li>Login</li>
        <li>Register</li>
        <li>

            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
            </div><!-- /input-group -->

        </li>
      </ul>

    </div>

    <div id="main">
      <nav v-bind:class="active" v-on:click.prevent>
        <a href="#" id="label" class="whatson" v-on:click="makeActive('whatson')">What's On</a>
        <a href="#" id="label" class="comingsoon" v-on:click="makeActive('comingsoon')">Coming Soon</a>
        <a href="#" id="label" class="information" v-on:click="makeActive('information')">Information</a>
        <a href="#" id="label" class="location" v-on:click="makeActive('location')">Location</a>
        <a href="#" id="label" class="filmclassification" v-on:click="makeActive('filmclassification')">Film Classifications</a>
        <a href="#" id="label" class="aboutus" v-on:click="makeActive('aboutus')">About Us</a>
      </nav>
      <!-- <p>You chose <b>{{ active }}</b></p> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import router from './router'
import icons from 'glyphicons'

export default {
  name: 'App',
  data () {
    return {
      active: '',
      icons,
      showModal: false
    }
  },
  methods: {
    makeActive: function (item) {
      router.push(item)
      this.active = item
    }
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }

  #logo {
    height: 60px;
    width: auto;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
  }

  #account {
float: right;
    margin-top: 40px;
    margin-right: 20px;
  }
#account li {
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-weight: lighter;
  width: 80px;
}
  #account li:first-child {
    border-right: #b2b2b2 1px solid;
    margin-right: 10px;
  }
#account li:last-child {
  width: 250px;
  margin-right: 50px;
}
#account li:hover {
  text-decoration: underline;
  cursor: pointer;
}

#label {
  font-size:26px;
}
  body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #000000;
    text-align:center;
    background-color: black;
  }

  a, a:visited {
    outline:none;
    color:#389dc1;
  }

  a:hover{
    text-decoration:none;
    background-color:#e35885;
  }

  section, footer, header, aside, nav{
    display: block;
  }

  /*-------------------------
      The menu
  --------------------------*/

  nav{
    display:inline-block;
    position:relative;
    margin-bottom: 0px;
    float: bottom;
    background-color: #005baa;
    /* opacity: 0.5;
    box-shadow:0 1px 1px #ccc; */
    border-radius:0px;
    width: 100%;
    -webkit-box-shadow: 0px -3px 8px 4px rgba(0,0,0,1);
    -moz-box-shadow: 0px -3px 8px 4px rgba(0,0,0,1);
    box-shadow: 0px -3px 8px 4px rgba(0,0,0,1);
    z-index: 1;
  }

  nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:lighter;
    font-size:12px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;
    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
  }

  nav a:first-child{
    border-radius:0px 0 0 0px;
  }

  nav a:last-child{
    border-radius:0 0px 0px 0;
  }
  nav.whatson .whatson,
  nav.comingsoon .comingsoon,
  nav.help .help{
    background-color:#000;
  }

  /* p{
    font-size:22px;
    font-weight:bold;
    color:#7d9098;
  }

  p b{
    color:#ffffff;
    display:inline-block;
    padding:5px 10px;
    background-color:#c4d7e0;
    border-radius:2px;
    text-transform:uppercase;
    font-size:18px;
  } */
  #topBanner {
    width: 100%;
    height: 110px;
    background: black;
  }

</style>
