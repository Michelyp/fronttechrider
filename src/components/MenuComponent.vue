<template>
 
  <nav class="navbar navbar-collapse-sm cd-flex bg-body-tertiary flex-shrink-0" >      
    <div class="container-fluid float-end d-flex flex-shrink-0 ">
      <button class="navbar-toggler ms-auto px-1 py-0 my-1 d-none" type="button" data-bs-toggle="expanse" data-bs-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>   
        <div class="collapse navbar-collapse flex-shrink-0 list-group" id="navbarNavDropdown2">             
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
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

#MenuDesplegable {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%; 
  }

.icon-container {
    transition: transform 0.3s ease-in-out;
  }

.rotate {
  transform: rotate(180deg);
}
</style>