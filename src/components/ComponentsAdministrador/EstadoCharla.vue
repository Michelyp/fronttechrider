<template>
  <div class="container py-5 pt-1 border h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-xl-11">
        <h1 class="py-4">Estados Charla</h1>
        <FilterComponent
          :dataOriginal="charlasTech"
          v-on:filter_data_return="FilterCharlas"
        />

        <TablaComponent
          class="overflow-x-auto border"
          :dataTable="charlasTech"
          :editable="true"
          :showBtn="true"
          :showId="false"
          v-if="charlasTech.length > 0"
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
  name: "EstadoCharla",
  components: {
    TablaComponent,
    FilterComponent,
  },
  data() {
    return {
      charlasTech: [],
    };
  },
  methods: {
    loadCharlas() {
      service.CharlasViewAll().then((result) => {
        this.charlasTech = result;
        this.CleanTableView();
      });
    },
    CleanTableView() {
      var regex = /id|ID/;
      this.charlasTech.forEach((charlasTech) => {
        Object.keys(charlasTech).forEach((key) => {
          if (key.match(regex)) {
            delete charlasTech[key];
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
    FilterCharlas(charlasTech) {
      this.charlasTech = charlasTech;
    },
  },
  mounted() {
    this.loadCharlas();
  },
};
</script>

<style></style>
