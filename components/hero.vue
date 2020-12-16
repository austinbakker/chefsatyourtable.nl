<template>
  <div class="h-screen relative" >
    <!-- START - IMAGES  -->
    <div ref='images' class="h-full w-screen overflow-hidden" >
      <transition name="slide-fade" v-for="(image,index) in images" :key="index">
        <!-- <nuxt-image class="absolute top-0 left-0 object-cover w-full h-full overflow-hidden" sizes="300,300:600,600:900" v-show="selected==index" :src="image" alt="hero image 1" /> -->
        <img 
          class="absolute top-0 left-0 object-cover w-full h-full overflow-hidden"
          v-show="selected==index"
          :src="image" alt="hero image 1">
      </transition>
    </div>
    <!-- END -  IMAGES -->
    
    <!-- CTA -->
    <!-- START - SLIDER  -->
    <div class="absolute z-10 bottom-16 w-screen flex flex-col place-items-center " >
    <div class="mb-12" ><a href="/contact"><button class="bg-white border-green border-2 md:h-12 md:w-96 px-6 py-2 rounded-lg shadow-xl hover:bg-green hover:text-white font-bold" >Aanvragen</button></a></div>
      <ul class=" bg-green inline-flex mx-auto rounded-full justify-center place-items-center 0 py-2 px-6" >
        <li
          v-for="(image,index) in images.length" :key="index"
          :class="[selected==index ? 'opacity-100' : 'opacity-25', 'mx-4 transition-all w-12 md:w-24 h-2 bg-gold rounded-full ']"
          @click="selected=index" ></li>
      </ul>
    </div>
    <!-- END -  SLIDER -->


  </div>
</template>

<script  >
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},
 setup() {
   const selected = ref(0)
    const images = [
      require('~/assets/images/hero/1.jpg?resize&size=1920'),
      require('~/assets/images/hero/2.jpg?resize&size=1920'),
      require('~/assets/images/hero/3.jpg?resize&size=1920'),
    ]


   return {
     selected,
     images
   }
   
 }
})


</script>


<style lang='scss' >
 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
 
//POWERED BY AUSTIN
</style>
 
 
