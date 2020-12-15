<template>
 <div class="container flex flex-col gap-20" >
   <h2 class="text-center" >IMPRESSIES</h2>
   <ul class="grid md:grid-cols-2 gap-20 relative" >
     <li v-for="(image,index) in images" :key="index">
       <img :src="image" alt=""
        class="relative duration-500 ease-in-out transition-all z-0 hover:z-20 hover:rounded-lg hover:scale-125 transform"
       >
     </li>
   </ul>
 </div>
 
</template>


<script lang='ts' >
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},

 setup() {
   const images = [
     require('~/assets/images/impressies/1.png'),
     require('~/assets/images/impressies/2.png'),
     require('~/assets/images/impressies/3.png'),
     require('~/assets/images/impressies/4.png'),
     require('~/assets/images/impressies/5.png'),
     require('~/assets/images/impressies/6.png'),
   ]

   return {
     images
   }
   
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
