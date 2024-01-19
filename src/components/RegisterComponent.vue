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
              <div class="mb-md-5 mt-md-4 pb-5">
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
                  <label class="btn btn-sm btn-outline-dark" for="btnradio1"
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
                  <label class="btn btn-sm btn-outline-dark" for="btnradio2"
                    >Soy profesor</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    v-model="radioCheck"
                    value="techrider"
                    autocomplete="off"
                  />
                  <label class="btn btn-sm btn-outline-dark" for="btnradio3"
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

                      <model-select
                        v-if="radioCheck === 'empresa'"
                        class="mb-4 col-12 col-md-6"
                        ref="select"
                        :options="options"
                        v-model="item"
                        placeholder="placeholder text"
                      >
                      </model-select>
                      <model-select
                        v-if="radioCheck === 'representante'"
                        class="mb-4 col-12 col-md-6"
                        ref="select"
                        :options="options"
                        v-model="item"
                        placeholder="placeholder text"
                      >
                      </model-select>

                      <!-- Este select será para los tech riders -->
                      <model-select
                        v-if="radioCheck === 'techrider'"
                        class="mb-4 col-12 col-md-6 form-select bg-black"
                        ref="select"
                        :options="options"
                        v-model="item"
                        placeholder="placeholder text"
                      >
                      </model-select>
                    </div>
                  </div>
                </div>
                <div class="container col-md-11">
                  <div class="row">
                    <InputComponentVue
                      type="email"
                      label="Email"
                      placeholder="name@example.com"
                      id="typeEmail"
                      required
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
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
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
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </div>
                <button class="btn btn-outline-light btn-lg px-5" type="submit">
                  Enviar
                </button>
<!-- 
                <div
                  class="d-flex justify-content-center text-center mt-4 pt-1"
                >
                  <a href="#!" class="text-white"
                    ><i class="fab fa-facebook-f fa-lg"></i
                  ></a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                  ></a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-google fa-lg"></i
                  ></a>
                </div> -->
              </div>

              <div>
                <p class="mb-0">
                  ¿Ya tienes una cuenta?
                  <router-link to="/login" class="fw-bold"
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
const service = new ServiceEmpresa();

export default {
  name: "RegisterComponent",

  data() {
    return {
      radioCheck: "empresa",
      options: [],
      item: "",
      usuario:{
        
      }
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
  },
};
</script>

<style></style>
