<template>
  <div class="card text-center w-auto" v-if="user != undefined">
  <div class="card-header mb-0 pb-1 border-0" :class="{ 'pb-2': user.idRole !== 2 }">
    <div class=" align-self-end float-end nav-item" v-if="user.idRole === 2">
      <button class="btn btn-success text-white" @click="CreateCharla"> 
        + Solicitar Charla
      </button>
    </div>
    <ul class="nav nav-tabs card-header-tabs w-auto flex-shrink-0 flex-wrap">
      <li class="nav-item w-auto">
        <button class="nav-link w-auto" @click="FilterCharlas(null)" :class="{ 'active': filterState === null }">
          Todas
        </button>
      </li>
      <li class="nav-item w-auto">
        <button class="nav-link w-auto" @click="FilterCharlas(5)" :class="{ 'active': filterState === 5 }">
          Completadas
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link w-auto" @click="FilterCharlas(2)" :class="{ 'active': filterState === 2 }">
          Disponibles
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link w-auto" @click="FilterCharlas(3)" :class="{ 'active': filterState === 3 }">
          Pendientes
        </button>
      </li>
    </ul>      
  </div>
  <div class="card-body">
      <TableCards
        :data-table="charlas"
        v-on:selected_row_item="OptionsCharla"
      />
      <div v-if="charlas.length === 0">
        No se encuentran charlas
      </div>
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
import {LogAlert} from './ScriptsAlerts/LogInPromp';
import {PrompOptions} from './ScriptsAlerts/PrompOptionsCharlas'
import {PrompForm} from './ScriptsAlerts/PrompNewCharla'
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
            user:{},
            filterState:null
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
      LoadUser(){
        serviceUsuarios.GetUserByToken().then(result=>{    
          this.user = result.data;  
          if(!this.user){
            LogAlert.Alert();
          }
          if(result.status == 200){    
            if(this.user.idRole == 2){
              this.LoadCharlasProfesor(result.data.idUsuario);
            }
            if(this.user.idRole == 3){
              this.LoadCharlasTech(result.data.idUsuario);
            }
          }
        });
      },
      FilterCharlas(estado) {
        this.filterState = estado;       
        if (this.user.idRole == 2) {
          service.CharlasProfesor(this.user.idUsuario).then(result=>{
            this.charlas = []
            result.data.forEach(charla => {
                delete charla.tipoRole
                delete charla.valoracion
                delete charla.comentarioValoracion

                if(estado == null){
                  this.charlas.push(charla);
                }
                if(charla.idEstadoCharla === estado){
                  this.charlas.push(charla);
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

                if(estado == null){
                  this.charlas.push(charla);
                }
                if(charla.idEstadoCharla === estado){
                  this.charlas.push(charla);
                }
            });                  
          });
        }        
      },
      CreateCharla(){
        PrompForm.prompForm(this.user);
      },      
      OptionsCharla(rowData){
        PrompOptions.promptNotify(this.user.idRole , rowData);
      }
    },
    mounted(){
      this.LoadUser();     
    }
}
</script>
<style>
#dropdown_tecnologias{
  max-height: 70px;
}

</style>