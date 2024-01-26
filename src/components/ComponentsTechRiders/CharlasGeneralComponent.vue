<template>
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
        v-on:options_row_btn="OptionsCharla"
      />
  </div>
</div>  
</template>
<script>
import {PrompOptions} from './../PrompOptionsCharlas'
import TableCards from '../TableCards.vue';
import QueryService from '@/services/QueryService';
import ServiceUsuarios from '@/services/ServiceUsuarios';
const serviceUsuarios  = new ServiceUsuarios();
const service = new  QueryService();

export default {
    name:"CharlasGeneral",
    components:{
      TableCards
    },
    data(){
        return{
            charlas:[],
            user:{}
        }
    },
    methods:{
      LoadCharlasDisponible(id_user){
        service.CharlasDisponiblesTechRider(id_user).then(result=>{          
            this.charlas = result.data;               
        });
      },
      LoadCharlasCompletadas(id_user){
        service.CharlasTechRider(id_user).then(result =>{                
            this.charlas = result.data;                
        });
      },
      OptionsCharla(){
        PrompOptions.promptNotify(this.user.idUsuario);
      },
      LoadUser(){
        serviceUsuarios.GetUserByToken().then(result=>{    
          this.user = result.data;  
          this.LoadCharlasCompletadas(result.data.idUsuario);
        });
      }
    },
    mounted(){
      this.LoadUser();
    }
}
</script>
<style>


</style>