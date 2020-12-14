<template>
<div class="h-screen flex" style="" >
  <div class="flex  w-full" style="" >

    <form name='contact' method='POST' data-netlify='true'
      class="w-full flex flex-col j">
      <input type='hidden' name='form-name' value='contact'>

<!-- START - overvioew  -->
<div class="h-72 flex" >
  <img class="h-48 w-48 object-contain rounded-br-md"  src="~/assets/images/logo.png" alt="logo">
  <div class="flex justify-evenly items-center flex-1" >
    <h3 @click="stage=0" :class="[stage==0 ? 'text-green' : 'text-gold', 'transition-colors' ]" >RESTAURANT</h3>
    <h3 @click="stage=1" :class="[stage==1 ? 'text-green' : 'text-gold', 'transition-colors' ]" >PERSONEN</h3>
    <h3 @click="stage=2" :class="[stage==2 ? 'text-green' : 'text-gold', 'transition-colors' ]" >DATUM</h3>
    <h3 @click="stage=3" :class="[stage==3 ? 'text-green' : 'text-gold', 'transition-colors' ]" >CONTACT</h3>
  </div>
</div>
<!-- END -  overvioew -->

<!-- FORM CONTAINER -->
<div class="flex flex-col gap-20 flex-1 justify-center" >

<!-- START - stage 1  -->
      <div v-show="stage==0" class="flex flex-col gap-20"  >
        <h4 class="text-center font-normal" >Welk restaurant wilt u thuis?</h4>
        <input type='hidden' name='resturant' v-model="resturant">
        <ul class="flex justify-evenly w-full" >
          <li @click="setResturant(partner)" :class="[resturant==partner ? 'border-green' : 'border-white',' shadow-0 bg-white text-green font-bold px-24 py-6 rounded-lg border-3  hover:border-gold transform hover:scale-110 transition-all duration-150']"
            v-for="(partner,index) in partners" :key="index">
            <h5>{{partner.name}}</h5>
          </li>
        </ul>
      </div>
<!-- END -  stage 1 -->

<!-- START - stage 2  -->
<div v-show="stage==1">
  <h4 class="text-center" >Aantal Personen?</h4>
  <div class="max-w-5xl mx-auto" >
    <h2 class="text-center" >{{personen}}</h2>
    <input type="range" min="2" max="50" v-model='personen' class="slider" id="myRange">
  </div>
</div>
<!-- END -  stage 2 -->

<!-- START - stage 3  -->
<div v-show="stage==2" class="max-w-5xl mx-auto w-full flex flex-col gap-20" >
  <h4 class="text-center" >Selecteer een datum en tijdstip</h4>
  <DatePicker />
</div>
<!-- END -  stage 3 -->


<!-- START - STAGE 4  -->
  <div v-show="stage==3" class="flex flex-col gap-10 w-full max-w-3xl mx-auto" >

    <div class="w-full" >
      <h5>NAAM</h5>
      <input class="bg-gray py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md w-full" type="text" name="NAAM">
    </div>

    <div class="w-full" >
      <h5>E-MAIL</h5>
      <input class="bg-gray py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md w-full" type="text" name="EMAIL">
    </div>

    <div class="w-full" >
      <h5>TELEFOONNUMMER</h5>
      <input class="bg-gray py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md w-full" type="text" name="TELEFOONNUMMER">
    </div>

    <div class="w-full" >
      <h5>WOONPLAATS</h5>
      <input class="bg-gray py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md w-full" type="text" name="WOONPLAATS">
    </div>

    <div class="w-full" >
      <h6 class="font-bold">Wensen & Notities</h6>
      <textarea class="bg-gray w-full h-20 py-1 px-3 border-2 border-gray hover:border-green outline-none rounded-md" name="Wensen+Notities" ></textarea>
    </div>
    <button class="shadow-0 py-1 px-3 hover:border-green border-2 border-white rounded-lg"  type='submit'> <h4>VERSTUUR</h4> </button>

  </div>
<!-- END -  STAGE 4 -->

</div>


<!-- FOOTER -->
<div class="h-64" style="background:red;" >

</div>



    </form>
  </div>
</div>
</template>


<script lang='ts' >
import { defineComponent, ref, reactive, watchEffect } from "@nuxtjs/composition-api";
import moment from 'moment'
import DatePicker from "./austin/datePicker.vue";
const { DateTime } = require("luxon");
export default defineComponent({
 props: ['partners'],
 components: {DatePicker},
 setup() {
   const stage = ref(0)
   const resturant = ref(null)
   const personen = ref(4)

   const setResturant = (value) => {resturant.value=value;stage.value++}



   return {
     setResturant,
     stage,
     resturant,
     personen,
   }
   
 }
})


</script>


<style lang='scss'>
.styled-select select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
}

 .slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 10px; /* Specified height */
  outline: none; /* Remove outline */
  // opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
  @apply bg-gold;@apply rounded-full; 
  
}

/* Mouse-over effects */
.slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  @apply transition; @apply duration-300;
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  @apply bg-green;@apply rounded-full;@apply border-2;@apply border-white; @apply shadow-lg;
  cursor: pointer; /* Cursor on hover */
  border: 3px solid white;
  opacity: 1;
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  @apply bg-green;@apply rounded-full;@apply border-2;@apply border-white; @apply shadow-lg;
  cursor: pointer; /* Cursor on hover */
  border: 3px solid white;
}
 
//POWERED BY AUSTIN
</style>
 
 
