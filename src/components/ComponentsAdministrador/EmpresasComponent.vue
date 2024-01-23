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
import ServiceCharlas from '@/services/ServiceEmpresa';
const service = new ServiceCharlas();

export default {
  name: "EmpresasComponent",
  components:{
    TablaComponent,
  },
  data(){
    return{
        empresas:[],
    };
  },
  methods:{
    loadEmpresas(){
        service.getEmpresasFormato().then(result=>{
            this.empresas = result.data;
            console.log(result);
        })
    }
  }
};
</script>

<style></style>
