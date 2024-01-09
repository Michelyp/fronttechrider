<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div
            class="card bg-dark text-white overflow-auto"
            style="border-radius: 1rem"
          >
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Registrate</h2>
                <p class="text-white-50 mb-4">Introduce los campos</p>

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
                  class="btn-group my-3 "
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autocomplete="off"
                    checked
                  />
                  <label class="btn btn-sm btn-outline-light" for="btnradio1"
                    >Soy empresa</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autocomplete="off"
                  />
                  <label class="btn btn-sm btn-outline-light" for="btnradio2"
                    >Soy profesor</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autocomplete="off"
                  />
                  <label class="btn btn-sm btn-outline-light" for="btnradio3"
                    >Quiero ser Tech Rider</label
                  >
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeNombre"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeNombre">Nombre</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeApellidos"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeApellidos"
                    >Apellidos</label
                  >
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmail"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmail">Email</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeTelefono"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeTelefono">Teléfono</label>
                </div>

                <!-- Habría que comprobar si marca Tech o Empresa etc...-->
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeTelefono"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeCentro">Centro</label>
                </div>
                <!-- Habría que comprobar si marca Tech o Empresa etc...-->
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeProvincia"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeProvincia"
                    >Provincia</label
                  >
                </div>
                <!-- Habría que comprobar si marca Tech o Empresa etc...-->
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="typeLinkedin"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeLinkedin">LinkedIn</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePassword"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePassword"
                    >Contraseña</label
                  >
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typeConfirmPassword"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeConfirmPassword"
                    >Repetir Contraseña</label
                  >
                </div>

                <button class="btn btn-outline-light btn-lg px-5" type="submit">
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
export default {
  name: "RegisterComponent",
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
    };
  },
};
</script>

<style>
</style>