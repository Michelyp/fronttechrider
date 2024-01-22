<template>
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
              v-on:submit.prevent="cambiarPass()"
            >
              <h2 class="fw-bold mb-2 text-uppercase">Cambiar Contraseña</h2>
              <!-- <p class="text-white-50 mb-5">Introduce usuario y contraseña</p> -->

              <div class="form-outline form-white mb-4">
                <input
                  type="password"
                  v-model="actualPass"
                  id="typePassword"
                  class="form-control form-control-lg"
                  required
                />
                <label class="form-label" for="typePassword"
                  >Introduce Contraseña Actual
                  <span style="color: red">*</span></label
                >
                <p v-if="!correctPassword">
                  <span style="color: red">Contraseña incorrecta</span>
                </p>
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="password"
                  v-model="newPass"
                  id="typePassword"
                  class="form-control form-control-lg"
                  required
                />
                <label class="form-label" for="typePassword"
                  >Introduce Contraseña Nueva
                  <span style="color: red">*</span></label
                >
              </div>

              <div class="form-outline form-white mb-4">
                <input
                  type="password"
                  v-model="confirmPass"
                  id="typePassword"
                  class="form-control form-control-lg"
                  required
                />
                <label class="form-label" for="typePassword"
                  >Confirma tu Contraseña
                  <span style="color: red">*</span></label
                >
                <p v-if="!passwordMatches">
                  <span style="color: red">Contraseñas no coinciden</span>
                </p>
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">
                Modificar Contraseña
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceUsuarios from "./../services/ServiceUsuarios";
const serviceUsuarios = new ServiceUsuarios();
export default {
  name: "ChangePassComponent",
  data() {
    return {
      user: {},
      actualPass: "",
      newPass: "",
      confirmPass: "",
      userPass: {},
      passwordMatches: true,
      correctPassword:true
    };
  },
  mounted() {
    serviceUsuarios.GetUserByToken().then((res) => {
      this.user = res.data;

      //console.log(res.data);
    });
  },
  methods: {
    cambiarPass() {
      if (this.user.password == this.actualPass) {
        this.correctPassword = true;
        console.log("Contraseña correcta con bd");
        if (this.newPass == this.confirmPass) {
          this.userPass = {
            idUser: this.user.idUsuario,
            password: this.newPass,
          };
          console.log(this.userPass);
          serviceUsuarios.putUpdatePasswordUsuarios(this.userPass).then((res) => {
            console.log(res.data);
            this.$router.push("/personal");
          });
        } else {
          this.passwordMatches = false;
          console.log("Contraseñas no coinciden");
        }
      } else {
        this.correctPassword = false;
          console.log("Contraseña incorrecta");
      }
    },
  },
};
</script>

<style>
</style>