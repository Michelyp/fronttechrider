<template>
  <div
    class="btn-group my-3"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio1"
      autocomplete="off"
      v-model="radioCheck"
      value="techriders"
      checked
    />
    <label class="btn btn-sm btn-outline-secondary" for="btnradio1"
      >Listado TechRiders</label
    >

    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio2"
      v-model="radioCheck"
      value="centros"
      autocomplete="off"
    />
    <label class="btn btn-sm btn-outline-secondary" for="btnradio2"
      >Listado de centros</label
    >

    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio3"
      v-model="radioCheck"
      value="empresas"
      autocomplete="off"
    />
    <label class="btn btn-sm btn-outline-secondary" for="btnradio3"
      >Listado de empresas</label
    >
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio4"
      v-model="radioCheck"
      value="estadoCharlas"
      autocomplete="off"
    />
    <label class="btn btn-sm btn-outline-secondary" for="btnradio4"
      >Listado de estados charlas</label
    >

    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio5"
      v-model="radioCheck"
      value="peticiones"
      autocomplete="off"
    />
    <label class="btn btn-sm btn-outline-secondary" for="btnradio5"
      >Listado de peticiones</label
    >
  </div>

  <div class="container py-5 pt-1 border h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-xl-11">
        <div v-if="radioCheck == 'techriders'" class="overflow-x-auto">
          <h1>Lista Techriders</h1>
          <TechRidersComponent/>
        </div>
        <div v-else-if="radioCheck == 'centros'" class="overflow-x-auto">
          <h1>Lista Centros</h1>
          <CentrosComponent/>
        </div>
        <div v-else-if="radioCheck == 'empresas'" class="overflow-x-auto">
          <h1>Lista Empresas</h1>
          <EmpresasComponent/>
        </div>
        <div v-else-if="radioCheck == 'estadoCharlas'" class="overflow-x-auto">
          <h1>Lista Estados Charlas</h1>
          <EstadoCharla/>
        </div>
        <div v-else-if="radioCheck == 'peticiones'" class="overflow-x-auto">
          <h1>Lista Peticiones</h1>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import TechRidersComponent from './TechRidersComponent.vue'
import EmpresasComponent from './EmpresasComponent.vue';
import CentrosComponent from './CentrosComponent.vue';
import EstadoCharla from './EstadoCharla.vue';
export default {
  name: "AdminComponent",
  components: {
    TechRidersComponent,
    CentrosComponent,
    EmpresasComponent,
    EstadoCharla
  },
  data() {
    return {
      radioCheck: "techriders",
    };
  }
  
};
</script>

<style>
</style>