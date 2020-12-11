<template>
<div>
  <!-- START - NAVBAR  -->
  <Navbar />
  <!-- END -  NAVBAR -->
  
  <!-- HERO -->
  <Hero />
  <!-- END HERO -->

  <!-- OVER ONS -->
  <Overons />
  <!-- END OVER ONS -->

  <!-- MAX -->
  <!-- END MAX -->

  <!-- PARTNERS -->
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
export default defineComponent({
 props: [],
 components: {Navbar, Hero, Overons},
 setup() {
   
   
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
 
 
