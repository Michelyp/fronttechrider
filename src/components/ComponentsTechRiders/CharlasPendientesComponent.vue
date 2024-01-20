<template>
    <TablaComponent 
        :dataTable="charlas" 
        :editable="true" 
        :showBtn="true" 
        :showId="true"
        v-on:save_btn_event="SelectRow"
        v-if="charlas.length > 0"
    />
</template>
<script>
import TablaComponent from './../TablaComponent.vue';  
import QueryService from '@/services/QueryService';
const service = new  QueryService();

export default {
    name:"CharlasPendientesComponent",
    data(){
        return{
            charlas:[]
        }
    },
    components:{
        TablaComponent
    },
    methods: {
        LoadCharlasCompletadas(){
            service.CharlasTechRider().then(result =>{                
                this.charlas = result.data;                
                this.CleanTableView()
            });
        },
        // Para eliminar datos que necesitamos mostrar en la tabla (ID´s)
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
            // this.row = Array.prototype.slice.call( event.currentTarget.children );
            // this.row.forEach(cell => {
            //     cell.style["background-color"] = "red";
            //     console.log(cell)
            // });
            console.log(event)
        }
    },
    mounted(){
        this.LoadCharlasCompletadas();
    }
}
</script>
<style>
    
</style>