<template lang="">
    <TablaComponent 
        :dataTable="cursos" 
        :editable="true" 
        :showBtn="true"         
        v-if="cursos.length > 0"
    />
</template>
<script>
import TablaComponent from './../TablaComponent.vue';  
import ServiceCursos from '@/services/ServiceCursos';
var service = new ServiceCursos();

export default {
    name:"CursosComponent",
    components:{
        TablaComponent
    },
    data(){
        return{
            cursos:[]
        }
    },
    methods:{
        UpdateRow(index){
           console.log(this.cursos[index]);
        },
        LoadCursosProfesor(){
            service.GET_Cursos().then(result=>{
                this.cursos = result.data;
            });
        },
        // Para ocultar datos que no necesitamos mostrar en la tabla (ID´s)
        CleanTableView(value){
            var regex = /id|ID/;           
            if(value.match(regex)){
                return false;
            } 
            return true;
        },
    },
    mounted(){
        this.LoadCursosProfesor();
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