<template>
  <FilterComponent
    :dataOriginal="centros"
    v-on:filter_data_return="FilterCentros"
  />
  <TablaComponent
    class="overflow-x-auto border"
    :dataTable="centros"
    :editable="true"
    :showBtn="true"
    :showId="true"
    v-if="centros.length > 0"
    v-on:save_btn_event="UpdateCentro"
    v-on:delete_btn_event="DeleteCentro"
  />
</template>

<script>
import TablaComponent from "../TablaComponent.vue";
import ServiceCentros from "@/services/ServiceCentros";
import FilterComponent from "../FilterComponent.vue";
import { notifyMixin } from "./../ScriptsAlerts/PrompNotify.js";
const service = new ServiceCentros();

export default {
  name: "EmpresasComponent",
  components: {
    TablaComponent,
    FilterComponent,
  },
  data() {
    return {
      centros: [],
    };
  },
  methods: {
    loadCentros() {
      service.getCentrosFormato().then((result) => {
        this.centros = result;
        console.log(result);
      });
    },
    UpdateCentro(centro) {
      //console.log(centro);
      if (centro.idEmpresaCentro == null) {
        this.PostCentro(centro);
      } else {
        service.putCentro(centro).then((result) => {
          notifyMixin.promptNotify(result.status);
          this.loadCentros();
        });
      }
    },
    DeleteCentro(centro) {
      if (typeof centro.idEmpresaCentro == "number") {
        service.deleteCentro(centro.idEmpresaCentro).then((result) => {
          notifyMixin.promptNotify(result.status);
          this.loadCentros();
        });
      }
    },
    PostCentro(centro) {
      //console.log(centro);
      centro.idEmpresaCentro = 1;
      centro.idTipoEmpresa = 2;
      service.postCentro(centro).then((result) => {
        notifyMixin.promptNotify(result.status);
        this.loadCentros();
        //this.LoadCursosProfesor(this.profesor.idEmpresaCentro);
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
    FilterCentros(centros) {
      this.centros = centros;
    },
  },
  mounted() {
    this.loadCentros();
  },
};
</script>

<style></style>
