<template>
 <div>
   <h2>FOOTER</h2>
   <div class="relative" >

    <svg class="w-screen h-full" xmlns="http://www.w3.org/2000/svg" width="1920" height="551.555" viewBox="0 0 1920 551.555">
        <defs>
          <style>
            .cls-1 {
              fill: #072422;
            }
          </style>
        </defs>
        <path id="Path_92" data-name="Path 92" class="cls-1" d="M0,9.016S456-38.173,936-38.173,1920,9.016,1920,9.016V513.382H0Z" transform="translate(0 38.172)"/>
    </svg>

    <div class="absolute h-full top-0 w-full" >
      <div class="text-center text-white" >
        <div><img class="h-full w-full" src="~/assets/images/logo.png" alt="logo"></div>
        <ul>
          <a v-for="(social,index) in socials" :key="index"
           :href="social.url">
           <img :src="social.image" :alt="social.name"></a>
        </ul>
        doasjiosadjaoidnsao
      </div>
    </div>

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
 
 
