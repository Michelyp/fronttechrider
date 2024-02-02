<template>
  <FilterComponent
    :dataOriginal="tecnologiasConTipos"
    v-on:filter_data_return="filterTecnologias"
  />
  <TablaComponent
    :dataTable="tecnologiasConTipos"
    class="border"
    :editable="true"
    :showBtn="true"
    :showId="true"
    v-on:save_btn_event="CrearPeticion"
  />
</template>

<script>
import ServiceTecnologias from "@/services/ServiceTecnologias";
import TablaComponent from "./../TablaComponent.vue";
import { notifyMixin } from './../ScriptsAlerts/PrompNotify.js';
import FilterComponent from "../FilterComponent.vue";

const service = new ServiceTecnologias();

export default {
  name: "PeticionesCategoriasComponent",
  data() {
    return {
      tecnologias: [],
      tecnologiasConTipos:[
        {
            idTecnologia: 0,
            nombreTecnologia: "",
            tipoTecnologia: "",
            idTipoTecnologia: 0

        }
      ],
      tipoTecnologias: [],
    };
  },
  components: {
    TablaComponent,
    FilterComponent,
  },
  methods: {
    loadTecnologias() {
      service.getTecnologias().then((result) => {
        this.tecnologias = result.data;
        service.getTipoTecnologias().then((res) => {
          this.tipoTecnologias = res.data;
          console.log(res.data)
          this.tecnologiasConTipos=[];
          this.tecnologias.forEach((tecnologia) => {
            var idTipo = tecnologia.idTipoTecnologia;
            //console.log(idTipo);
            
            for (let i = 0; i < this.tipoTecnologias.length; i++) {
                console.log(this.tipoTecnologias[i].idTipoTecnologia);
              if (idTipo == this.tipoTecnologias[i].idTipoTecnologia) {
                tecnologia.tipoTecnologia = this.tipoTecnologias[i].descripcion;
                this.tecnologiasConTipos.push(
                    {
                        idTecnologia: tecnologia.idTecnologia,
                        nombreTecnologia: tecnologia.nombreTecnologia,
                        tipoTecnologia: this.tipoTecnologias[i].descripcion,
                        idTipoTecnologia: tecnologia.idTipoTecnologia

                    }
                )
                //console.log(this.tipoTecnologias[i].descripcion);
              }
            }
            
          });
          console.log(this.tecnologiasConTipos);
          console.log(this.tecnologias);

          //const hola = this.tipoTecnologias.find(tipo => tipo.idTipoTecnologia == tecnologia.idTipoTecnologia);
          //console.log(hola);
          //delete tecnologia.posicion; //Elimina la columna posicion del objeto
          //this.tecnologias.push(tecnologia);
        });
        //console.log(this.tecnologias);
      });
    },
    filterTecnologias(tecnologias) {
      this.tecnologiasConTipos = tecnologias;
    },
    CrearPeticion(peticion){
        //console.log(peticion);
        /*if(peticion.idTecnologia == null){
            peticion.idTecnologia=1;
        }
        const peticionFormat = {
            idTecnologia: peticion.idTecnologia,
            nombreTecnologia: peticion.nombreTecnologia,
            idTipoTecnologia: peticion.idTipoTecnologia
        } */
        service.postPeticionTecnologia(peticion.nombreTecnologia).then(result=>{
            notifyMixin.promptNotify(result.status);
        });           
            
    }
  },
  mounted() {
    this.loadTecnologias();
  },
};
</script>

<style></style>
