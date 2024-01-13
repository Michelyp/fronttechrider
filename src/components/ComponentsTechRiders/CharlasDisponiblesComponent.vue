<template>
    <table v-if="charlas.length > 0" class="table table-bordered table-responsive table-hover" id="table-charla">          
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th v-for="key  in  Object.keys(charlas[0])" :key="key" scope="col">
                    {{ key.toLocaleUpperCase() }}
                </th>            
            </tr>
        </thead>
        <tbody>
            <tr v-for="(charla,index) in charlas" :key="charla" class="row-charla-list" @click="SelectRow($event)">
                <th scope="row">
                    {{ index }}
                </th>
                <td v-for="value in charla" :key="value">
                    {{ value }}
                </td>
            </tr>  
        </tbody>              
    </table>
    <div v-else>
        No hay charlas disponibles.
    </div>
    <div id="buttons_container" v-if="charlas.length > 0" class="container">
        <div class="row justify-content-center">
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success">Detalles</button>
            </div>
            <div class="col col-auto mt-2">
                <button type="button" class="btn btn-success">Acreditar</button>                
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
        },
        SelectRow(event){            
            this.row = Array.prototype.slice.call( event.currentTarget.children );
            this.row.forEach(cell => {
                cell.style["background-color"] = "red";
                console.log(cell)
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