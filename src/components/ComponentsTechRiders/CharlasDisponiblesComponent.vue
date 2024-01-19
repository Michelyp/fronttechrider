<template>
    <TablaComponent 
        :dataTable="charlas" 
        :editable="true" 
        :showBtn="true" 
        v-if="charlas.length > 0"
    />
</template>
<script>
import TablaComponent from './../TablaComponent.vue';  
import QueryService from '@/services/QueryService';
const service = new  QueryService();

export default {
    name:"CharlasDisponibles",
    components:{
        TablaComponent
    },
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