<template>
    <div class="card" >
        <div class="card-body">
            <table v-if="charlas.length > 0" class="table table-bordered table-responsive" id="table-charla">          
                <tr>
                    <th>
                        #
                    </th>
                    <th v-for="key  in  Object.keys(charlas[0])" :key="key" scope="col">
                        {{ key.toLocaleUpperCase() }}
                    </th>            
                </tr>
                <tr v-for="(charla,index) in charlas" :key="charla" class="row-charla-list" @click="SelectRow($event)">
                    <th scope="row">
                        {{ index }}
                    </th>
                    <td v-for="value in charla" :key="value">
                        {{ value }}
                    </td>
                </tr>                
            </table>
            <div v-else>
                No hay charlas disponibles.
            </div>
            <div id="buttons_container" v-if="charlas.length > 0" class="container">
                <div class="row justify-content-center">
                    <div class="col-md-auto">
                        <button type="button" class="btn btn-success">Detalles</button>
                    </div>
                    <div class="col-md-auto">
                        <button type="button" class="btn btn-success">Acreditar</button>                
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import QueryService from '@/services/QueryService';
const service = new  QueryService();

export default {
    name:"CharlasDisponibles",
    data(){
        return{
            charlas:[]
        }
    },
    methods:{
        LoadCharlasDisponible(){
            service.CharlasDisponiblesTechRider().then(result=>{          
                this.charlas = result.data;
                this.CleanTableView();
            });
        },
        CleanTableView(){
            var regex = /id|ID/;
            this.charlas.forEach(charla => {
                Object.keys(charla).forEach(key => {
                    if(key.match(regex)){
                        delete charla[key];
                    }
                });
            });
        }
    },
    mounted(){
        this.LoadCharlasDisponible();
    }
}
</script>
<style>
    
</style>