<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Inicio</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Features</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ms-auto" v-if="!loggedIn">
            <router-link class="nav-link" to="/login"
              >Iniciar Sesión</router-link
            >
          </li>
          <li class="nav-item ms-auto" v-if="loggedIn">
            <a class="btn nav-link" @click="logOut">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    isLoggedIn() {
      if (localStorage.getItem("token") != null) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    },
    logOut(){
      localStorage.clear();
      location.reload();
    }
  },
  mounted(){
    this.isLoggedIn();
  }
};
</script>

<style>
</style>