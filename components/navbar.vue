<template>
<div class="z-20 relative" >

  <nav class="hidden md:flex h-32 bg-green items-center px-12" >
    <!-- START - LOGO  -->
    <div class="flex-grow relative" >
      <a href="#top">
        <img class="absolute object-contain top-0 h-48 shadow-xl transition-all transform scale-100 hover:scale-125" src="~/assets/images/logo.png" alt="logo">
      </a>
    </div>
    <!-- END -  LOGO -->
    

    <!-- START - ITEMS  -->
      <div class="text-gold flex  items-center" style="font-family: GlacialIndifferenceBold"  >
        <a class="transition-all transform scale-100 mx-4 hover:scale-125" href="#overons">OVER ONS</a>
        <a class="transition-all transform scale-100 mx-4 hover:scale-125" href="#partner">PARTNERS</a>
        <a class="transition-all transform scale-100 mx-4 hover:scale-125" href="#hoewerkthet">HOE WERKT HET</a>
        <a class="transition-all transform scale-100 mx-4 hover:scale-125" href="#Menus">MENU</a>
        <a class="transition-all transform scale-100 mx-4 hover:scale-125" href="#contact">CONTACT</a>
        <a class="transition-all transform scale-100 mx-4 hover:scale-125" href="#Impressies">IMPRESSIES</a>
        <a class="mx-4" v-for="(social,index) in socials" :key='index' :href="social.url">
          <img :src="social.image" :alt="social.name" class="h-4 w-4  transition-all transform scale-100 hover:scale-125">
        </a>
        <!-- <a href="https://www.instagram.com/chefsatyourtable/"><img class="h-4 w-4 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/instagram.svg" alt="Instagram"></a> -->
        <!-- <a href="https://www.facebook.com/ChefsatyourTable"><img class="h-4 w-4 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/facebook.svg" alt="Facebook"></a> -->
        <!-- <a href="https://www.linkedin.com/in/max-deenik-86a498187/?originalSubdomain=nl"><img class="h-4 w-4 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/linkedin.svg" alt="Linkedin"></a> -->
      </div>
    <!-- END -  Items -->

    <!-- START - MOBIEL Items  -->
  </nav>
  <nav class="md:hidden flex justify-between h-32 bg-green items-center px-12">
    <img class="object-contain top-0 h-20  transition-all transform scale-100 hover:scale-125" src="~/assets/images/logo.png" alt="logo">
    <img @click="menu=!menu" class="w-8 h-8" src="~/assets/images/navbar/hamburger.svg" alt="hambuger menu">
  </nav>
    <!-- END -  MOBIEL Items -->

    <!-- START - mobiel menu  -->
    <div class="absolute bg-green w-screen" >
      <transition name="fade">
        <div v-if="menu" class=" min-h-screen h-screen container flex flex-col text-center text-white" >
          <div class="h-32"></div> <!-- NAVBAR SPACER -->
          <a @click="menu=!menu" class="my-4 transition-all transform scale-100 hover:scale-125 " href="#overons">OVER ONS</a>
          <a @click="menu=!menu" class="my-4 transition-all transform scale-100 hover:scale-125" href="#partner">PARTNERS</a>
          <a @click="menu=!menu" class="my-4 transition-all transform scale-100 hover:scale-125" href="#hoewerkthet">HOE WERKT HET</a>
          <a @click="menu=!menu" class="my-4 transition-all transform scale-100 hover:scale-125" href="#Menus">MENU</a>
          <a @click="menu=!menu" class="my-4 transition-all transform scale-100 hover:scale-125" href="#contact">CONTACT</a>
          <a @click="menu=!menu" class="my-4 transition-all transform scale-100 hover:scale-125" href="Impressies">IMPRESSIES</a>
          <div class="flex justify-evenly mt-12" >
            <a @click="menu=!menu" href="https://www.instagram.com/chefsatyourtable/"><img class="h-8 w-8 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/instagram.svg" alt="Instagram"></a>
            <a @click="menu=!menu" href="https://www.facebook.com/ChefsatyourTable"><img class="h-8 w-8 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/facebook.svg" alt="Facebook"></a>
            <a @click="menu=!menu" href="https://www.linkedin.com/in/max-deenik-86a498187/?originalSubdomain=nl"><img class="h-8 w-8 transition-all transform scale-100 hover:scale-125" src="~/assets/images/socials/linkedin.svg" alt="Linkedin"></a>
          </div>
        </div>
      </transition>
    </div>
    <!-- END -  mobiel menu -->
</div>
    
          
</template>


<script lang='ts' >
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
 props: ['socials'],
 components: {},
 setup() {

  // const disableScroll = () => { 
  //     // Get the current page scroll position 
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  //     const scrollLeft =  window.pageXOffset || document.documentElement.scrollLeft, 

  //         // if any scroll is attempted, 
  //         // set this to the previous value 
  //         window.onscroll = function() { 
  //             window.scrollTo(scrollLeft, scrollTop); 
  //         }; 
  // };

  // const enableScroll = () => { 
  //     window.onscroll = function() {}; 
  // } 


   const menu = ref(false)
   
   return{
     menu
   }
   
 }
})


</script>


<style lang='scss' module>
 
 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
//POWERED BY AUSTIN
</style>
 
 
