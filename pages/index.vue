<template>
<div>
  <!-- START - NAVBAR  -->
  <!-- <Navbar /> -->
  <!-- END -  NAVBAR -->
  
  <!-- HERO -->
    <Hero />
  <!-- END HERO -->

  <!-- OVER ONS -->
    <!-- <Overons /> -->
  <!-- END OVER ONS -->

  <!-- MAX -->
  <!-- <Person /> -->
  <!-- END MAX -->

  <!-- PARTNERS -->
  <!-- <Partners :partners='partners'/> -->
  <!-- END PARTNERS -->

  <!-- HOE WERKT HET -->
  <!-- END HOE WERKT HET -->

  <!-- EXTRA MOGELIJKHEDEN EN OP LOCATIE -->
  <!-- END EXTRA MOGELIJKHEDEN EN OP LOCATIE -->

  <!-- START - WAT ZIT ERBIJ INBEGREPEN  -->
  
  <!-- END -  WAT ZIT ERBIJ INBEGREPEN -->

  <!-- START - MENU SELECTOR  -->
  
  <!-- END -  MENU SELECTOR -->
  
  <!-- START - MENU'S  -->

    <!-- START - visaandaschelde  -->
    
    <!-- END -  visaandaschelde -->


    <!-- START - THE ROAST ROOM  -->
    
    <!-- END -  THE ROAST ROOM -->
    

    <!-- START - THE TRAVELLER  -->
    
    <!-- END -  THE TRAVELLER -->
    
  <!-- END -  MENU'S -->

  <!-- START - CONTACT  -->
  
  <!-- END -  CONTACT -->
  
  <!-- START - IMPRESSIES  -->
  
  <!-- END -  IMPRESSIES -->
  
  <!-- START - FOOTER  -->
  
  <!-- END -  FOOTER -->
  
  
</div>
</template>


<script lang='ts' >
import { defineComponent } from "@nuxtjs/composition-api";
import Navbar from "./../components/navbar.vue";
import Hero from "./../components/hero.vue";
import Overons from "./../components/overons.vue";
import Person from "./../components/person.vue";
import Partners from "./../components/partners.vue";
export default defineComponent({
 props: [],
 components: {Navbar, Hero, Overons, Person, Partners},
 setup() {
   
    const partners = [
     {name: 'Visaandeschelde', img: require('~/assets/images/partners/1.png')},
     {name: 'The Roast Room', img: require('~/assets/images/partners/2.png')},
     {name: 'The Traveller', img: require('~/assets/images/partners/3.png')}
   ]

   return {
     partners
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
 
 
