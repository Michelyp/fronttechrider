<template>
  <FilterComponent
    :dataOriginal="techRiders"
    v-on:filter_data_return="FilterTechRiders"
  />
  <TablaComponent class="overflow-x-auto border"
    :dataTable="techRiders"
    :editable="true"
    :showBtn="true"
    :showId="true"
    :delete-btn="false"
    v-on:save_btn_event="UpdateCurso"
  />
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
      techRiders: []
    };
  },
  components: {
    TablaComponent,
    FilterComponent
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
    }
  },
  mounted() {
    this.loadTechRidersData();
  }
};
</script>

<style></style>
