<template lang="">
    <TablaComponent 
        :data-table="cursos" 
        :editable="true" 
        :showBtn="true"                    
        v-on:save_btn_event="UpdateCurso"
        v-on:delete_btn_event="DeleteCurso"        
    />
</template>
<script>
import TablaComponent from './../TablaComponent.vue';  
import Swal from 'sweetalert2';
import ServiceCursos from '@/services/ServiceCursos';
import ServiceUsuarios from '@/services/ServiceUsuarios';
var serviceUser =  new ServiceUsuarios(); 
var service = new ServiceCursos();

export default {
    name:"CursosComponent",
    components:{
        TablaComponent
    },
    data(){
        return{
            cursos:[],
            profesor:{}
        }
    },
    methods:{
        UpdateCurso(curso){
            if(curso.idCentro == null){
                this.PostCurso(curso);
            }else{
                service.PUT_Curso(curso).then(result=>{
                    this.PromptNotify(result.status);
                });           
            }
        },
        DeleteCurso(curso){
            if(curso.idCurso != null){
                service.DELETE_Curso(curso.idCurso).then(result=>{
                    this.PromptNotify(result.status);
                });
            }
        },       
        PostCurso(curso){
            curso.idCurso = 1;
            curso.idCentro = this.profesor.idEmpresaCentro;
            service.POST_Curso(curso).then(result=>{
                this.PromptNotify(result.status);
            });
        },
        LoadCursosProfesor(idEmpresaCentro){
            service.GET_Cursos().then(result=>{               
                this.cursos = result.data;
                this.cursos = result.data.filter(curso => curso.idCentro === idEmpresaCentro);             
            });
        },
        LoadProfesor(){
            serviceUser.GetUserByToken().then(result =>{
               this.profesor = result.data;
               this.LoadCursosProfesor(this.profesor.idEmpresaCentro);
            });
        },
        PromptNotify(status){
            var icon ="success";
            var background = "green"
            if(status !== 200){
                icon = "error";
                background = "red"
            }            
            Swal.fire({
                position: "top-end",
                icon: icon,               
                showConfirmButton: false,
                timer: 1500,    
                imageHeight:5,
                imageWidth: 5,
                background:background,
                backdrop: false,
                title:icon.toUpperCase(),
                customClass: {
                    popup: "process-notify",
                    title: "process-notify-title",
                    icon: "process-notify-icon",
                    container: "process-notify-container"
                }
            });
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

    .process-notify {
        font-size: 0.2rem;       
    }
    .process-notify-title {
        font-size: 0.6rem;
        text-align: right;
    }
    .process-notify-title {
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
        margin: 0;
    }

    @media (min-width:320px) { /* smartphones, iPhone, portrait 480x320 phones */
    .form-control {
        font-size: 0.7rem;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    .bi{
        font-size: 0.8rem;
    }
}
</style>