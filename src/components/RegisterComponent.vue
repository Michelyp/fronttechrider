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
                <form
                  class="mb-md-5 mt-md-4"
                  v-on:submit.prevent="inciarSesion()"
                >
                  <h2 class="fw-bold mb-2 text-uppercase">Registrate</h2>
                  <p class="text-secondary-50 mb-4">Introduce los campos</p>
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
                      value="empresa"
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
                      value="profesor"
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
                      value="representante"
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
                      value="techrider"
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
                        <InputComponentVue
                          class="mb-4 col-12 col-md-6"
                          type="text"
                          label="Nombre"
                          id="typeNombre"
                          v-model="usuario.nombre"
                        />
                        <InputComponentVue
                          class="mb-4 col-12 col-md-6"
                          type="number"
                          label="Teléfono"
                          id="typeTelefono"
                          v-model="usuario.telefono"
                        />
                        <InputComponentVue
                          class="mb-4 col-12 col-md-6"
                          type="text"
                          label="Provincia"
                          id="typeProvincia"
                          v-model="usuario.provincia"
                        />
                        <InputComponentVue
                          class="mb-4 col-12 col-md-6"
                          type="text"
                          label="Apellidos"
                          id="typeApellidos"
                          v-model="usuario.apellidos"
                        />

                        <InputComponentVue
                          class="mb-4 col-12 col-md-6"
                          type="text"
                          label="Linkedin"
                          id="typeLinkedin"
                          v-model="usuario.linkedin"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="container col-md-11">
                    <div class="row">
                      <div
                        v-if="
                          radioCheck === 'empresa' ||
                          radioCheck === 'representante'
                        "
                      >
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
                      <div v-if="radioCheck === 'profesor'">
                        <model-select
                          class="col-12 col-md-6 rounded-3"
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
                      <div v-if="radioCheck === 'techrider'">
                        <model-select
                          class="col-12 col-md-6 rounded-3"
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
                      <InputComponentVue
                        type="email"
                        label="Email"
                        placeholder="name@example.com"
                        id="typeEmail"
                        required
                        class="pb-4"
                      />
                    </div>
                    <div class="row">
                      <InputComponentVue
                        type="password"
                        label="Contraseña"
                        min="8"
                        max="20"
                        id="typePassword"
                      />
                    </div>
                    <div id="passwordHelpBlock" class="form-text">
                      <p class="form-label text-secondary">
                        Su contraseña debe tener entre 8 y 20 caracteres,
                        contener letras y números, y no debe contener espacios,
                        caracteres especiales
                      </p>
                    </div>
                    <div class="row">
                      <InputComponentVue
                        type="password"
                        label="Repetir contraseña"
                        min="8"
                        max="20"
                        id="typeConfirmPassword"
                      />
                    </div>
                  </div>
                  <div id="passwordHelpBlock" class="form-text">
                    <p class="form-label text-secondary">
                      Su contraseña debe tener entre 8 y 20 caracteres, contener
                      letras y números, y no debe contener espacios, caracteres
                      especiales
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
import InputComponentVue from "./InputComponent.vue";
import { ModelSelect } from "vue-search-select";
import ServiceEmpresa from "@/services/ServiceEmpresa";
import ServiceUsuarios from "@/services/ServiceUsuarios";
const serviceUsuario = new ServiceUsuarios();
const service = new ServiceEmpresa();

export default {
  name: "RegisterComponent",

  data() {
    return {
      radioCheck: "empresa",
      empresaSeleccionada: "",
      techriderSeleccionado: "",
      options: [],
      item: "",
      usuario: {},
    };
  },
  components: {
    InputComponentVue,
    ModelSelect,
  },
  mounted() {
    this.loadCompany();
  },
  methods: {
    loadCompany() {
      service.GetEmpresas().then((response) => {
        this.options = response;
      });
    },
    sendData() {
      serviceUsuario.PostCreateUser(this.usuario).then((response) => {
        localStorage.setItem("token", response.data.response);
        this.$router.push("/login");
        console.log();
      });
    },
  },
};
</script>

<style></style>
