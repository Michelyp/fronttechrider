<template>
  <div id="container-principal" class="container">
    <div class="container">
      <div class="row">
          <InputComponentVue
          class="mb-4 col-12 col-md-6"
          type="text"
          label="Nombre"
          id="typeNombre"
        />
        
        <InputComponentVue
          class="mb-4 col-12 col-md-6"
          type="number"
          label="Teléfono"
          id="typeTelefono"
        />
        <InputComponentVue
          class="mb-4 col-12 col-md-6"
          type="text"
          label="Provincia"
          id="typeProvincia"
        />

        <InputComponentVue
          class="mb-4 col-12 col-md-6"
          type="text"
          label="Apellidos"
          id="typeApellidos"
        />

        <InputComponentVue
          class="mb-4 col-12 col-md-6"
          type="text"
          label="Linkedin"
          id="typeLinkedin"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputComponentVue from "./InputComponent.vue";
export default {
  name: "EditUserComponent",
  components: {
    InputComponentVue,
    
  }
};
</script>

<style>

</style>