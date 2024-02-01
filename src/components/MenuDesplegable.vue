<template>
    <nav class="navbar navbar-collapse-sm cd-flex bg-body-tertiary flex-shrink-0 z-1" id="menu_despegable"> <!--h-100-->  
      <div class="container-fluid float-end d-flex flex-shrink-0 ">
        <button class="navbar-toggler ms-auto px-1 py-0 my-1 d-none" type="button" data-bs-toggle="expanse" data-bs-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>   
          <div class="card h-auto collapse navbar-collapse flex-shrink-0 list-group" id="navbarNavDropdown2">
            <ul class="navbar-nav" v-if="token != null">
              <button class="nav-item btn-close position-absolute top-0 m-2 end-0 z-3" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2" id="button_overlay_menu_despegable" @click="SlideMenu"/>                          
              <li v-for="option in OptionList" :key="option" class="nav-item">              
                  <router-link class="nav-link px-2" exact-active-class="active" :to="option.url">
                    {{ option.text }}
                  </router-link>
                </li>            
            </ul>       
        </div>
      </div>
  </nav>
</template>
  <script>
  import {LogAlert} from "./LogInPromp";
  import ServiceUsuarios from "./../services/ServiceUsuarios";
  const service = new ServiceUsuarios();

  export default {
    name:"MenuDesplegableComponent",
    data(){
      return{
        OptionList:[],
        token:  sessionStorage.getItem("token") ?? null
      }
    },
    watch:{
      $route (to,from){
        if(to != from){
          this.token = sessionStorage.getItem("token");
        }
      },
      token (newToken, oldToken){
        if(newToken != oldToken){
          this.LoadOptionList();
        }
      }
    },
    mounted(){
      if(sessionStorage.getItem("token") != null){
        this.LoadOptionList();
      }
    }
    ,
    methods: {        
      LoadOptionList(){
        var idRole = null;
        service.GetUserByToken().then(result => {
          if(result.status == 200){

            idRole = result.data.idRole;
            //ROLES: 1 ADMIN, 2 PROFESOR, 3 TECHRIDER, 4 REPRESENTANTE
            if(idRole == 1){
             this.OptionList=[
              {
                url:"/techriders",
                text:"techriders"
              },
              {
                url:"/empresas",
                text:"Empresas y sus responsables"
              },
              {
                url:"/estado",
                text:"Estados charlas"
              },
              {
                url:"/personal",
                text:"Cuenta"
              }
             ]
            }
            if(idRole == 2){
              this.OptionList=[
              {
                url:"/charlas",
                text:"Charlas"
              },      
              
              {
                url:"/personal/cursos",
                text:"Cursos"
              },
              {
                url:"/personal",
                text:"Cuenta"
              }
             ]
            }
            if(idRole == 3){
              this.OptionList=[
              {
                url:"/charlas",
                text:"Charlas"
              },
              {
                url:"/personal",
                text:"Cuenta"
              }
              ]
            }
            if(idRole == 4){
              this.OptionList=[
              {
                url:"/charlas",
                text:"Charlas"
              },      
              {
                url:"/charlas/completadas",
                text:"Charlas Completadas"
              },
              {
                url:"/charlas/pendientes",
                text:"Charlas Pendientes"
              },
              {
                url:"/personal/cursos",
                text:"Sedes"
              },
              {
                url:"/personal",
                text:"Cuenta"
              }
              ]
            }
          }else{            
            LogAlert.Alert();
          }        
          });                
      },
      Handle_Slide_MenuDesplegableComponent(){        
          this.$emit("slide_menu");
      }
    },  
  };
  </script>
  <style>
    #menu_despegable .nav-link:hover{
      background-color: rgba(255, 0, 0, 0.29);
      border-radius: 12px;
    }
    #button_overlay_menu_despegable{
      display: none;
    }
    /*675px*/
    @media only screen and (max-width: 1650px) {
      #navbarNavDropdown2 {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.9;
        justify-content: center;
        align-items: center;
        z-index: 2;
      }
      #navbarNavDropdown2 ul {
        padding: 20px;
      }
      #button_overlay_menu_despegable{
        display: block;
      }
      #menu_desplegable_container{
        width: 0;
      }
  }
  </style>