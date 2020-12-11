<template>
<div>
  <h2>PARTNERS</h2>
  <ul class="flex relative items-center container justify-center gap-28 h-12" >
    <a class="h-full" v-for="(partner, index) in partners" :key="index">
      <img style="height:100%;" class="object-contain" :src="partner.img" :alt="partner.name">
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
 
 
  