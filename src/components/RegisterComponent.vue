<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-xl-9">
          <div
            class="card bg-light text-dark overflow-auto"
            style="border-radius: 1rem"
          >
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Registrate</h2>
                <p class="text-secondary-50 mb-4">Introduce los campos</p>

                <!--                 <div class="form-outline form-white mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Soy empresa
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Soy profesor
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Quiero ser Tech Rider
                    </label>
                  </div>
                </div> -->

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
                {{ radioCheck }}
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
                      <select
                        class="selectpicker"
                        data-show-subtext="true"
                        data-live-search="true"
                      >
                        <option value="" selected="true">
                          Seleccionar una marca
                        </option>
                        <option value="audi">Audi</option>
                        <option value="bmw">BMW</option>
                        <option value="citroen">Citroen</option>
                        <option value="fiat">Fiat</option>
                        <option value="ford">Ford</option>
                        <option value="honda">Honda</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="kia">Kia</option>
                        <option value="mazda">Mazda</option>
                      </select>

                      <InputComponentVue
                        class="mb-4 col-12 col-md-6"
                        type="text"
                        label="Centro"
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
                <div class="container col-md-11">
                  <div class="row">
                    <InputComponentVue
                      type="email"
                      label="Email"
                      id="typeEmail"
                    />
                  </div>
                  <div class="row">
                    <InputComponentVue
                      type="password"
                      label="Contraseña"
                      id="typePassword"
                    />
                  </div>
                  <div class="row">
                    <InputComponentVue
                      type="password"
                      label="Repetir contraseña"
                      id="typeConfirmPassword"
                    />
                  </div>
                </div>

                <button class="btn btn-outline-dark btn-lg px-5" type="submit">
                  Enviar
                </button>

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
                </div>
              </div>

              <div>
                <p class="mb-0">
                  ¿Ya tienes una cuenta?
                  <router-link to="/login" class="text-black-50 fw-bold"
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
import InputComponentVue from "./InputComponent.vue";

export default {
  name: "RegisterComponent",
  data() {
    return {
      radioCheck: ""
    };
  },
  components: {
    InputComponentVue
  }
};
</script>

<style></style>
