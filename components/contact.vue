<template>
  <div class="flex relative container h-full " >
    <div class="bg-gold px-4 md:px-16 py-8 md:py-4 h-96 md:h-auto flex flex-col justify-evenly  mx-auto rounded-md flex-1 gap-4 " >
      <h2 class="text-center" >CONTACT</h2>
      <ul class="text-center flex flex-col gap-2" >
        <li>Max Deenik</li>
        <li class="scale-100 hover:font-bold hover:text-white hover:scale-125 transform transition-all" ><a  href="mailto:info@chefsatyourtable.nl">info@chefsatyourtable.nl</a></li>
        <li class="scale-100 hover:font-bold hover:text-white hover:scale-125 transform transition-all" ><a href="tel:+31852007546">T: +31 (0)85 200 75 46</a></li>
      </ul>
      <div class="text-center" >
        <button @click="$emit('click')" class="bg-gold border-2 border-green rounded-lg px-16 py-2 hover:bg-green hover:text-gold transition-all transform hover:scale-110  " > <h4 style="color:inherit" >Aanvragen</h4> </button>
      </div>
    </div>
    <div class=" items-center hidden lg:flex " >
      <img class="h-5/6 object-contain" src="~/assets/images/contact/1.png" alt="food">
    </div>
  </div>
</template>


<script  >
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
 
 
