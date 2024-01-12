<template>
 
    <nav class="navbar navbar-collapse-sm cd-flex bg-body-tertiary flex-shrink-0" >      
      <div class="container-fluid float-end d-flex flex-shrink-0 ">
        <button class="navbar-toggler ms-auto px-1 py-0 my-1 d-none" type="button" data-bs-toggle="expanse" data-bs-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>   
          <div class="collapse navbar-collapse flex-shrink-0 list-group" id="navbarNavDropdown2">             
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link>    
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
    name:"MenuDesplegableComponent"
  };
  </script>
  <style>
    .slide_menu-leave-active,
    .slide_menu-enter-active {
      transition: all 0.5 linear;
    }
    .slide_menu-enter {
      min-height: 0px;
    }
    .slide_menu-leave-to {
      max-height: 200px;
    }
  </style>