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
                return;
            }
            service.PUT_Curso(curso);           
        },
        DeleteCurso(curso){
            if(curso.idCentro == null){  
                if(this.PrompConfirmatiion()){
                    service.DELETE_Curso(curso.idCurso);
                }
            }
        },
        PostCurso(curso){
            curso.idCurso = 1;
            curso.idCentro = this.profesor.idEmpresaCentro;
            service.POST_Curso(curso);
        },
        LoadCursosProfesor(idEmpresaCentro){
            service.GET_Cursos().then(result=>{               
                this.cursos = result.data;
                this.cursos = result.data.filter(curso => curso.idCentro === idEmpresaCentro);
                console.log()
            });
        },
        LoadProfesor(){
            serviceUser.GetUserByToken().then(result =>{
               this.profesor = result.data;
               this.LoadCursosProfesor(this.profesor.idEmpresaCentro);
            });
        },
        PromptNotify(status){
            var icon ="succes";
            if(status === 200){
                icon = "error";
            }            
            Swal.fire({
                position: "top-end",
                icon: icon,
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        },
        PrompConfirmatiion(){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                });
                swalWithBootstrapButtons.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        return true;
                    } else {
                        return false;
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