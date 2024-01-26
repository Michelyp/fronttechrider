<template>
  <FilterComponent
    :dataOriginal="peticiones"
    v-on:filter_data_return="FilterTechRiders"
  />
  <TablaComponent
    :dataTable="peticiones"
    :editable="true"
    :showBtn="true"
    :showId="true"
    v-on:save_btn_event="UpdateCurso"
    v-on:delete_btn_event="DeleteCurso"
  />
</template>

<script>
import ServiceUsuarios from "@/services/ServiceUsuarios";
import TablaComponent from "./../TablaComponent.vue";
import FilterComponent from "../FilterComponent.vue";

const service = new ServiceUsuarios();

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
      service.getPeticionesUsuarios().then((result) => {
        this.peticiones = result;
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
