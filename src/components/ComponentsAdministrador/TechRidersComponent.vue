<template>
  <div class="container py-5 pt-1 border h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-xl-11">
        <h1 class="py-4">Listado de TechRiders</h1>
        <FilterComponent
          :dataOriginal="techRiders"
          v-on:filter_data_return="FilterTechRiders"
        />
        <TablaComponent
          class="overflow-x-auto border"
          :dataTable="techRiders"
          :editable="true"
          :showBtn="true"
          :showId="true"
          :delete-btn="false"
          v-on:save_btn_event="UpdateCurso"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TablaComponent from "./../TablaComponent.vue";
import QueryService from "@/services/QueryService";
import FilterComponent from "../FilterComponent.vue";
const service = new QueryService();

export default {
  name: "TechRidersComponent",
  data() {
    return {
      techRiders: [],
    };
  },
  components: {
    TablaComponent,
    FilterComponent,
  },
  methods: {
    Delete(techrider) {
      console.log("Hola" + techrider);
    },
    loadTechRidersData() {
      service.TechRidersViewAll().then((result) => {
        this.techRiders = result;
        this.CleanTableView();
      });
    },
    // Para eliminar datos que necesitamos mostrar en la tabla (ID´s)
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
    FilterTechRiders(techRiders) {
      this.techRiders = techRiders;
    },
  },
  mounted() {
    this.loadTechRidersData();
  },
};
</script>

<style></style>
