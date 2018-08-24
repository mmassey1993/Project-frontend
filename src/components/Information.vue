<template>
<div id="row">
   <div>
    <div id="content" class="col-sm-6 col-md-12">
	<div class="table information" align="center">
        <h1 class="heading" align="center">Ticket Prices</h1>
        <div id ="table">
            <b-table striped bordered hover :fields="tickets.fields" :items="tickets.items"></b-table>
        </div>
    </div>
  <br>
  </div>
  <div id="content2" class="col-sm-6 col-md-12">
	<div class="table information" align="center">
        <h1 class="heading heading2" align="center">Opening Times</h1>
        <div id ="table2">
            <b-table striped bordered hover :fields="times.fields" :items="times.items"></b-table>
        </div>
    </div>
  <br>
  </div>
</div>
<div id="content3" class="col-sm-6 col-md-12">
  <h1 class="heading" align="center">Screens</h1>
    <br><br>
    <div class= "standardscreens information">
		<p>Wall to wall our screens are huge; the perfect canvas for our 4K digital projectors. Four times the resolution of standard projectors, they deliver almost nine million pixels for an even brighter, clearer and more detailed picture, all in just our standard sceens. </p>
	</div>
	<div class="standardscreens information">
		<p>Dolby® Atmos introduces a powerful new listening experience to cinema goers. With sound that truly envelops you and allows you to hear the whole picture, Dolby® Atmos heightens the realism and impact of every scene bringing you closer to the film. Why not treat yourself and choose this screen as your chosen favourite, it's definitely ours. </p>
	</div>
    <div class="standardscreens information">
        <p>Our cinema comes with Standard and Premium. Premium comes with larger, more comfortable seats, complete with recliners and a side table for your snacks.</p>
    </div>
	<div class="carousel">
        <b-carousel class ="col-md-12 col-sm-9" id="carousel2"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            indicators
            pause="false"
            autoplay="false"
            v-model="slide"
    >

            <b-carousel-slide pause="false">
                <img slot="img" class="seatsImage" 
                src="../assets/StandardSeats.jpg" alt="image slot">
                <caption id="caption">Standard Seats</caption>
            </b-carousel-slide>

            <b-carousel-slide pause="false">
                <img slot="img" class="seatsImage"
                src="../assets/PremiumSeats.jpg" alt="image slot">
                <caption id="title">Premium Seats</caption>
            </b-carousel-slide>
        </b-carousel>
	</div>
    <div></div>
    </div>
</div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      tickets: {
      fields: ["seats", "price"],
      items: [
        { seats: "Adult Standard Screen", price: "£6.00" },
        { seats: "Adult Deluxe Screen", price: "£8.00" },
        { seats: "Child Standard Screen", price: "£3.00" },
        { seats: "Child Deluxe Screen", price: "£5.00" },
        { seats: "Student/OAP Standard Screen", price: "£4.00" },
        { seats: "Student/OAP Deluxe Screen", price: "£6.00" }
      ]
      }, times: {
        fields: [ 'day', 'time' ],
        items: [
        {day: 'Monday', time: '11:00-21:00'},
        {day: 'Tuesday', time: '11:00-21:00'},
        {day: 'Wednesday', time: '11:00-21:00'},
        {day: 'Thursday', time: '11:00-21:00'},
        {day: 'Friday', time: '11:00-21:00'},
        {day: 'Saturday', time: '11:00-22:00'},
        {day: 'Sunday', time: '11:30-20:00'}
            ]
      }
    }
  }
};
</script>

<style scoped>
#row {
    width:100%;
    height:1300px;
}

#table {
  left: 70px;
  top: 40px;
  margin-right: auto;
  position: relative;
  bottom:300px;
  width: 600px;
  height: 400px;
  font-size: 24px;
  text-align: center;
}

#table2 {
  left: 120px;
  top: 20px;
  margin-right: auto;
  position: relative;
  width: 500px;
  height: 440px;
  font-size: 22px;
  text-align: center;
}

#content {
  position: relative;
  left: 190px;
  top: 70px;
  width: 760px;
  height: 500px;
  /* background-color: #00386b; */
  /* border-radius: 10px; */
}

#content2 {
  position: relative;
  left: 300px;
  top: 90px;
  width: 760px;
  /* margin:400px; */
  height: 500px;
  /* background-color: #00386b;
  border-radius: 10px; */
}

#content3 {
  position: relative;
  left: 190px;
  top: 60px;
  width: 1540px;
  /* height: 500px; */
  /* margin-bottom:50px; */
  /* background-color: #00386b;
  border-radius: 10px; */
}

.carousel {
    /* position:relative; */
    left:180px;
    top:20px;
}

#carousel2 {
  height: 450px;
  width: 800px;
  top: 50px;
  margin-left: auto;
  margin-right: auto;
  /* bottom: 1000px; */
}

.seatsImage {
    width:100%;
    height:100%;
}

caption {
    text-align: center;
    position: relative;
    top:20px;
    left:220px;
    background-color: rgba(169,169,169,0.7);
    width: 100px;
    color: white;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    top: 130px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;
}

.carousel-indicators {
    position: relative;
    left: 40px;
    height: 30px;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    justify-content: center;
    list-style: none;
}

.heading {
    font-weight: lighter;
    color:white;
    font-size:22px;
    text-align:center;
    position: relative;
    top:20px;
    /* font-family:monospace; */
    text-transform: uppercase;
}

.heading2 {
    top:0px;
}

p {
    text-align: center;
    color: white;
    font-size: 18px;
    /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
}
</style>
</style>
