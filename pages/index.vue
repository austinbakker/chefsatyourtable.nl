<template>
<div class="relative overflow-x-hidden" >

<div class="fixed top-0 z-50 w-full h-screen" v-show="showContactForm" >
  <Lead  @click="showContactForm=false" :partners='partners' />
</div>
  <!-- <Lead /> -->

<div class="absolute top-0 w-screen z-30" >
  <Navbar :socials='socials' />
</div> 

<div class="fixed top-0 right-0 z-20 " >
  <button @click="showContactForm=true" class="bg-green px-8 py-2 rounded-bl-lg font-bold text-white shadow-lg" >Aanvragen</button>
</div>

<!-- NOTE responsive -->
<Hero @click="showContactForm=true" />
<!-- <Lead /> -->
<div class="my-12" id="overons" ><Overons /></div>


<!-- NOTE responsive -->
<div class="my-12" id="person" ><Person @click="showContactForm=true" /></div>
    

<!-- NOTE responsive -->
<div class="my-12" id="partner" ><Partners :partners='partners'/></div>
    
<!-- NOTE responsive -->
<div class="h-96 w-full " >
  <img class=" h-full md:h-auto object-cover md:object-cover w-full" src="~/assets/images/food.png" alt="food">
</div>
<!-- END PARTNERS -->


<!-- NOTE responsive -->
<div class="my-8" id="hoewerkthet" ><HoeWerktHet /></div>


<!-- NOTE responsive -->
<div class="my-8" id="ExtraMogelijkhedenLocatie" ><ExtraMogelijkhedenLocatie /></div>


<!-- NOTE responsive -->
<div class="my-8" id="#Benefits" ><Benefits /></div>


<!-- NOTE responsive -->
<div class="" id="Menus" ><Menus /></div>



<!-- NOTE responsive -->
<div class="my-48" id="contact" ><Contact @click="showContactForm=true" /></div>


<!-- NOTE responsive -->
<div class="my-24" id="Impressies" ><Impressies /></div>

<!-- NOTE responsive -->
<div class="mt-24" id="footer" ><Footer :socials='socials' /> </div>

  
</div>
</template>


<script  >
import { defineComponent, ref } from "@nuxtjs/composition-api";
import Navbar from "./../components/navbar.vue";
import Hero from "./../components/hero.vue";
import Overons from "./../components/overons.vue";
import Person from "./../components/person.vue";
import Partners from "./../components/partners.vue";
import HoeWerktHet from "./../components/hoewerkthet.vue";
import ExtraMogelijkhedenLocatie from "./../components/extramogelijkhedenlocatie.vue";
import Benefits from "./../components/benefits.vue";
import Menus from "./../components/menus.vue";
import Contact from "./../components/contact.vue";
import Impressies from "./../components/impressies.vue";
import Footer from "./../components/footer.vue";
// import Lead from "./../components/lead.vue";
import Lead from "./../components/contactform.vue";
export default defineComponent({
 props: [],
 components: {
   Footer,
   HoeWerktHet,
   Lead,
   Navbar, Hero, Overons, Person, Partners,ExtraMogelijkhedenLocatie,Benefits,Menus,Contact,Impressies},
 setup() {
    const showContactForm = ref(false)
    const partners = [
     {name: 'Visaandeschelde', img: require('~/assets/images/partners/1.png')},
     {name: 'The Traveller', img: require('~/assets/images/partners/3.png')},
    ]

   const socials = [
     {
       name: 'Instagram',
       image: require('~/assets/images/socials/instagram.svg'),
       url: 'https://www.instagram.com/chefsatyourtable/'
     },
     {
       name: 'Facebook',
       image: require('~/assets/images/socials/facebook.svg'),
       url: 'https://www.facebook.com/ChefsatyourTable'
     },
     {
       name: 'Linkedin',
       image: require('~/assets/images/socials/linkedin.svg'),
       url: 'https://www.linkedin.com/company/chefs-at-your-table/'
     },
   ]

   return {
     partners,
     socials,
     showContactForm
   }
 }
})


</script>


<style lang='scss' >
 *, *::before, *::after{
   box-sizing: border-box;
}
 
.container{
  width:80%;
  @apply mx-auto;
}
html {
  scroll-behavior: smooth;
}
//POWERED BY AUSTIN
</style>
 
 
