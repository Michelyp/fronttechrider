<template>
  <!--   <div id="container-principal" class="container">
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
  </div> -->
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <div class="d-flex">
              <router-link class="link-secondary" to="/personal"
                >Volver</router-link
              >
            </div>
            <form
              class="mb-md-5 mt-md-4 pb-5"
              v-on:submit.prevent="modificarDatos()"
            >
              <h2 class="fw-bold mb-2 text-uppercase">Editar Datos</h2>
              <!-- <p class="text-white-50 mb-5">Introduce usuario y contraseña</p> -->

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  v-model="user.nombre"
                  id="typeName"
                  class="form-control form-control-lg"
                  required
                />
                <label class="form-label" for="typeName">Nombre <span  style="color:red">*</span></label>
              </div>
              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  v-model="user.apellidos"
                  id="typeApellidos"
                  class="form-control form-control-lg"
                  required
                />
                <label class="form-label" for="typeApellidos">Apellidos <span  style="color:red">*</span></label>
              </div>
              <div class="form-outline form-white mb-4">
                <input
                  type="email"
                  v-model="user.email"
                  id="typeEmail"
                  class="form-control form-control-lg"
                  required
                />
                <label
                  class="form-label"
                  for="typeEmail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  >Email <span style="color:red">*</span></label
                >
              </div>
              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  v-model="user.telefono"
                  id="typeTelf"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="typeTelf">Teléfono <span  style="color:red">*</span></label>
              </div>
              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  v-model="user.linkedIn"
                  id="typeLinkedin"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="typeLinkedin">LinkedIn</label>
              </div>
              <!--               <div class="form-outline form-white mb-4">
                <input type="password" v-model="userLogin.password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Contraseña</label>
              </div> -->

              <button class="btn btn-outline-light btn-lg px-5" type="submit">
                Modificar Datos
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import InputComponentVue from "./InputComponent.vue";

import ServiceUsuarios from "./../services/ServiceUsuarios";
const serviceUsuarios = new ServiceUsuarios();
export default {
  name: "EditUserComponent",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    serviceUsuarios.GetUserByToken().then((res) => {
      this.user = res.data;
      console.log(res.data);
    });
  },
  methods: {
    modificarDatos() {
      serviceUsuarios.PutModifyUser(this.user).then((res) => {
        console.log(res);
      });
    },
  },
  components: {
    //InputComponentVue,
  },
};
</script>

<style>
</style>