<template>
  <FilterComponent
    :dataOriginal="peticiones"
    v-on:filter_data_return="filterPeticiones"
  />
  <TablaComponent
    :dataTable="peticiones"
    class="border"
    :editable="true"
    :showBtn="true"
    :showId="false"
    v-on:save_btn_event="UpdateCurso"
    v-on:delete_btn_event="DeleteCurso"
  />
</template>

<script>
import QueryService from "@/services/QueryService";
import TablaComponent from "./../TablaComponent.vue";
import FilterComponent from "../FilterComponent.vue";

const service = new QueryService();

export default {
  name: "PeticionesComponent",
  data() {
    return {
      peticiones: []
    };
  },
  components: {
    TablaComponent,
    FilterComponent
  },
  methods: {
    loadPeticiones() {
      service.PeticionesFormateado().then((result) => {
        this.peticiones = [];
        result.forEach(peticion => {
            delete peticion.posicion; //Elimina la columna posicion del objeto
            this.peticiones.push(peticion);            
        });
        console.log(this.peticiones);
      });
    },
    filterPeticiones(peticiones){
      this.peticiones = peticiones;
    }
  },
  mounted() {
    this.loadPeticiones();
  }
};
</script>

<style></style>
