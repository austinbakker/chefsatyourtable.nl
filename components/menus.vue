<template>
<div>
<!-- MENU SELECTOR -->
<ul>
  <li class="flex flex-col gap-24" v-for="(resturant,index) in resturants" :key="index" >
    <!-- LOGO -->
    <div><nuxt-image class="mx-auto w-48 h-48 md:w-96 md:h-96 object-contain" width='500' height='200' :src="resturant.image" :alt="resturant.name" /></div>

    <!-- MENU -->
    <div class="flex flex-col gap-10 shadow-2xl w-5/6 md:w-4/6 mx-auto py-10 px-4 md:px-24 rounded-lg" >
      <h3 class="text-center" >{{resturant.menu.name}}</h3>
      <ul class="flex flex-col gap-2"  >
        <li :style="{color: resturant.menu.color}" v-for="(item, indexItem) in resturant.menu.items" :key="indexItem" >{{item}}</li>
      </ul>
        <p :style="{color: resturant.menu.color}" >{{resturant.menu.context}}</p>
    </div>

    <!-- SECOND MENU -->
    <div class="flex flex-col gap-24 mx-auto w-5/6 md:w-3/6 shadow-lg rounded-lg py-12 px-4 md:px-28" >
      <h3 class="text-center" >MENU</h3>
      <p class="text-center" >Wilt u het menu liever zelf samenstellen, bekijk dan de mogelijkheden op de A la Carte kaart. U kunt het menu aanvullen met een bijpassend wijnarrangement of zelf uw eigen wijnen kiezen. Kijk hiervoor op de wijnkaart van {{resturant.name}}</p>
      <div><nuxt-image class="mx-auto" :src="resturant.menu2.image" :alt="resturant.name" /></div>
      <div class="text-center" >
        <a :href="`/${resturant.pdf}`" target="_blank">
          <button class="mx-auto shadow-md rounded-md py-2 px-4 font-bold transform hover:scale-110 transition-all hover:bg-green hover:text-white" >A la Carte + Wijnkaart</button>
        </a>
      </div>
    </div>
  </li>
</ul>

</div>
</template>


<script lang='ts' >
export default {
 props: [],
 components: {},
 setup() {
   const resturants = [
     {
       name: 'Visaandeschelde',
       image: 'images/partners/1.png',
       pdf: 'visaandeschelde.pdf',
       menu: {
         name: 'Culi-VIS Menu',
         color: '#004371',
         fontFamily: 'TypefaceSeven',
         items: [
           'Brood en kruidenmayonaise',
           'Huisgerookte zalm - wakame - hoisin - wasabi - yuzu',
           'Salade Visaandeschelde - kreeft - eendenlever - truffel - balsamico',
           'Tonijntartaar - cornichon - kappertjes - mosterd - sjalot - kwartelei',
           'Cannelloni à la bouillabaisse - vis - schaal- en schelpdieren - rouille - gruyère',
           'Coquille - brandade - aardpeer - truffel',
           'Vis van de markt - artisjok - mousseline - barigoule',
           'Chocolade - koffie',
           'Lemon pie - meringue',
           'Zoetigheid voor bij de koffie'
         ],
         context: 'U kunt het Culi-Vis menu aanvullen met een bijpassend wijnarrangement of zelf uw eigen wijnen kiezen. Kijk hiervoor op de wijnkaart van Visaandeschelde.'
       },
       menu2: {
          name: "menu",
          image: 'images/menu/1.png'
      },
     },
     {
       name: 'The Roast Room',
       image: 'images/partners/2.png',
       pdf: 'theroastroom.pdf',
       menu: {
         name: 'CULI-ROAST MENU',
         color: '#000000',
         fontFamily: 'Futura PT',
         items: [
           'Brood en kruidenmayonaise',
           'Terrine de campagne - kweepeer - mierikswortel',
           'Tarte tatin - appel - eendenlever - vijgen - walnoot',
           'Beef Tataki - ponzu -  knoflook - bosui - rode peper',
           'Rouleaux van maiskip - paksoi - bundelzwam - champignon - Tom Kha Kai',
           'Cannelloni - sukade - spinazie è la crème - gruyère',
           'Bavette - mousseline - bospeen - marloeskes - truffel-jus',
           'Chocolade - passievrucht',
           'Ananas - karamel',
           'Zoetigheid voor bij de koffie'
         ],
         context: 'U kunt het Culi-Roast menu aanvullen met een bijpassend wijnarrangement of zelf uw eigen wijnen kiezen. Kijk hiervoor op de wijnkaart van The Roast Room.'
       },
       menu2: {
          name: "menu",
          image: 'images/menu/2.png'
      },
     },
     {
       name: 'The Traveller',
       image: 'images/partners/3.png',
       pdf: 'thetraveller.pdf',
       menu: {
         name: 'The Traveller Menu',
         color: '#000000',
         fontFamily: 'Future PT',
         items: [
           'Flatbread - hummus',
           'Coquille - zwarte bonen - prei - gember',
           'Burrata - tomaat - spinazie - basilicum',
           'Sashimi - zalm - tonijn - wakame - gember - wasabi',
           'Peking duck - bao - komkommer - hoisin',
           'Bavette - zoete aardappel - asperge - chimichurri',
           'Chicken teriyaki - kip - noodles - boksoi - teriyaki',
           'Witte chocolade - ananas - kokos',
           'Lemon pie - citrus - meringue',
           'Friandise'
         ],
         context: 'U kunt het Traveller menu aanvullen met een bijpassend wijnarrangement of zelf uw eigen wijnen kiezen. Kijk hiervoor op de wijnkaart van The Traveller.'
       },
       menu2: {
          name: "menu",
          image: 'images/menu/3.png'
      },
     },
   ]

   return {
     resturants
   }
 }
}


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
