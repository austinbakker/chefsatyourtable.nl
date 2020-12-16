<template>
  <div class="flex relative container h-full " >
    <div class="bg-gold px-4 md:px-16 py-8 md:py-4 h-auto flex flex-col justify-evenly  mx-auto rounded-md flex-1 gap-4 " >
      <h2 class="text-center" > CONTACT</h2>
      <ul class="text-center grid grid-cols-1 gap-2" >
        <li><h5> Max Deenik</h5></li>
        <li class="scale-100 hover:font-bold hover:text-white hover:scale-125 transform transition-all" ><a  href="mailto:info@chefsatyourtable.nl"> <h5>info@chefsatyourtable.nl</h5> </a></li>
        <li class="scale-100 hover:font-bold hover:text-white hover:scale-125 transform transition-all" ><a href="tel:+31852007546"> <h5>T: +31 (0)85 200 75 46</h5> </a></li>
      </ul>
     <form name="lead"
      method="post" data-netlify="true"
      action='/bedankt'
      class="w-full h-full flex flex-col mt-4 ">
      <input type="hidden" name="form-name" value="lead" />
      <!-- <input type="text" name="NAAM"> -->
        <div class="my-2 w-full" >
          <h6>NAAM</h6>
          <input class="bg-gray py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md w-full" type="text" name="NAAM">
        </div>

        <div class="my-2 w-full" >
          <h6>EMAIL</h6>
          <input class="bg-gray py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md w-full" type="text" name="EMAIL">
        </div>

        <div class="my-2 w-full" >
          <h6>TELEFOONNUMMER</h6>
          <input class="bg-gray py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md w-full" type="text" name="TELEFOONNUMMER">
        </div>

        <div class="w-full my-2" >
          <h6 class="font-bold">WENSEN / VRAGEN</h6>
          <textarea class="bg-gray w-full h-20 py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md" name="WensenEnNotities" ></textarea>
        </div>

        <button class="shadow-lg my-4 py-4 md:py-2 px-3 border-2 border-green bg-green text-white rounded-lg hover:border-white "  type='submit'> <h4 style="color:inherit;" >VERSTUUR</h4> </button>
      </form>
      <!-- <div class="text-center" >
        <button @click="$emit('click')" class="bg-gold border-2 border-green rounded-lg px-16 py-2 hover:bg-green hover:text-gold transition-all transform hover:scale-110  " > <h4 style="color:inherit" >Aanvragen</h4> </button>
      </div> -->
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
 
 
