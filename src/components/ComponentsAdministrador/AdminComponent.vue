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
      value="peticiones"
      autocomplete="off"
    />
    <label class="btn btn-sm btn-outline-secondary" for="btnradio4"
      >Listado de peticiones</label
    >
  </div>

  <div class="container py-5 pt-1 border h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-xl-9">
        <div v-if="radioCheck == 'techriders'">
          <h1>Lista Techriders</h1>
        </div>
        <div v-else-if="radioCheck == 'centros'">
          <h1>Lista Centros</h1>
        </div>
        <div v-else-if="radioCheck == 'empresas'">
          <h1>Lista Empresas</h1>
        </div>
        <div v-else-if="radioCheck == 'peticiones'">
          <h1>Lista Peticiones</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminComponent",
  data() {
    return {
      radioCheck: "techriders",
    };
  },
};
</script>

<style>
</style>