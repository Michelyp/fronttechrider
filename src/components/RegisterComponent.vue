<template>
  <section class="gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-xl-9">
          <div
            class="card bg-dark text-white overflow-auto"
            style="border-radius: 1rem"
          >
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4">
                <form class="mb-md-5 mt-md-4" v-on:submit.prevent="sendData()">
                  <h2 class="fw-bold mb-2 text-uppercase">Registrate</h2>
                  <p class="text-secondary-50 mb-4">Introduce los campos</p>
                  <div
                    class="btn-group my-3"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <!-- ROLES: 1 ADMIN, 2 PROFESOR, 3 TECHRIDER, 4 REPRESENTANTE -->
                    <!--Revisar el id rol-->
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autocomplete="off"
                      v-model="radioCheck"
                      :value="4"
                      checked
                    />
                    <label
                      class="btn btn-sm btn-outline-secondary"
                      for="btnradio1"
                      >Soy empresa</label
                    >

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      v-model="radioCheck"
                      :value="2"
                      autocomplete="off"
                    />

                    <label
                      class="btn btn-sm btn-outline-secondary"
                      for="btnradio2"
                      >Soy profesor</label
                    >

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio3"
                      v-model="radioCheck"
                      :value="4"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-sm btn-outline-secondary"
                      for="btnradio3"
                      >Representante</label
                    >

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio4"
                      v-model="radioCheck"
                      :value="3"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-sm btn-outline-secondary"
                      for="btnradio4"
                      >Quiero ser Tech Rider</label
                    >
                  </div>
                  <!--  {{ radioCheck }} -->
                  <div id="container-principal" class="container">
                    <div class="container">
                      <div class="row">
                        <div
                          class="form-outline form-white mb-4 col-12 col-md-6"
                        >
                          <input
                            class="form-control form-control-lg"
                            type="text"
                            label="Nombre"
                            id="typeNombre"
                            v-model="nombreUsuario"
                            pattern="^[a-zA-Z]{3,}$"
                          />
                          <label class="form-label">
                            Nombre <span style="color: red">*</span></label
                          >
                        </div>
                        <div
                          class="form-outline form-white mb-4 col-12 col-md-6"
                        >
                          <input
                            class="form-control form-control-lg"
                            type="number"
                            id="typeTelefono"
                            v-model="telefonoUsuario"
                            pattern="^(6|7|8|9)\d{8}$"
                          />
                          <label class="form-label">
                            Teléfono <span style="color: red">*</span></label
                          >
                        </div>
                        <div
                          class="form-outline form-white mb-4 col-12 col-md-6"
                        >
                          <input
                            class="form-control form-control-lg"
                            type="text"
                            id="typeApellidos"
                            v-model="apellidosUsuario"
                            pattern="^[a-zA-Z]{3,}$"
                          />
                          <label class="form-label">
                            Apellidos <span style="color: red">*</span></label
                          >
                        </div>
                        <div
                          class="form-outline form-white mb-4 col-12 col-md-6"
                        >
                          <input
                            class="form-control form-control-lg"
                            type="text"
                            label="Linkedin"
                            id="typeLinkedin"
                            v-model="linkedInUsuario"
                            pattern="^(https:\/\/)?www\.linkedin\.com\/.*$"
                          />
                          <label class="form-label">
                            Linkedin <span style="color: red">*</span></label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container col-md-11">
                    <div class="row">
                      <div v-if="radioCheck === 4">
                        <model-select
                          class="col-12 col-md-6 rounded-3 border-secondary"
                          ref="select"
                          :options="options"
                          v-model="empresaSeleccionada"
                          placeholder="Escriba su empresa"
                        >
                        </model-select>
                        <label class="form-label pb-4">
                          Empresa <span style="color: red">*</span></label
                        >
                      </div>
                      <model-select
                        class="col-12 col-md-6 rounded-3 border-secondary"
                        ref="select"
                        :options="optionsProvincia"
                        v-model="provinciaSeleccionada"
                        placeholder="Escriba su provincia"
                      >
                      </model-select>
                      <label class="form-label pb-4">
                        Provincia <span style="color: red">*</span></label
                      >
                      <div v-if="radioCheck === 2">
                        <model-select
                          class="col-12 col-md-6 rounded-3 border-secondary"
                          ref="select"
                          :options="options"
                          v-model="empresaSeleccionada"
                          placeholder="Escriba su centro"
                        >
                        </model-select>
                        <label class="form-label pb-4">
                          Centro <span style="color: red">*</span></label
                        >
                      </div>
                      <div v-if="radioCheck === 3">
                        <model-select
                          class="col-12 col-md-6 rounded-3 border-secondary"
                          ref="select"
                          :options="options"
                          v-model="techriderSeleccionado"
                          placeholder="Escriba su empresa"
                        >
                        </model-select>
                        <label class="form-label pb-4">
                          Empresa <span style="color: red">*</span></label
                        >
                      </div>
                      <div class="form-outline form-white mb-4 col-12">
                        <input
                          class="form-control form-control-lg"
                          type="email"
                          placeholder="name@example.com"
                          id="typeEmail"
                          v-model="emailUsuario"
                        />
                        <label class="form-label">
                          Email <span style="color: red">*</span></label
                        >
                      </div>
                    </div>

                    <!-- pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" -->
                    <div class="row">
                      <div class="form-outline form-white mb-4 col-12">
                        <input
                          class="form-control form-control-lg"
                          type="password"
                          id="typePassword"
                          v-model="passwordUsuario"
                          min="8"
                          max="20"
                        />
                        <label class="form-label">
                          Contraseña <span style="color: red">*</span></label
                        >
                      </div>
                    </div>
                    <div id="passwordHelpBlock" class="form-text">
                      <p class="form-label text-secondary">
                        Su contraseña debe tener entre 8 y 20 caracteres,
                        contener letras y números, y no debe contener espacios,
                        caracteres especiales
                      </p>
                    </div>
                    <div class="row">
                      <div class="form-outline form-white mb-4 col-12">
                        <input
                          class="form-control form-control-lg"
                          type="password"
                          id="typeConfirmPassword"
                          v-model="passwordUsuario"
                          min="8"
                          max="20"
                        />
                        <label class="form-label">
                          Repetir contraseña
                          <span style="color: red">*</span></label
                        >
                      </div>
                    </div>
                  </div>
                  <div id="passwordHelpBlock" class="form-text">
                    <p class="form-label text-secondary">
                      Su contraseña debe ser igual
                    </p>
                  </div>
                  <button
                    class="btn btn-outline-light btn-lg px-5 mt-3"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>
              </div>
              <div>
                <p class="mb-0">
                  ¿Ya tienes una cuenta?
                  <router-link to="/login" class="text-white-50 fw-bold"
                    >Inicia Sesión</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vue-search-select/dist/VueSearchSelect.css";
import { ModelSelect } from "vue-search-select";
import ServiceEmpresa from "@/services/ServiceEmpresa";
import ServiceUsuarios from "@/services/ServiceUsuarios";
const serviceUsuario = new ServiceUsuarios();
const service = new ServiceEmpresa();

export default {
  name: "RegisterComponent",
  //ROLES: 1 ADMIN, 2 PROFESOR, 3 TECHRIDER, 4 REPRESENTANTE
  data() {
    return {
      radioCheck: "",
      empresaSeleccionada: "",
      techriderSeleccionado: "",
      provinciaSeleccionada: "",
      options: [],
      optionsProvincia: [],
      item: "",
      repeatPassword: "",
      nombreUsuario: "",
      apellidosUsuario: "",
      emailUsuario: "",
      telefonoUsuario: 0,
      linkedInUsuario: "",
      passwordUsuario: "",
      idRoleUsuario: 0,
    };
  },
  components: {
    ModelSelect,
  },
  mounted() {
    this.loadCompany();
    this.loadProvince();
  },
  methods: {
    loadProvince() {
      serviceUsuario.getAllProvincia().then((response) => {
        this.optionsProvincia = response;
      });
    },
    loadCompany() {
      service.GetEmpresas().then((response) => {
        this.options = response;
      });
    },
    sendData() {
      const usuario = {
        idUsuario: 99,
        nombre: this.nombreUsuario,
        apellidos: this.apellidosUsuario,
        email: this.emailUsuario,
        telefono: this.telefonoUsuario,
        linkedIn: this.linkedInUsuario,
        password: this.passwordUsuario,
        idRole: this.radioCheck,
        idProvincia: this.provinciaSeleccionada,
        idEmpresaCentro: this.empresaSeleccionada,
        estado: 1,
        linkedInVisible: 0,
      };
      console.log(usuario);

      serviceUsuario.PostCreateUser(usuario).then((response) => {
        console.log("Hola" + response);
        sessionStorage.setItem("token", response.data.response);
        this.$router.push("/");
      }).catch(err=>{
        console.log("Error" + err)
      });
    },
    // comparativePassword(){
    //   if()
    // }
  },
};
</script>

<style>
[data-bs-theme="dark"] .ui.fluid.search.selection.dropdown,
[data-bs-theme="dark"] .ui.selection.dropdown .menu .item {
  background-color: rgb(33, 37, 41);
  color: rgb(155, 157, 158);
}
[data-bs-theme="dark"] .ui.selection.dropdown .menu :hover {
  background-color: rgb(66, 75, 83);
}
</style>
