<template>
<div class="flex flex-col lg:flex-row container relative" >
<!-- <div class="flex flex-col lg:flex-row  relative" > -->
  <div class="flex flex-col">
  <div class="h-32" ></div>
  <div class="flex flex-col " >
    <h2 class="text-center md:text-left" >INCLUSIEF</h2>
    <ul class="my-12 flex flex-wrap items-center justify-center md:justify-start" >
      <li v-for="(item,index) in items" :key="index" class="mx-6 my-2" >
        <img class="mx-auto h-16 w-16 object-contain" :src="item.image" :alt="item.name">
        <div class="mt-4 text-center" >{{item.name}}</div>
      </li>
    </ul>
  </div>
  <div class="h-0 md:h-16" ></div>
  </div>

  <div class="w-96 flex h-auto relative "  >
    <!-- <img class="block lg:hidden object-contain"   src="~/assets/images/benefits/food.png" alt="food"> -->
    <img class="hidden lg:block relative h-full object-contain" style="min-width:200%;"   src="~/assets/images/benefits/food.png" alt="food">
  </div>

</div>
</template>


<script  >
export default {
 props: [],
 components: {},
 setup() {
   const items = [
    //  {
    //    name: "Service",
    //    image: require('~/assets/images/benefits/1.png')
    //  },
     {
       name: "Bestek",
       image: require('~/assets/images/benefits/2.png')
     },
     {
       name: "Serviesgoed",
       image: require('~/assets/images/benefits/3.png')
     },
     {
       name: "Glazen",
       image: require('~/assets/images/benefits/4.png')
     },
     {
       name: "Linnen",
       image: require('~/assets/images/benefits/5.png?resize&size=300')
     }
   ]
   return{
     items
   }
 }
}


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
