<template>
<div class="container" >
  <h2 class="text-center" >PARTNERS</h2>
  <ul class="flex flex-col md:flex-row relative items-center justify-center gap-x-32 " >
    <a v-for="(partner, index) in partners" :key="index"
      :href="`#${partner.name}`" class="block transition-all transform hover:scale-125">
      <nuxt-image class="object-contain md:h-64 md:w-64 h-32 w-32" :src="partner.img" :alt="partner.name" />
    </a> 
  </ul>
</div>
</template>


<script lang='ts' >
export default {
 props: ['partners'],
 components: {},
 setup() {

   
 }
}


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
  