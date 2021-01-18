<template>
  <div class="h-screen relative" >
    <!-- HERO IMAGES -->
    <div ref='images' class="h-full w-screen overflow-hidden" >
      <transition name="slide-fade"  >
        <template v-for="(image,index) in images">
          <img :key="index" class="absolute top-0 left-0 object-cover w-full h-full overflow-hidden" v-if="selected==index" :src="image" alt="hero image 1">
        </template>
      </transition>
    </div>
    
    <!-- CTA -->
    <!-- START - SLIDER  -->
    <div class="absolute z-10 bottom-16 w-screen flex flex-col place-items-center " >
    <div class="mb-12" ><button class="bg-white border-green border-2 md:h-12 md:w-96 px-6 py-2 rounded-lg shadow-xl hover:bg-green hover:text-white font-bold"  @click="$emit('click')">Aanvragen</button></div>
      <ul class=" bg-green inline-flex mx-auto rounded-full justify-center place-items-center 0 py-2 px-6" >
        <li
          v-for="(image,index) in images.length" :key="index"
          :class="[selected==index ? 'opacity-100' : 'opacity-25', 'mx-4 transition-all w-12 md:w-24 h-2 bg-gold rounded-full ']"
          @click="selected=index" ></li>
      </ul>
    </div>
    <!-- END -  SLIDER -->

  <!-- <transition name='fade' mode="out-in" >
    <template v-for="(item,index) in items"   >
      <div :key='index' v-if="progress < (index+1)*33 && progress >index*33" class="flex flex-col justify-center" ><p  v-for="(content,indexContent) in item.content" :key="indexContent" >{{content}}<br><br></p></div>
    </template>
  </transition> -->

  </div>
</template>

<script  >
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},
 setup() {
   const selected = ref(0)

    onMounted(() => {
        setInterval(() => {
            selected.value++;
            if(selected.value>2){
                selected.value=0;
            }
        },4500)
    })

    const images = [
      require('~/assets/images/hero/1_new.jpg?resize&size=1920'),
      require('~/assets/images/hero/2.jpg?resize&size=1920'),
      require('~/assets/images/hero/3.jpg?resize&size=1920'),
    ]


   return {
     selected,
     images
   }
   
 }
})


</script>


<style lang='scss' >
 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
// .slide-fade-leave-to{
//   transform: translateX(-100vw);
// }
// .slide-fade-enter{
//   transition-delay: 300ms;
// }
 
//POWERED BY AUSTIN
</style>
 
 
