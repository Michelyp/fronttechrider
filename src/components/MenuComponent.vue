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
          <router-link class="nav-link" to="/personal">Personal(solo accesible si sesion)</router-link>
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
        <li class="nav-item ms-auto" v-else>
          <a class="nav-link btn" @click="logOut()">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </div>
  <button class="btn btn-outline-secondary align-items-center justify-content-center float-end" type="button" @click="rotate = !rotate; Handle_Slide_MenuDesplegableComponent()"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2">    
    <div class="icon-container" :class="{ 'rotate': rotate }">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
    </div>            
  </button>
  </nav>
</template>
<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      loggedIn: false,
      rotate: false
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
    Handle_Slide_MenuDesplegableComponent(){        
        this.$emit("slide_menu");
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
.icon-container {
    transition: transform 0.3s ease-in-out;
  }

.rotate {
  transform: rotate(180deg);
}
</style>