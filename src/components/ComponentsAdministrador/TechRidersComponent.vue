<template>
      <TablaComponent class="overflow-x-auto border"
        :dataTable="techRiders" 
        :editable="true" 
        :showBtn="true" 
        :showId="true"
        v-on:delete_btn_event="Delete"
        v-if="techRiders.length > 0"
    />
</template>

<script>
import TablaComponent from './../TablaComponent.vue';  
import QueryService from '@/services/QueryService';
const service = new  QueryService();

export default {
    name:"TechRidersComponent",
    data(){
        return{
            techRiders:[]
        }
    },
    components:{
        TablaComponent
    },
    methods: {
        Delete(techrider){
            console.log("Hola"+techrider);
        },
        loadTechRidersData(){
            service.TechRidersViewAll().then(result =>{                
                this.techRiders = result;    
                console.log(this.techRiders);            
                this.CleanTableView()
            });
        },
        // Para eliminar datos que necesitamos mostrar en la tabla (ID´s)
        CleanTableView(){
            var regex = /id|ID/;
            this.techRiders.forEach(techRider => {               
                Object.keys(techRider).forEach(key => {
                    if(key.match(regex)){
                        delete techRider[key];
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
        this.loadTechRidersData();
    }
}
</script>

<style>

</style>