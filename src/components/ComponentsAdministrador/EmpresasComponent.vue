<template>
  <TablaComponent
    :dataTable="empresas"
    :editable="true"
    :showBtn="true"
    :showId="true"
    v-if="empresas.length > 0"
  />
</template>

<script>
import TablaComponent from './../TablaComponent.vue';  
import ServiceEmpresas from '@/services/ServiceEmpresa';
const service = new ServiceEmpresas();

export default {
  name: "EmpresasComponent",
  components:{
    TablaComponent,
  },
  data(){
    return{
        empresas:[],
    };
  },
  methods:{
    loadEmpresas(){
        service.getEmpresasFormato().then(result=>{
            this.empresas = result.data;
            console.log(result);
        })
    },// Para eliminar datos que necesitamos mostrar en la tabla (ID´s)
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
        this.loadEmpresas();
    }
};
</script>

<style></style>
