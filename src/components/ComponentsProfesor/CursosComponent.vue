<template lang="">
    <FilterComponent
        :dataOriginal="cursos"
        :showId="false"
        v-on:filter_data_return="FilterCursos"
    />
    <TablaComponent 
        :data-table="cursos" 
        :editable="true" 
        :showBtn="true"                  
        :show-id="false"  
        v-on:save_btn_event="UpdateCurso"
        v-on:delete_btn_event="DeleteCurso"        
    />
</template>
<script>
import FilterComponent from './../FilterComponent.vue';
import TablaComponent from './../TablaComponent.vue';  
import { notifyMixin } from './../ScriptsAlerts/PrompNotify.js';
import ServiceCursos from '@/services/ServiceCursos';
import ServiceUsuarios from '@/services/ServiceUsuarios';
var serviceUser =  new ServiceUsuarios(); 
var service = new ServiceCursos();

export default {
    name:"CursosComponent",
    components:{
        TablaComponent,
        FilterComponent
    },
    data(){
        return{
            cursos:[],
            profesor:{}
        }
    },
    methods:{
        UpdateCurso(curso){
            console.log(curso)
            if(curso.idCentro == null){
                this.PostCurso(curso);
            }else{
                service.PUT_Curso(curso).then(result=>{
                    notifyMixin.promptNotify(result.status);
                });           
            }
        },
        DeleteCurso(curso){
            if(typeof curso.idCurso == "number" ){
                service.DELETE_Curso(curso.idCurso).then(result=>{
                    notifyMixin.promptNotify(result.status);
                    this.LoadCursosProfesorCentro(this.profesor.idEmpresaCentro);
                });
            }
        },       
        PostCurso(curso){
            console.log(curso)
            curso.idCurso = 1;
            curso.idCentro = this.profesor.idEmpresaCentro;
            service.POST_Curso(curso).then(result=>{
                notifyMixin.promptNotify(result.status);
                this.LoadCursosProfesorCentro(this.profesor.idEmpresaCentro);
            });
        },
        LoadCursosProfesorCentro(idEmpresaCentro){
            service.GET_Cursos().then(result=>{               
                this.cursos = result.data;
                this.cursos = result.data.filter(curso => curso.idCentro === idEmpresaCentro);             
            });
        },
        LoadProfesor(){
            serviceUser.GetUserByToken().then(result =>{
               this.profesor = result.data;
               this.LoadCursosProfesorCentro(this.profesor.idEmpresaCentro);
            });
        },
        FilterCursos(cursos_filtered){
            this.cursos = cursos_filtered;
        }
       
    },
    mounted(){
        this.LoadProfesor();
    }
}
</script>
<style>
    textarea{
        resize: none;
    }

    /* .process-notify {
        font-size: 0.2rem;
    }
    .process-notify-title {
        font-size: 0.7rem;
        text-align: right;
        position: absolute;
        top: 10%;
        right: 0;
        font-weight: bold;
    }
    .process-notify-icon {        
        text-align: left;
        margin-left: 10px;
    }
    .process-notify-container::content{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 10;
    } */



</style>