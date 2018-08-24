<template>
 <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
<div class="col-sm-6 col-md-12" >
    <div>
        <div>
        <h1 class ="heading col-sm-6 col-md-12">About Us</h1>
        <br><br><br>
        <h2 class="heading heading2 col-sm-6 col-md-12" style="font-size:22px;">The Team</h2>
        <div id="team">
            <div id="no1">
            <h3 class="heading3">Michael Massey - Scrum Master/Team Leader</h3>
            <br>
            </div>
            <div id="no2">
            <h3 class="heading3">Daniel Ogunsanya- Front-end Developer</h3>
            <br>
            </div>
            <div id="no3">
            <h3 class="heading3">Zak Mohamed- Full Stack Developer</h3>
            <br>
            </div>
            <div id="no4">
            <h3 class="heading3">Ed Reynolds- Full Stack Developer</h3>
            <br>
            </div>
            <div id="no5">
            <h3 class="heading3">Saqib Umar- Back-end Developer</h3>
            <br>
            </div>
            <div id="no6">
            <h3 class="heading3">Joel Joshy- Back-end Developer</h3>
            <br>
            </div>
            <br>
        </div>
        <br>
        <h2 class="heading heading2 col-sm-6 col-md-12" style="font-size:22px;">The Plan</h2>
        <br><br><br><br>
        <p>Our plan, on agreement with QA Cinemas, was to create a website for the cinema that included functionality to create accounts and book tickets for films. To do this, we utilised the "Movies DB API", which contained information about recent and upcoming movies which we collected through numerous HTTP GET requests.</p>
        <p>We used the Agile methodology Scrum to plan out the project. Daily stand-up meetings helped us to all plan out what each team member had done previously, and what they were going to move onto today to add to their previous work. By using visual task boards, like Trello, 
            we were able to, as a team, track each others progress with specific tasks and see when tasks were completed. It also enabled us to be flexible with our requirements if the product backlog was updated with new or altered requirements. The product backlog was created in the sprint planning meeting, where we decided the necessary components for the front and back-end of the product.
             This included, for the back-end, entity classes of Account and Order to store information of each new account and order in the PostgreSQL database. For the front-end, we needed to create webpages that could send the account and order information through to the PostgreSQL as JSON messages. These were done through login/create account and booking pages respectively. 
             We also needed to include information about the various films that were showing, and also those soon to be released.
             Other information that needed to be included was where the cinema was located, and information about film ratings, opening times, ticket prices and the screens used. For further information on the Scrum methodology, please <a href="https://www.scrum.org/resources/what-is-scrum">click here</a></p>
        <p>We also utilised the following technologies to help create the project:</p>
        <ul>
            <li>Node js</li>
            <li>Spring Boot</li>
            <li>PostgreSQL</li>
        </ul>
        <h4 class="heading heading2 col-sm-6 col-md-12" style="font-size:20px;">Node</h4>
        <p><br><br><br><a href="https://nodejs.org/en/">Node js</a> enabled to utilise the Vue js framework and its various components (such as Vuetify and Boostrap) to create a sleek and stylish front-end, complete with galleries, navbars, tables and forms that made it simple for the user to see clearly the information they wanted.</p>
        <h4 class="heading heading2 col-sm-6 col-md-12" style="font-size:20px;">Spring Boot</h4>
        <p><br><br><br><a href="http://spring.io/projects/spring-boot">Spring Boot</a> is a Spring framework that is commonly used in enterprise applications as it allows to use POJOs simply. It also means we can easily set up our configuration and dependency files, meaning we can spend more time coding the architecture of back-end.</p>
        <h4 class="heading heading2 col-sm-6 col-md-12" style="font-size:20px;">PostgreSQL</h4>
        <p><br><br><br><a href="https://www.postgresql.org/">PostgreSQL</a> is a powerful database system that we connected to our project to allow us to store necessary information about those who use our website, such as accounts that have been created and orders that have been made.</p>
        <h4 class="heading heading2 col-sm-6 col-md-12" style="font-size:20px;">Contact Details</h4>
        <p style="text-align:center;"><br><br><br>Telephone: 01234 567890<br>Email: info@QACinemas.com</p>
        </div>
       
    </div>

</div>
  </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: 'AboutUs'
}
</script>

<style scoped>
#content {
  position: relative;
  left: 190px;
  top: 120px;
  width: 1540px;
  height: 1400px;
  background-color: #00386b;
  border-radius: 10px;
}

  #cont {
    min-height: 100vh;
    position: relative;
  }

  .theFooter {
     width: 100%;
     position: absolute;
     height: 100px;
     padding-top: 30px;
     bottom: 0;
     color:white;
     background-color:#005baa;
     
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
.heading2 {
    top:35px;
}

.heading3 {
    font-size:20px;
    color:white;
    font-weight: bold;
}

#team {
    position:relative;
    top:50px;
}

.row {
  width:600px;
  position:absolute;
  left:470px;
  top:1500px;
  font-size:12px;
  color: white;
}

p, li {
    font-size: 19px;
    color:white;
    text-align: left;
    width: 1200px;
    position: relative;
    left: 400px;
}

ul {
    text-align: center;
    list-style-position: inside;
}

</style>