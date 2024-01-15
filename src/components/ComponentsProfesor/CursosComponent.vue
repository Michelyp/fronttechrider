<template lang="">
    <div v-if="cursos.length > 0" id="table_charlas_cotainer">
        <table class="table table-bordered table-hover rounded-2 overflow-hidden table-responsive" id="table-charla">          
            <thead class="thead-dark">
                <tr>                    
                    <th v-for="key  in  Object.keys(cursos[0])" :key="key" scope="col">
                        {{ key.toLocaleUpperCase() }}
                    </th>     
                    <th class="displ">
                    </th>       
                </tr>
            </thead>
            <tbody>
                <tr v-for="(curso) in cursos" :key="curso" class="row-charla-list" >                   
                    <td v-for="value in curso" :key="value">
                        {{ value }}
                    </td>
                    <td class="w-auto align-middle p-0 border-0" style="border-left-width:0px">
                        <div class="col-auto mr-auto icon-link-hover btn btn-outline-success p-0 border-0 mx-2" role="button">
                            <i class="bi bi-eye"></i>
                        </div>
                        <div class="col-auto mr-auto icon-link-hover btn btn-outline-primary p-0 border-0 mx-2" role="button">
                            <i class="bi bi-pencil-square"></i>
                        </div>
                        <div class="col-auto mr-auto icon-link-hover btn btn-outline-danger p-0 border-0 mx-2" role="button">
                            <i class="bi bi-x-circle" ></i>
                        </div>
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
        LoadCursosProfesor(){
            service.GET_Cursos().then(result=>{
                this.cursos = result.data;
                this.CleanTableView();
            })
        },
        // Para eliminar datos que necesitamos mostrar en la tabla (ID´s)
        CleanTableView(){
            var regex = /id|ID/;
            this.cursos.forEach(curso => {               
                Object.keys(curso).forEach(key => {
                    if(key.match(regex)){
                        delete curso[key];
                    }
                });
            });
        },
    },
    mounted(){
        this.LoadCursosProfesor();
    }
}
</script>
<style lang="">

</style>