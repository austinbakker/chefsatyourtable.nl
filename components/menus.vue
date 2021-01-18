<template>
<div>
<!-- MENU SELECTOR -->
<ul>
  <li :id="`${resturant.name}`" class="grid grid-cols-1 gap-4" v-for="(resturant,index) in resturants" :key="index" >
    <!-- LOGO -->
    <div><img class="mx-auto w-64 h-64 md:w-96 md:h-96 object-contain" :src="resturant.image" :alt="resturant.name"></div>

    <!-- MENU -->
    <div class="grid grid-cols-1 gap-10 shadow-2xl w-5/6 md:w-4/6 mx-auto py-10 px-4 md:px-24 rounded-lg" >
      <h3 class="text-center" >{{resturant.menu.name}}</h3>
      <ul class="grid grid-cols-1 gap-2"  >
        <li  style="list-style-position: inside;" :style="{color: resturant.menu.color, 'font-family': resturant.menu.fontFamily, 'list-style-type': resturant.menu.listStyle}" v-for="(item, indexItem) in resturant.menu.items" :key="indexItem" >{{item}}</li>
      </ul>
        <div class="text-center font-bold" >
            <div class="font-bold text-lg" >{{resturant.menu.price}}</div>
            <br>
            <div class="font-normal" >
                <div class="max-w-lg mx-auto mb-4" >{{resturant.menu.extra}}</div>
                
                <br>
                <div class="text-left max-w-xs mx-auto" >
                    <div class="font-bold" >Voor onze dienstverlening rekenen we per uur:</div>
                    <div> - € 39,50 (incl. BTW) per Chef</div>
                    <div>- € 29,50 (incl. BTW) per gastvrouw/heer</div>
                    <div>Bedankt</div>
                </div>
            </div>
        </div>
        <p class="text-center" :style="{color: resturant.menu.color}" >{{`${resturant.menu.context}` || ''}}</p>

        <div class="text-center" >
            <h5 class="my-4" >Wijnarrangement voor 2 a 3 pers. </h5>
            <div>1 fles bubbels</div>
            <div>1 fles witte wijn</div>
            <div>1 fles rode wijn</div>
            <div class="font-bold my-4" >€ 69,50 (incl. BTW) </div>
        </div>

        <a :href="`/${resturant.pdf}`" target="_blank" class="text-center" >
          <button class="mx-auto shadow-md rounded-md py-2 px-4 md:px-12  md:w-64 md:py-3 font-bold transform hover:scale-110 transition-all hover:bg-green hover:text-white" >Wijnkaart</button>
        </a>

        <div><img class="mx-auto" :src="resturant.menu2.image" :alt="resturant.name"></div>
    </div>

    <!-- SECOND MENU -->
    <!-- <div class="grid grid-cols-1 gap-24 mx-auto w-5/6 md:w-3/6 shadow-lg rounded-lg my-12 py-12 px-4 md:px-28" >
      <h3 class="text-center" >MENU</h3>
      <p class="text-center" >Wilt u het menu liever zelf samenstellen, bekijk dan de mogelijkheden op de A la Carte kaart. U kunt het menu aanvullen met een bijpassend wijnarrangement of zelf uw eigen wijnen kiezen. Kijk hiervoor op de wijnkaart van {{resturant.name}}</p>
      <div><img class="mx-auto" :src="resturant.menu2.image" :alt="resturant.name"></div>
      <div class="text-center" >
        <a :href="`/${resturant.pdf}`" target="_blank">
          <button class="mx-auto shadow-md rounded-md py-2 px-4 font-bold transform hover:scale-110 transition-all hover:bg-green hover:text-white" >A la Carte + Wijnkaart</button>
        </a>
      </div>
    </div> -->
  </li>
</ul>

</div>
</template>


<script  >
export default {
 props: [],
 components: {},
 setup() {
   const resturants = [
     {
       name: 'Visaandeschelde',
       image: require('~/assets/images/partners/1.png'),
       pdf: 'visaandeschelde.pdf',
       menu: {
         name: 'CULI-VIS-MENU',
         color: '#004371',
         fontFamily: 'TypefaceSeven',
         listStyle: 'disc',
         items: [
            "Brood en kruidenmayonaise",
            "Sashimi van tonijn en zeebaars",
            "Huisgerookte zalm - wakame - hoisin - wasabi - yuzu",
            "Kabeljauw (skrei) Tandoori - hangop yoghurt - komkommer - mint - rettich",
            "Ravioli van kreeft - beurre blanc - tomaat - venkel - dragon",
            "Coquille - brandade - aardpeer - truffel",
            "Vis van de markt - rode kool - hete bliksem - octopus - rode wijn jus",
            "Tartelette van citroen",
            "Pecannoten taartje",
         ],
         context: 'U kunt het CULI-VIS-MENU aanvullen met een bijpassend wijnarrangement of zelf uw eigen wijnen kiezen. Kijk hiervoor op de wijnkaart van Visaandeschelde. Wilt u het menu liever zelf samenstellen, vraag dan naar de mogelijkheden.',
         price:'€ 79,50 (incl. BTW) p.p.',
         extra:'* Bij de prijs inbegrepen: huur van serviesgoed, bestek en linnen. De menu prijs zal volledig worden overgedragen aan het restaurant.'
       },
       menu2: {
          name: "menu",
          image: require('~/assets/images/menu/1.png'),
      },
     },
     {
       name: 'The Traveller',
       image: require('~/assets/images/partners/3.png'),
       pdf: 'thetraveller.pdf',
       menu: {
         name: 'TRAVELLER-CULI-MENU',
         color: '#000000',
         fontFamily: 'Future PT',
         listStyle: "'-  '",
         items: [
          "Flatbread & Tzatziki",
          "Zalm & Tonijn Sashimi",
          "Burrata - tomaat - basilicum",
          "Chicken Tacos - tomaat - avocado - rode ui - chipotle",
          "Beef Tataki - ponzu - rode peper - knoflook",
          "Bavette - zwarte bonen - gember - bosui - rode peper - pinda",
          "Shrimp Pad Thai - garnalen - noodles - ei - cashew",
          "Gezouten Karamel & Passievrucht",
          "Witte Chocolade & Ananas"
         ],
         context: 'U kunt het TRAVELLER-CULI-MENU aanvullen met een bijpassend wijnarrangement of zelf uw eigen wijnen kiezen. Kijk hiervoor op de wijnkaart van The Traveller. Wilt u het menu liever zelf samenstellen, vraag dan naar de mogelijkheden.',
         price:'€ 79,50 (incl. BTW) p.p.',
         extra: '* Bij de prijs inbegrepen: huur van serviesgoed, bestek en linnen.'
       },
       menu2: {
          name: "menu",
          image: require('~/assets/images/menu/3.png'),
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
 
 
