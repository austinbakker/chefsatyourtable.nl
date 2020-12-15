<template>
 <div>

   <div class="relative" >
    <div class="bg-green h-12" ></div>


    <div class=" h-full top-0 w-full " >
      <div class="text-center text-white flex flex-col gap-4 z-20 relative " >
        <div class="text-center mt-5" ><img class="mx-auto w-32 h-32 object-contain" src="~/assets/images/logo.png" alt="logo"></div>
        <ul class="flex h-8 justify-center gap-8" >
          <a class="inline-block h-full" v-for="(social,index) in socials" :key="index"
           :href="social.url">
           <img class="inline h-full " :src="social.image" :alt="social.name"></a>
        </ul>
        <div class="text-white" >©2020 Chefs At Your Table</div>
        <ul class="flex flex-wrap max-w-md mx-auto gap-1 justify-center">
          <a class="text-gold hover:text-white transition-all" href="/voorwaarden.pdf" target="_blank" rel="noopener noreferrer">Algemene Voorwaarden</a>
          |
          <a class="text-gold hover:text-white transition-all" href="/cookies.pdf" target="_blank" rel="noopener noreferrer">Cookies</a>
          |
          <a class="text-gold hover:text-white transition-all" href="https://rotisserie.theroastroom.nl/" target="_blank" rel="noopener noreferrer">The Roast Room</a>
          |
          <a class="text-gold hover:text-white transition-all" href="https://visaandeschelde.nl/" target="_blank" rel="noopener noreferrer">Visaandeschelde</a>
          |
          <a class="text-gold hover:text-white transition-all" href="https://www.thetravelleramsterdam.com/" target="_blank" rel="noopener noreferrer">The Traveller</a>
        </ul>
      </div>
    </div>
    
    <div  class="absolute top-0 h-full w-full z-0 bg-green" > </div>
    <div class="bg-green h-12" ></div>
    
    <!-- <div  class="absolute top-0 h-full w-full z-0" >
      <svg class="absolute top-0 z-0 w-screen h-full object-cover" xmlns="http://www.w3.org/2000/svg" width="1920" height="551.555" viewBox="0 0 1920 551.555">
          <defs>
            <style>
              .cls-1 {
                fill: #072422;
              }
            </style>
          </defs>
          <path id="Path_92" data-name="Path 92" class="cls-1" d="M0,9.016S456-38.173,936-38.173,1920,9.016,1920,9.016V513.382H0Z" transform="translate(0 38.172)"/>
      </svg>
    </div> -->





   </div>
   <!-- <div class="my-element-to-clip  h-screen" style="background:blue" ></div>
   <div class="relative" >

    <svg width="1920" height="551.555" viewBox="0 0 1920 551.555">
      <defs>
        <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
          <path id="Path_92" data-name="Path 92" class="cls-1" d="M0,9.016S456-38.173,936-38.173,1920,9.016,1920,9.016V513.382H0Z" transform="translate(0 38.172)"/>
        </clipPath>
      </defs>
    </svg>
   </div> -->
 </div>
</template>


<script lang='ts' >
export default {
 props: [
   'socials'
 ],
 components: {},
 setup() {
   
   
 }
}


</script>


<style lang='scss' >
 
.my-element-to-clip {
  clip-path: url(#myCurve);
}
//POWERED BY AUSTIN
</style>
 
 
