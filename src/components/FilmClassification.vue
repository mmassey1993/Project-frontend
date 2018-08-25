<template>
 <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
<div id="cont" class="col-sm-6 col-md-12">
    <h1 class="heading col-sm-6 col-md-12">Film Classifications</h1>
  <div class="container-fluid">
    <table striped bordered hover border=3 >
      <tbody>
        <tr>
          <th scope="col">Classification</th>
          <th scope="col">Description</th>
        </tr>
        <tr>
          <td><img src="../assets/Bbfc_uc.gif"><br>Universal Children<br><br><img src="../assets/Bbfc_u.gif"><br>Universal</td>
          <td>Titles rated bbfc-uc have been classified suitable for all</td>
        </tr>
        <tr>
          <td><img src="../assets/Bbfc_pg.gif"><br>Parental Guidance</td>
          <td>Titles rated bbfc-pg are for general viewing, but some scenes may be unsuitable for young children</td>
        </tr>
        <tr>
          <td><img src="../assets/Bbfc_12a.gif"><br>12 Accompanied/Advisory<br><br><img src="../assets/Bbfc_12.gif"><br>12</td>
          <td>Titles rated bbfc-12a are suitable for 12 years and over. No-one younger than 12 may see a '12A' film in a cinema unless accompanied by an adult.
          <br><br>Titles rated bbfc-12 are for 12 and over. Responsibility for allowing under-12s to view lies with the accompanying or supervising adult.
          <br><br></td>
        </tr>
        <tr>
          <td><img src="../assets/Bbfc_15.gif"><br>15</td>
          <td>Titles rated bbfc-15 are suitable only for 15 years and over. No-one younger than 15 may see a '15' film in a cinema</td>
        </tr>
        <tr>
          <td><img src="../assets/Bbfc_18.gif"><br>18</td>
          <td>Titles rated bbfc-18 are suitable only for adults. No-one younger than 18 may see an '18' film in a cinema</td>
        </tr>
        <tr>
          <td><img src="../assets/Bbfc_r18.gif"><br>Restricted 18</td>
          <td>To be shown only in specially licensed cinemas, or supplied only in licensed sex shops, and to adults only</td>
          
        </tr>
      </tbody>
    </table>
  </div>
  <br><br>
  <div id="textinfo">
  <p id ="info">For full details of the legal restrictions for these works please see the <a href="https://www.bbfc.co.uk/sites/default/files/attachments/BBFC%20Classification%20Guidelines%202014_5.pdf">BBFC Classification Guidelines document</a></p>
  </div>
  
</div>
  </v-flex>
  </v-layout>

</template>

<script>
export default {
  name: 'FilmClassification'
}
</script>

<style scoped>
#cont {
  /* margin-bottom:20px; */
  margin-left: auto;
  margin-right: auto;
}
#content {
   position: relative;
  left: 25%;
  top: 100px;
  width: 1000px;
  height: 800px;
  background-color: #00386b;
  border-radius: 10px;
}

.heading {
    font-weight: lighter;
    color:white;
    text-align:center;
    position: relative;
    top:50px;
    /* font-family:monospace; */
    text-transform: uppercase;
}

table {
  width:700px;
  margin-left: auto;
  margin-right: auto;
  font-size:20px;
  position: relative;
  /* left: 610px; */
  top: 100px;
  background-color: white;
}
#textinfo {
  position: relative;
  font-size:18px;
  /* left:450px; */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color:white;
  margin-top:110px;
}

th  {
  width:20%;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 22px;
}
td {
  text-align: center;
  font-size:18px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
