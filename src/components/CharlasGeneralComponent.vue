<template>
  <div class="card text-center w-auto">
  <div class="card-header">
  <ul class="nav nav-tabs card-header-tabs flex-shrink-0">
        <li class="nav-item w-auto">
          <button class="nav-link w-auto" exact-active-class="active" @click="FilterCharlas(5)">Completadas</button>
        </li>
        <li class="nav-item">
          <button class="nav-link w-auto" exact-active-class="active" @click="FilterCharlas(2)">Disponibles</button>
        </li>
        <li class="nav-item">
          <button class="nav-link w-auto" exact-active-class="active" @click="FilterCharlas(3)">Pendientes</button>
        </li>
      </ul>
  </div>
  <div class="card-body">
      <TableCards
        :data-table="charlas"
        v-on:selected_row_item="OptionsCharla"
      />
      <!-- <div id="buttons_container" v-if="charlas.length > 0" class="container">
      <div class="row justify-content-center" v-if="showBtns">
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success">Detalles</button>
            </div>
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success" @click="OptionsSelectedRow(row)">Opciones</button>                
            </div>
      </div>   -->
      
  </div>
</div>  
</template>
<script>
import {PrompOptions} from './ScriptsAlerts/PrompOptionsCharlas'
import TableCards from './TableCards.vue';
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
      LoadCharlasTech(id_user){
        service.CharlasTechRider(id_user).then(result =>{       
          result.data.forEach(charla => {
              delete charla.tipoRole
              delete charla.valoracion
              delete charla.comentarioValoracion
          });         
          this.charlas = result.data;                
        });
      },
      LoadCharlasProfesor(id_user){
        service.CharlasProfesor(id_user).then(result=>{
          result.data.forEach(charla => {
              delete charla.tipoRole
              delete charla.valoracion
              delete charla.comentarioValoracion
          });
          this.charlas = result.data;
        })
      },
      OptionsCharla(rowData){
        PrompOptions.promptNotify(this.user.idRole , rowData);
      },
      LoadUser(){
        serviceUsuarios.GetUserByToken().then(result=>{    
          this.user = result.data;  

          if(this.user.idRole == 2){
            this.LoadCharlasProfesor(result.data.idUsuario);
          }
          if(this.user.idRole == 3){
            this.LoadCharlasTech(result.data.idUsuario);
          }
          
        });
      },
      FilterCharlas(estado) {
      
        if (this.user.idRole == 2) {
          service.CharlasProfesor(this.user.idUsuario).then(result=>{
            this.charlas = []
            result.data.forEach(charla => {
                delete charla.tipoRole
                delete charla.valoracion
                delete charla.comentarioValoracion
                if(charla.idEstadoCharla === estado){
                  this.charlas.push(charla)
                }
            });
          })
        }
        if (this.user.idRole == 3) {
          service.CharlasTechRider(this.user.idUsuario).then(result =>{       
            this.charlas = []
            result.data.forEach(charla => {
                delete charla.tipoRole
                delete charla.valoracion
                delete charla.comentarioValoracion
                if(charla.idEstadoCharla === estado){
                  this.charlas.push(charla)
                }
            });                  
          });
        }
        
      }

    },
    mounted(){
      this.LoadUser();
    }
}
</script>
<style>


</style>