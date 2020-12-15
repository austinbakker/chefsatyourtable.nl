<template>
<div class="relative overflow-x-hidden" >

  <div class="fixed top-0 z-50 w-full h-screen" v-show="showContactForm" >
    <ContactForm @click="showContactForm=false" :partners='partners' />
  </div>
  <!-- START - NAVBAR  -->
    <div class="absolute top-0 w-screen" >
      <Navbar :socials='socials' />
    </div> 
  <!-- END -  NAVBAR -->
  
  <!-- HERO -->
    <Hero />
  <!-- END HERO -->

<div class="my-12" id="overons" ><Overons /></div>


<!-- NOTE responsive -->
<div class="my-12" id="person" ><Person /></div>
    

<!-- NOTE responsive -->
<div class="my-12" id="partner" ><Partners :partners='partners'/></div>
    
<!-- TODO fix image being absolute -->
<!-- <div>
<img class="h-full md:h-auto object-cover md:object-contain" src="~/assets/images/food.png" alt="food">
</div> -->
<!-- END PARTNERS -->


<!-- NOTE responsive -->
<div class="my-8" id="hoewerkthet" ><HoeWerktHet /></div>


<!-- NOTE responsive -->
<div class="my-8" id="ExtraMogelijkhedenLocatie" ><ExtraMogelijkhedenLocatie /></div>


<!-- NOTE responsive -->
<div class="my-8" id="#Benefits" ><Benefits /></div>


<!-- NOTE responsive -->
<div class="my-8" id="Menus" ><Menus /></div>



<!-- NOTE responsive -->
<div class="my-8" id="contact" ><Contact @click="showContactForm=true" /></div>


<!-- NOTE responsive -->
<div class="my-24" id="Impressies" ><Impressies /></div>

<!-- NOTE responsive -->
<div class="my-24" id="footer" ><Footer :socials='socials' /> </div>

  
</div>
</template>


<script lang='ts' >
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
import ContactForm from "./../components/contactform.vue";
export default defineComponent({
 props: [],
 components: {
   ContactForm,
   Footer,
   Navbar, Hero, Overons, Person, Partners, HoeWerktHet,ExtraMogelijkhedenLocatie,Benefits,Menus,Contact,Impressies},
 setup() {
    const showContactForm = ref(false)
    const partners = [
     {name: 'Visaandeschelde', img: require('~/assets/images/partners/1.png')},
     {name: 'The Traveller', img: require('~/assets/images/partners/3.png')},
     {name: 'The Roast Room', img: require('~/assets/images/partners/2.png')}
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
       url: 'https://www.linkedin.com/in/max-deenik-86a498187/?originalSubdomain=nl'
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
 
 
