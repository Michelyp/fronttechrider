<template>
  <FilterComponent
    :dataOriginal="empresas"
    v-on:filter_data_return="FilterEmpresas"
  />
  <TablaComponent
    :dataTable="empresas"
    :editable="true"
    :showBtn="true"
    :showId="true"
    v-if="empresas.length > 0"
  />
</template>

<script>
import TablaComponent from "./../TablaComponent.vue";
import ServiceEmpresas from "@/services/ServiceEmpresa";
import FilterComponent from "../FilterComponent.vue";
const service = new ServiceEmpresas();

export default {
  name: "EmpresasComponent",
  components: {
    TablaComponent,
    FilterComponent
  },
  data() {
    return {
      empresas: [],
    };
  },
  methods: {
    loadEmpresas() {
      service.getEmpresasFormato().then((result) => {
        this.empresas = result.data;
      });
    }, // Para eliminar datos que necesitamos mostrar en la tabla (ID´s)
    CleanTableView() {
      var regex = /id|ID/;
      this.techRiders.forEach((techRider) => {
        Object.keys(techRider).forEach((key) => {
          if (key.match(regex)) {
            delete techRider[key];
          }
        });
      });
    },
    SelectRow(event) {
      this.row = Array.prototype.slice.call(event.currentTarget.children);
      this.row.forEach((cell) => {
        cell.style["background-color"] = "red";
        console.log(cell);
      });
    },
    FilterEmpresas(empresas){
      this.empresas = empresas;
    }
  },
  mounted() {
    this.loadEmpresas();
  },
};
</script>

<style></style>
