<template>
  <div class="flex relative containe h-full" >
    <div class="bg-gold px-16 py-2 flex flex-col justify-evenly" >
      <h2>CONTACT</h2>
      <ul class="text-center flex flex-col gap-2" >
        <li>Max Deenik</li>
        <li class="scale-100 hover:font-bold hover:scale-125 transform transition-all" ><a  href="mailto:info@chefsatyourtable.nl">info@chefsatyourtable.nl</a></li>
        <li class="scale-100 hover:font-bold hover:scale-125 transform transition-all" ><a href="tel:+31852007546">T: +31 (0)85 200 75 46</a></li>
      </ul>
      <div class="text-center" >
        <button @click="$emit('click')" class="bg-gold border-2 border-green rounded-lg px-16 py-2 hover:bg-green hover:text-gold transition-all transform hover:scale-110  " > <h4 style="color:inherit" >Aanvragen</h4> </button>
      </div>
    </div>
    <div class="flex items-center " >
      <img class="h-5/6 object-contain" src="~/assets/images/contact/1.png" alt="food">
    </div>
  </div>
</template>


<script lang='ts' >
export default {
 props: [],
 components: {},
 setup() {
   
   
 }
}


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
