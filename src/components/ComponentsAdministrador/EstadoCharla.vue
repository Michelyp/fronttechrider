<template>
  <TablaComponent 
        :dataTable="charlas" 
        :editable="true" 
        :showBtn="true" 
        :showId="true"
        v-if="charlas.length > 0"
    />
</template>

<script>
import TablaComponent from './../TablaComponent.vue';  
import ServiceCharlas from '@/services/ServiceCharlas';
const service = new ServiceCharlas();

export default {
  name: "EstadoCharla",
  components: {
    TablaComponent,
  },
  data() {
    return {
      charlas: [],
    };
  },
  methods:{
    loadCharlas(){
        service.GET_Charlas().then(result=>{
            this.charlas = result.data;
            console.log(result.data);
        });
    }
  }
};
</script>

<style></style>
