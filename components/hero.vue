<template>
  <div class="h-screen relative" >
    <!-- START - IMAGES  -->
    <div ref='images' class="" >
      <transition name="slide-fade" v-for="(image,index) in images" :key="index">
        <img 
          class="absolute top-0 left-0"
          v-show="selected==index"
          :src="image" alt="hero image 1">
      </transition>
    </div>
    <!-- END -  IMAGES -->
    
    <!-- START - SLIDER  -->
    <div class="absolute z-10 bottom-16 w-screen flex place-items-center " >
      <ul class=" bg-green inline-flex mx-auto rounded-full justify-center place-items-center gap-10 py-2 px-6" >
        <li
          v-for="(image,index) in images.length" :key="index"
          :class="[selected==index ? 'opacity-25' : 'opacity-100', 'w-24 h-2 bg-gold rounded-full hover:opacity-100']"
          @click="selected=index" ></li>
      </ul>
    </div>
    <!-- END -  SLIDER -->


  </div>
</template>

<script lang='ts' >
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},
 setup() {
   const selected = ref(0)
    const images = [
      require('~/assets/images/hero/1.jpg'),
      require('~/assets/images/hero/2.jpg'),
      require('~/assets/images/hero/3.jpg'),
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
 
 
