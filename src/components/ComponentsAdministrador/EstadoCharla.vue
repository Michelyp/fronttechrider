<template>
  <FilterComponent
    :dataOriginal="charlasTech"
    v-on:filter_data_return="FilterCharlas"
  />
  <div class="container">
    <TablaComponent
      :dataTable="charlasTech"
      :editable="true"
      :showBtn="true"
      :showId="false"
      v-if="charlasTech.length > 0"
    />
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
    FilterComponent
  },
  data() {
    return {
      charlasTech: []
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
    FilterCharlas(charlasTech){
      this.charlasTech = charlasTech;
    }
  },
  mounted() {
    this.loadCharlas();
  }
};
</script>

<style></style>
