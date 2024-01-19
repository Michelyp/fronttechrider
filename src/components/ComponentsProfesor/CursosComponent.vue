<template lang="">
    <div v-if="cursos.length > 0" id="table_charlas_cotainer">
        <table class="table table-hover rounded-1 overflow-hidden" id="table-charla">          
            <thead class="thead-dark">
                <tr>                    
                    <th v-for="key  in  Object.keys(cursos[0])" 
                        :key="key" scope="col" v-show="CleanTableView(key)">
                            {{ key.toLocaleUpperCase() }}
                    </th>     
                    <th class="th_container_button">
                    </th>       
                </tr>
            </thead>
            <tbody>
                <tr v-for="(curso, ind_curso) in cursos" :key="curso" class="row-charla-list">                   
                    <td v-for="(value, key) in curso" 
                        :key="key" v-show="CleanTableView(key)"
                        class="justify-content-center text-center">
                            <textarea 
                                class="form-control border-0 bg-transparent p-0 text-center"
                                rows="auto"
                                type="text" 
                                v-model="cursos[ind_curso][key]"
                                /> 
                    </td>
                    <td class="w-auto align-middle p-0">                        
                        <button class="col-auto mr-auto btn btn-outline-primary py-1 px-2 mx-2 border-0" @click="UpdateRow(ind_curso)">
                            <i class="bi bi-floppy"></i>
                        </button>
                        <button class="col-auto mr-auto btn btn-outline-danger py-1 px-2 mx-2 border-0">
                            <i class="bi bi-x-circle" ></i>
                        </button>
                    </td>
                </tr>  
            </tbody>              
        </table>
    </div>
    <div v-else>
        No hay cursos disponibles.
    </div>
</template>
<script>
import ServiceCursos from '@/services/ServiceCursos';
var service = new ServiceCursos();

export default {
    name:"CursosComponent",
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