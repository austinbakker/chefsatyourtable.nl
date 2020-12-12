<template>
<div>
  <!-- START - NAVBAR  -->
  <div class="absolute top-0 w-screen" >
    <Navbar />
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
  <div class="h-screen">
    testing this item
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
export default defineComponent({
 props: [],
 components: {Navbar, Hero, Overons, Person, Partners, HoeWerktHet,ExtraMogelijkhedenLocatie},
 setup() {
   
    const partners = [
     {name: 'Visaandeschelde', img: require('~/assets/images/partners/1.png')},
     {name: 'The Traveller', img: require('~/assets/images/partners/3.png')},
     {name: 'The Roast Room', img: require('~/assets/images/partners/2.png')}
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
 
 
