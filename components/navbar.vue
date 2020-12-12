<template>
  <nav class="flex h-32 bg-green items-center px-12" >
    <!-- START - LOGO  -->
    <div class="flex-grow relative" >
      <a href="#top">
        <img class="absolute object-contain top-0 h-48 shadow-xl transition-all transform scale-100 hover:scale-125" src="~/assets/images/logo.png" alt="logo">
      </a>
    </div>
    <!-- END -  LOGO -->
    

    <!-- START - ITEMS  -->
      <div class="text-gold flex gap-5 items-center" style="font-family: GlacialIndifferenceBold"  >
        <a class="transition-all transform scale-100 hover:scale-125" href="">OVER ONS</a>
        <a class="transition-all transform scale-100 hover:scale-125" href="">PARTNERS</a>
        <a class="transition-all transform scale-100 hover:scale-125" href="">HOE WERKT HET</a>
        <a class="transition-all transform scale-100 hover:scale-125" href="">MENU</a>
        <a class="transition-all transform scale-100 hover:scale-125" href="">CONTACT</a>
        <a class="transition-all transform scale-100 hover:scale-125" href="">IMPRESSIES</a>
        <a href="https://www.instagram.com/chefsatyourtable/"><img class="h-4 w-4 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/instagram.svg" alt="Instagram"></a>
        <a href=""><img class="h-4 w-4 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/facebook.svg" alt="Facebook"></a>
        <a href="https://www.linkedin.com/in/max-deenik-86a498187/?originalSubdomain=nl"><img class="h-4 w-4 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/linkedin.svg" alt="Linkedin"></a>
    </div>
    <!-- END -  Items -->
          
  </nav>
</template>


<script lang='ts' >
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},
 setup() {
   
   
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
