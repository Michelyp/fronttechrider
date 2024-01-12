<template>
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <form class="mb-md-5 mt-md-4 pb-5" v-on:submit.prevent="inciarSesion()">

              <h2 class="fw-bold mb-2 text-uppercase">Iniciar Sesión</h2>
              <p class="text-white-50 mb-5">Introduce usuario y contraseña</p>

              <div class="form-outline form-white mb-4">
                <input type="email" v-model="userLogin.email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" v-model="userLogin.password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Contraseña</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Enviar</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </form>

            <div>
              <p class="mb-0">¿No tienes una cuenta? <router-link to="/register" class="text-white-50 fw-bold">Regístrate</router-link>
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
import ServiceUsuarios from "./../services/ServiceUsuarios";
const service = new ServiceUsuarios();

export default {
    name:"LoginComponent",
    data(){
      return{
        userLogin: {
          email: "",
          password:""
        }
      }
    },
      methods:{
        inciarSesion(){
          service.login(this.userLogin).then(result => {            
            localStorage.setItem("token", result.data.response);
            this.$router.push("/");
          }).catch((error) => console.log(error));          
        }
      }
}
</script>

<style>

</style>