<template>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
    <div  class="col-sm-6 col-md-12">
        <div class="">
        <h1 class="heading col-sm-6 col-md-12">Location</h1>
    <div class="container-fluid col-sm-6 col-md-12">
        <p id="map">
        <iframe width="800" height="600" frameborder="2" style="border:2" src="https://www.google.com/maps/embed/v1/place?q=Anchorage%201%2C%20Anchorage%20Quay%2C%20Salford%20Quays%2C%20Manchester%2C%20UK&key=AIzaSyBy3Ccy2bmmFBE_UHoXa5t_IM9sjOCZY_E    " allowfullscreen></iframe>
        </p>
        <div id="info"><p id="address">Address:<br>5th Floor Anchorage 1, Anchorage Quay, Salford Quays, Greater Manchester, M50 3YJ</p>
        <p id="access">Accessible by Car, Bus, and Tram (Anchorage Station)</p>
        </div>
        <br><br><br><br>
        <div id="nearby">
            <h2 class="heading">Places To Visit Nearby</h2>
            <a href="http://www.lowryoutlet.co.uk/"><img id ="lowry" src="../assets/lowry.jpg"></a>
            <a href="https://itvstudios.com/"><img id = "itv" src ="../assets/itv-studios.jpg"></a>
            <a href="https://www.wagamama.com/restaurants/media-city"><img id="wagamama" src ="../assets/wagamama.jpg"></a>
        </div>
        
    </div>
	</div>
</div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'Location'
}    
</script>

<style scoped>
#content {
  position: relative;
  left: 190px;
  top: 120px;
  width: 1540px;
  height: 1100px;
  background-color: #00386b;
  border-radius: 10px;
}

.heading {
    font-weight: lighter;
    color:white;
    font-size:22px;
    text-align:center;
    position: relative;
    top:50px;
    /* font-family:monospace; */
    text-transform: uppercase;
}

#map {
    position: relative;
    top:100px;
    margin-left:auto;
    margin-right:auto;
}

#info {
    color: white;
    font-size: 20px;
    position: relative;
    width:400px;
    top:100px;
    margin-left:auto;
    margin-right:auto;
}

#nearby {
  height: 100px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  top: 00px;
  margin-bottom:80px;
  margin-left:auto;
    margin-right:auto;
}

#itv {
    position: relative;
  height: 50px;
  top:60px;
  float: right;
  right: 400px;
  background-color: black;
  margin-left:auto;
    margin-right:auto;
}

#wagamama {
    height:50px;
    background-color: white;
    top:60px;
    position:relative;
    margin-left:auto;
    margin-right:auto;
}

#lowry {
    position: relative;
  height: 50px;
  float: left;
  top:60px;
  left: 400px;
  background-color: white;
  margin-left:auto;
    margin-right:auto;
}

#Copyright {
    position: relative;
    left: 450px;
    top: 160px;
    color:white;
}
</style>
