<template>
  <FilterComponent
    :dataOriginal="empresas"
    v-on:filter_data_return="FilterEmpresas"
  />
  <TablaComponent class="overflow-x-auto border"
    :dataTable="empresas"
    :editable="true"
    :showBtn="true"
    v-if="empresas.length > 0"
    v-on:save_btn_event="UpdateEmpresa"
    v-on:delete_btn_event="DeleteEmpresa"
  />
</template>

<script>
import TablaComponent from "./../TablaComponent.vue";
import ServiceEmpresas from "@/services/ServiceEmpresa";
import FilterComponent from "../FilterComponent.vue";
import { notifyMixin } from "./../PrompNotify.js";
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
        this.empresas = result;
      });
    },UpdateEmpresa(empresa) {
      //console.log(centro);
      if (empresa.idEmpresaCentro == null) {
        this.PostEmpresa(empresa);
      } else {
        service.putEmpresa(empresa).then((result) => {
          notifyMixin.promptNotify(result.status);
          this.loadEmpresas();
        });
      }
    },
    DeleteEmpresa(empresa) {
      if (typeof empresa.idEmpresaCentro == "number") {
        service.deleteEmpresa(empresa.idEmpresaCentro).then((result) => {
          notifyMixin.promptNotify(result.status);
          this.loadEmpresas();
        });
      }
    },
    PostEmpresa(empresa) {
      //console.log(centro);
      empresa.idEmpresaCentro = 1;
      empresa.idTipoEmpresa = 1;
      service.postEmpresa(empresa).then((result) => {
        notifyMixin.promptNotify(result.status);
        this.loadEmpresas();
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
