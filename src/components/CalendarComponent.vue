<template>
  <vue-cal 
    class=" vuecal--gray-theme"
    :time="true" 
    active-view="week" 
    :disable-views="['years', 'year']" 
    />
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
    name:"CalendarComponent",
   components:{
    VueCal
   }
}
</script>

<style>

</style>