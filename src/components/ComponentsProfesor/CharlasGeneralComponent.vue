<template>
    <FilterComponent
        :dataOriginal="charlas"
        :showId="false"
        v-on:filter_data_return="FilterCharlas"
    />
  <div class="card text-center w-auto">
  <div class="card-header">
  <ul class="nav nav-tabs card-header-tabs fs-md-6">
        <li class="nav-item w-auto">
          <span class="nav-link w-auto" exact-active-class="active">Completadas</span>
        </li>
        <li class="nav-item">
          <span class="nav-link w-auto" exact-active-class="active">Disponibles</span>
        </li>
        <li class="nav-item">
          <span class="nav-link w-auto" exact-active-class="active">Pendientes</span>
        </li>
      </ul>
  </div>
  <div class="card-body">
      <TableCards
        :data-table="charlas"
        :on-options_row_btn="OptionsCharlas"
      />
  </div>
</div>  
</template>
<script>
import TableCards from '../TableCards.vue';
import QueryService from '@/services/QueryService';
import ServiceCharlas from '@/services/ServiceCharlas';
import FilterComponent from '../FilterComponent.vue';
const service = new  QueryService();
const serviceCharlas = new ServiceCharlas();

export default {
    name:"CharlasGeneral",
    components:{
      TableCards,
      FilterComponent
    },
    data(){
        return{
            charlas:[],
            valoraciones:[],
        }
    },
    methods:{
      LoadCharlasDisponibles(){
        service.CharlasDisponiblesTechRider().then(result=>{          
            this.charlas = result.data;               
        });
      },
      LoadCharlasCompletadas(){
        service.CharlasTechRider().then(result =>{                            
            this.charlas = result.data;           
        });
      },
      LoadValoracionesCharlas(){
        serviceCharlas.GET_ValoracionesCharlas().then(result=>{
          this.valoraciones = result.data;
        });
      },
      OptionsCharlas(){
        
      }
    },
    mounted(){

    }
}
</script>
<style>


</style>