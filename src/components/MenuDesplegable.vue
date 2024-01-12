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
            <li v-for="option in OptionList" :key="option" class="nav-item">              
                <router-link class="nav-link active" aria-current="page" :to="option.url">
                  {{ option.text }}
                </router-link>
              </li>            
          </ul>       
        </div>
      </div>
  </nav>
</template>
  
  <script>
  import ServiceUsuarios from "./../services/ServiceUsuarios";
  const service = new ServiceUsuarios();

  export default {
    name:"MenuDesplegableComponent",
    data(){
      return{
        OptionList:[],
        token:  localStorage.getItem("token")
      }
    },
    watch:{
      $route (to,from){
        if(to != from){
          this.token = localStorage.getItem("token");
        }
      },
      token (newToken, oldToken){
        if(newToken != oldToken){
          this.LoadOptionList(newToken);
        }
      }
    },
    mounted(){
      if(localStorage.getItem("token") != null){
        this.LoadOptionList();
      }
    }
    ,
    methods: {        
      LoadOptionList(){
        var idRole = null;
        service.GetUserByToken().then(result => {
            idRole = result.data.idRole
            if(idRole == 1){
             this.OptionList=[
              {
                url:"/CrearCharla",
                text:"+ Nueva Charla"
              },              
             ]
            }
            if(idRole == 2){
              console.log(idRole);
            }
            if(idRole == 3){
              console.log(idRole);
            }
          }).catch((error) => console.log(error));                
      }
    },  
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