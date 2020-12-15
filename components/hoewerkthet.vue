<template>

<div id="hoewerkthet-1234" class="h-screen flex flex-col justify-around md:justify-evenly bg-white" >
<h2 class="text-center" >HOE WERKT HET 
</h2>
          
<div class="grid  gap-4 relative container custom-grid " style=""  > 

  <!-- IMAGES -->
  <div class="relative" >
    <transition name="fade" mode="out-in" >
      <template v-for="(item,index) in items"  >

        <!-- desktop version -->
        <div v-if="progress < (index+1)*33 && progress >index*33" :key="index" class="relative md:absolute mx-auto w-24 h-24 md:w-64 md:h-64 custom-image-responsive" style="" >
          <img class="relative md:absolute md:-left-1/4 h-full object-cover" :src="item.image" alt="image of food">
        </div>
      </template>
    </transition>
  </div>

  <!-- SELECTOR -->
  <ul ref="list" class="relative flex w-1/2 mx-auto flex-col justify-evenly h-64" >
    <li class="flex items-center relative " v-for="(item,indexItem) in items"
      :key="indexItem"
      @click="selected=indexItem">

      <div v-show="indexItem<items.length-1" class=" w-4 top-4 absolute flex items-center" :style="{height: distanceBetween}" >
        <div :class="[progress>indexItem*33 ? 'bg-green' : 'bg-gold' ,'w-0.5 transition-all duration-500 h-full mx-auto rounded-full']" ></div>
      </div>
      <div :class="[progress>indexItem*33 ? 'bg-green' : 'bg-white' ,'duration-500 z-10 transition-all w-4 h-4 border-green border-2 rounded-full shadow-xl']" ></div>
      <div :class="[progress>indexItem*33 ? 'font-bold' : '', 'duration-500 ml-6 transition-all']" >{{item.name}}</div>
    </li>
  </ul> 

  <!-- CONTENT -->
  <transition name='fade' mode="out-in" >
    <template v-for="(item,index) in items"   >
      <div :key='index' v-if="progress < (index+1)*33 && progress >index*33" class="flex flex-col justify-center" ><p  v-for="(content,indexContent) in item.content" :key="indexContent" >{{content}}<br><br></p></div>
    </template>
  </transition>

</div>
</div>
</template>


<script lang='ts' >
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
export default defineComponent({
 props: [],
 components: {},

 setup() {

   const items = [
     {
       name: 'Voorafgaand',
       image: require('~/assets/images/hoewerkthet/1.png'),
       content: [
         'Op het vooraf besproken tijdstip meldt Chefs At Your Table zich bij u thuis of op locatie. Hierbij hebben wij het passende servies, glaswerk, bestek en linnengoed meegenomen om uw tafel om te toveren tot een sfeervol restaurant.',
         'Wij brengen de keuken in gereedheid en bergen alle ingrediënten op. Vervolgens zal de Chef zich terugtrekken in de keuken om het menu te bereiden. Terwijl uw huiskamer zich langzaam vult met verrukkelijke geuren heeft u de tijd om heerlijk bij te praten met uw gezelschap onder het genot van een aperitief.'
       ]
     },
     {
       name: 'Tijdens',
       image: require('~/assets/images/hoewerkthet/2.png'),
       content: [
         'Zodra alle gasten zijn gearriveerd, beginnen we met een amuse om de smaakpapillen op gang te brengen. Daarna zullen wij het menu voortzetten met de volgende gangen. Tijdens het eten voorziet onze gastvrouw of gastheer u van de bijpassende wijnen en licht de Chef ieder gerecht toe. Hier hebben de gasten alle mogelijkheid om vragen te stellen. Heeft u behoefte aan meer privacy? Dan stellen wij ons terughoudend op.',
       ]
     },
     {
       name: 'Na afloop',
       image: require('~/assets/images/hoewerkthet/3.png'),
       content: [
         'Terwijl u nog lekker natafelt, zorgen wij ervoor dat uw huiskamer en keuken worden opgeruimd. U heeft zelf geen omkijken naar de afwas en na afloop van het diner ziet uw keuken er weer spic en span uit.',
       ]
     }
   ]
    const list = ref(null)
    const progress=ref(0)
    const distanceBetween = ref('0px')
    onMounted(() => {
      const liList = list.value.getElementsByTagName('li')
      distanceBetween.value=liList[1].getBoundingClientRect().top - liList[0].getBoundingClientRect().top + 'px'

      // NOTE gives error
      // gsap.registerPlugin(ScrollTrigger);
      // // console.log('gasp',gsap)
      // ScrollTrigger.create({
      //   trigger: '#hoewerkthet-1234',
      //   markers: true,
      //   scrub:1,
      //   pin:true,
      //   snap: 1/2.97,
      //   onUpdate: (self) => {
      //     let progressCheck = Number(self.progress.toFixed(3))*100;
      //     console.log(progressCheck)
      //     if(!progressCheck) {
      //       progress.value=1;
      //     } else if(progressCheck>99) {progress.value=90}
      //     else{progress.value=progressCheck}
      //   },
      //   // start: "center center",
      //   end: '1300px'
      // })
    })
   const selected = ref(0)
   return {
     selected,
     items,
     distanceBetween,
     list,
     progress
   }
 },
})


</script>


<style lang='scss' >
 .fade-enter-active, .fade-leave-active {
  transition: all 500ms;
  // max-width: 0px;
}
.fade-enter-active{
  // transition-delay: 700ms;
  // max-width: 2000px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.custom-grid{
  @media (min-width: 768px) {
    grid-template-columns: 10% 1fr 40%;
    grid-template-rows: 1fr;
  }
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1fr 40%;
}
.custom-image-responsive{
    @media (min-width: 768px) {
    left:-15vw;

  }
    left:0;

}
//POWERED BY AUSTIN
</style>
 
 
