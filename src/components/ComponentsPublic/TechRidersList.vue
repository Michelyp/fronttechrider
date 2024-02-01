<template>
    <h1>Hola</h1>
    <div v-for="tech in techRiders" :key="tech" class="card" style="width: 18rem">
    <img :src="tech.imagen" style="width: 150px" />
    <div class="card-body">
      <h5 class="card-title">{{ tech.techRider }}</h5>
      <p class="card-text">{{ tech.email }}</p>
      <!-- <p class="card-text">Marca: {{ cubo.marca }} Modelo: {{cubo.modelo}}</p> -->
    </div>
  </div>

</template>

<script>
import QueryService from "@/services/QueryService";
const service = new QueryService();
export default {
    name:"TechRidersList",
    data(){
        return{
            techRiders:[],
        };
    },
    mounted(){
        this.loadTechsRiders();
    },
    methods:{
        loadTechsRiders(){
            service.TechRidersActivo().then((response)=>{
                this.techRiders = response;
            })
        }
    }
    
}
</script>

<style>

</style>