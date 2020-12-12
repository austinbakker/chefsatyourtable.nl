<template>
  <div class="container" >
    <h2 class="text-center" >HOE WERKT HET</h2>
    
    <div v-for="(item,index) in items" :key="index"
    v-show="selected==index"
      class="grid gap-20 relative" style="grid-template-columns: 1fr 1fr">
        <!-- IMG -->
        <div class="absolute h-full w-64 " style="left:-15vw;" >
          <img class="absolute -left-1/4 h-64 object-cover" :src="item.image" alt="image of food">
        </div>
        <!-- SELECTOR -->
        <ul ref="list" class="relative flex w-1/2 mx-auto flex-col justify-evenly h-64" >
          <li class="flex items-center relative " v-for="(item,indexItem) in items"
            :key="indexItem"
            @click="selected=indexItem">

            <div v-if="indexItem<items.length-1" class=" w-4 top-4 absolute flex items-center" :style="{height: distanceBetween}" >
              <div class="w-0.5 bg-gold h-full mx-auto rounded-full" ></div>
            </div>
            <div :class="[selected==indexItem ? 'bg-green' : 'bg-white' ,' z-10 transition-all w-4 h-4 border-green border-2 rounded-full shadow-xl']" ></div>
            <div :class="[selected==indexItem ? 'font-bold' : '', 'ml-6 transition-all']" >{{item.name}}</div>
          </li>
        </ul>
        <!-- CONTENT -->
        <div class="flex flex-col justify-center" >
          <p v-for="(content,indexContent) in item.content" :key="indexContent" >{{content}}</p>
        </div>
    </div>
  </div>
</template>


<script lang='ts' >
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
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
    const distanceBetween = ref('0px')
    onMounted(() => {
      const liList = list.value[0].getElementsByTagName('li')
      distanceBetween.value=liList[1].getBoundingClientRect().top - liList[0].getBoundingClientRect().top + 'px'
    })
   const selected = ref(0)
   return {
     selected,
     items,
     distanceBetween,
     list
   }
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
