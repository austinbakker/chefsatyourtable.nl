<template>
 <div>
 <div class="flex w-full justify-evenly mx-auto md:flex-row flex-col" >

   <!-- START DAY -->
   <div class="relative transition-all  duration-300 hover:shadow-0 my-1" >
     <!-- viewer -->
     <h6 class="text-center" >DAG</h6>
     <div @click="setOpen('day')" class=" border-2 border-green rounded-md px-8 py-2 font-bold styled-select" >
       {{ selectedDate.get('day') }}
     </div>
     <!-- list -->
     <div v-show="open.day" class="z-20 shadow-0 transition-all max-h-48 absolute border-2 border-green rounded-md text-center w-full mt-5 flex flex-col gap-3 bg-white py-2  overflow-y-auto overflowRestyling" >
       <div @click="setDate(day)" class="hover:bg-gray"  v-for="(day,index) in days" :key="index"  >{{ day.get('day') }}</div>
       <!-- <div @click="setDate(day)" class="hover:bg-gray"  v-for="(day,index) in days" :key="index" v-show="day.get('day')!=selectedDate.get('day')" >{{ selectedDate.get('day') }}</div> -->
     </div>
   </div>
  <!-- END DAY -->


   <!-- START MONTHS -->
   <div class="relative transition-all duration-300 hover:shadow-0 my-1" >
     <!-- viewer -->
     <h6 class="text-center" >MAAND</h6>
     <div @click="setOpen('month')" class=" border-2 border-green rounded-md px-8 py-2 font-bold styled-select" >
       {{ new Date(selectedDate).toLocaleString([], {month: 'long'}) }}
     </div>
     <!-- list -->
     <div v-show="open.month" class="z-20 shadow-0 transition-all max-h-48 absolute border-2 border-green rounded-md text-center w-full mt-5 flex flex-col gap-3 bg-white py-2  overflow-y-auto overflowRestyling ">
       <div @click="setDate(month)" class="hover:bg-gray"  v-for="(month,index) in months" :key="index" >{{ new Date(month).toLocaleString([], {month: 'long'}) }}</div>
       <!-- <div @click="setDate(month)" class="hover:bg-gray"  v-for="(month,index) in months" :key="index" v-show="new Date(month).toLocaleString([],{ month: 'numeric' })!=new Date(selectedDate).toLocaleString([],{ month: 'numeric' })" >{{ new Date(month).toLocaleString([], {month: 'long'}) }}</div> -->
     </div>
   </div>
  <!-- END MONTHS -->




   <!-- START YEARS -->
   <div class="relative transition-all duration-300 hover:shadow-0 my-1" >
     <h6 class="text-center" >JAAR</h6>
     <!-- viewer -->
     <div @click="setOpen('year')" class=" border-2 border-green rounded-md px-8 py-2 font-bold styled-select" >
       {{new Date(selectedDate).toLocaleString([],{ year: 'numeric' })}}
     </div>
     <!-- list -->
     <div v-show="open.year" class="z-20 shadow-0 transition-all max-h-48 absolute border-2 border-green rounded-md text-center w-full mt-5 flex flex-col gap-3 bg-white py-2  overflow-y-auto overflowRestyling" >
       <div @click="setYear(year)" class="hover:bg-gray"  v-for="(year,index) in years" :key="index"  >{{new Date(year).toLocaleString([],{ year: 'numeric' })}}</div>
       <!-- <div @click="setYear(year)" class="hover:bg-gray"  v-for="(year,index) in years" :key="index" v-show="new Date(year).toLocaleString([],{ year: 'numeric' })!=new Date(selectedDate).toLocaleString([],{ year: 'numeric' })" >{{new Date(year).toLocaleString([],{ year: 'numeric' })}}</div> -->
     </div>
   </div>
  <!-- END YEARS -->

 </div>
<!-- START - TIME  -->
   <div class="relative transition-all duration-300 w-64 mx-auto hover:shadow-0 my-1" >
     <h6 class="text-center" >Tijd</h6>
     <!-- viewer -->
     <div @click="setOpen('time')" class=" border-2 border-green rounded-md px-8 py-2 font-bold styled-select" >
       {{new Date(selectedDate).toLocaleString([],{ hour: 'numeric',minute: '2-digit' })}}
     </div>
     <!-- list -->
     <div v-show="open.time" class="z-20 shadow-0 transition-all max-h-48 absolute border-2 border-green rounded-md text-center w-full mt-5 flex flex-col gap-3 bg-white py-2  overflow-y-auto overflowRestyling" >
       <div @click="setDate(tijd)" class="hover:bg-gray"  v-for="(tijd,index) in tijden" :key="index"  >{{new Date(tijd).toLocaleString([],{hour: 'numeric',minute: '2-digit'})}}</div>
       <!-- <div @click="setYear(year)" class="hover:bg-gray"  v-for="(year,index) in years" :key="index" v-show="new Date(year).toLocaleString([],{ year: 'numeric' })!=new Date(selectedDate).toLocaleString([],{ year: 'numeric' })" >{{new Date(year).toLocaleString([],{ year: 'numeric' })}}</div> -->
     </div>
   </div>
<!-- END -  TIME -->

</div>
</template>


<script  >
import { defineComponent, PropType, reactive, computed, ref, onMounted, watchEffect, watch } from "@nuxtjs/composition-api";
const { DateTime } = require("luxon");
export default defineComponent({
 props: {
   color: String
 },
 components: {},
 setup(props,context) {
   const open = reactive({
     day: false,
     month: false,
     year: false,
     time: false
   })

    const years = computed(() => {
      const today = DateTime.local()
      const howManyYears = 3
      const years = []
      for (let index = 0; index < howManyYears; index++) {
        years.push(today.plus({years:index}))
      }
      return years
    })

    const setOpen = (item) => {
      open[item]=!open[item]
      if(item != 'day') open.day=false;
      if(item != 'month') open.month=false;
      if(item != 'year') open.year=false;
    }

    const baseDate = DateTime.local().plus({days:3}).set({hours:7,minutes:0})
    const selectedDate = ref(baseDate)
    watch(selectedDate, () => { 
      const formated = new Date(selectedDate.value).toLocaleTimeString([], {day: 'numeric', month: 'long', year: 'numeric',hour: '2-digit', minute:'2-digit', hour12: false,})
      context.emit('input', formated)
    },{immediate:true})

    const setDate = (inputDate) => {selectedDate.value=inputDate;open.day=false;open.month=false;open.year=false;}
    const setYear = (year) => {selectedDate.value=selectedDate.value.set({year: new Date(year).getFullYear()})}
    const setHour = (hour) => {sselectedDate.value=inputDate;}


    const months = ref([])
    watch(selectedDate, () => {
      const end = selectedDate.value.endOf('year')
      const now = DateTime.local().ts
      const start = (selectedDate.value.startOf('year').ts>now) ?  selectedDate.value.startOf('year') : baseDate
      const Nmonths = Math.round(end.diff(start, ['months']).toObject().months)
      const monthsList = []
      for (let index = 0; index <= Nmonths; index++) {
        monthsList.push(start.plus({months:index}))
      }
      months.value=monthsList
    },{immediate: true})


    const days = ref([])
    watch( selectedDate, () => {
        const start = (selectedDate.value.startOf('month') < DateTime.local()) ? baseDate  : selectedDate.value.startOf('month')
        const end = selectedDate.value.endOf('month')
        const Ndays = Math.round(end.diff(start, ['days']).toObject().days)
        const daysList=[]
        for (let index = 0; index < Ndays; index++) {
          daysList.push(start.plus({days:index}))
        }
        days.value=daysList
      },
      {immediate: true}
      )

      // tijden
    const tijden = ref([])
    watch( selectedDate, () => {
        const start = (selectedDate.value.startOf('days') < DateTime.local()) ? baseDate  : selectedDate.value.startOf('days').set({hours:7,minutes:0})
        const end = selectedDate.value.endOf('days')
        const Nhours = (Math.round(end.diff(start, ['hours']).toObject().hours))*2
        const tijdList=[]
        for (let index = 0; index < Nhours; index++) {
          tijdList.push(start.plus({minutes:30*index}))
        }
        tijden.value=tijdList
      },
      {immediate: true}
    )

   return {
     open,
     days,
     years,
     months,
     selectedDate,
     setDate,
     setYear,
     setOpen,
     tijden
   }
   
 }
})


</script>


<style lang='scss' >
 .overflowRestyling{
   &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #737272;
    border: 1px solid #000;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
  border: 1px solid #000;
  padding: 2px 0;
  background-color: #404040;
}
}
 
//POWERED BY AUSTIN
</style>
 
 
