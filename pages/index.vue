<template>
<div>
  <!-- START - NAVBAR  -->
  <div class="absolute top-0 w-screen" >
    <Navbar :socials='socials' />
  </div>
  <!-- END -  NAVBAR -->
  
  <!-- HERO -->
    <Hero />
  <!-- END HERO -->

  <!-- OVER ONS -->
    <Overons />
  <!-- END OVER ONS -->

  <!-- MAX -->
    <Person />
  <!-- END MAX -->

  <!-- PARTNERS -->
    <Partners :partners='partners'/>
    <div>
      <img src="~/assets/images/food.png" alt="food">
    </div>
  <!-- END PARTNERS -->

  <!-- HOE WERKT HET -->
    <HoeWerktHet />
  <!-- END HOE WERKT HET -->

  <!-- EXTRA MOGELIJKHEDEN EN OP LOCATIE -->
  <ExtraMogelijkhedenLocatie />
  <!-- END EXTRA MOGELIJKHEDEN EN OP LOCATIE -->

  <!-- START - WAT ZIT ERBIJ INBEGREPEN  -->
    <Benefits />
  <!-- END -  WAT ZIT ERBIJ INBEGREPEN -->

  <!-- START - MENU SELECTOR  -->
    <Menus />
  <!-- END -  MENU SELECTOR -->
  

  <!-- START - CONTACT  -->
    <Contact />
  <!-- END -  CONTACT -->
  
  <!-- START - IMPRESSIES  -->
    <Impressies />
  <!-- END -  IMPRESSIES -->
  
  <!-- START - FOOTER  -->
    <Footer :socials='socials' />
  <!-- END -  FOOTER -->
  <div class="h-screen" style="background:red;">
    full screen item
  </div>
  
</div>
</template>


<script lang='ts' >
import { defineComponent } from "@nuxtjs/composition-api";
import Navbar from "./../components/navbar.vue";
import Hero from "./../components/hero.vue";
import Overons from "./../components/overons.vue";
import Person from "./../components/person.vue";
import Partners from "./../components/partners.vue";
import HoeWerktHet from "./../components/hoewerkthet.vue";
import ExtraMogelijkhedenLocatie from "./../components/extramogelijkhedenlocatie.vue";
import Benefits from "./../components/benefits.vue";
import Menus from "./../components/menus.vue";
import Contact from "./../components/contact.vue";
import Impressies from "./../components/impressies.vue";
import Footer from "./../components/footer.vue";
export default defineComponent({
 props: [],
 components: {Footer,Navbar, Hero, Overons, Person, Partners, HoeWerktHet,ExtraMogelijkhedenLocatie,Benefits,Menus,Contact,Impressies},
 setup() {
   
    const partners = [
     {name: 'Visaandeschelde', img: require('~/assets/images/partners/1.png')},
     {name: 'The Traveller', img: require('~/assets/images/partners/3.png')},
     {name: 'The Roast Room', img: require('~/assets/images/partners/2.png')}
   ]

   const socials = [
     {
       name: 'Instagram',
       image: require('~/assets/images/socials/instagram.svg'),
       url: 'https://www.instagram.com/chefsatyourtable/'
     },
     {
       name: 'Facebook',
       image: require('~/assets/images/socials/facebook.svg'),
       url: 'https://www.facebook.com/ChefsatyourTable'
     },
     {
       name: 'Linkedin',
       image: require('~/assets/images/socials/linkedin.svg'),
       url: 'https://www.linkedin.com/in/max-deenik-86a498187/?originalSubdomain=nl'
     },
   ]

   return {
     partners,
     socials
   }
 }
})


</script>


<style lang='scss' >
 *, *::before, *::after{
   box-sizing: border-box;
}
 
.container{
  width:80%;
  @apply mx-auto;
}
//POWERED BY AUSTIN
</style>
 
 
