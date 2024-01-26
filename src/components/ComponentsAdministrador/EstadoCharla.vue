<template>
    <div class="container">
        <TablaComponent class="overflow-x-auto border"
        :dataTable="charlas" 
        :editable="true" 
        :showBtn="true" 
        :showId="true"
        v-if="charlas.length > 0"
    />
    </div>
  
</template>

<script>
import TablaComponent from './../TablaComponent.vue';  
import ServiceCharlas from '@/services/ServiceCharlas';
const service = new ServiceCharlas();

export default {
  name: "EstadoCharla",
  components: {
    TablaComponent,
  },
  data() {
    return {
      charlas: [],
    };
  },
  methods:{
    loadCharlas(){
        service.GET_Charlas().then(result=>{
            this.charlas = result;
            console.log(result);
        });
    },
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
        this.loadCharlas();
    }
};
</script>

<style></style>
