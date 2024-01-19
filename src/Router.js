import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"
import PersonalComponent from "./components/PersonalComponent.vue"
import CalendarComponent from "./components/CalendarComponent.vue"
import CursosComponent from "./components/ComponentsProfesor/CursosComponent.vue"
import CharlasDisponibles from "./components/ComponentsTechRiders/CharlasDisponiblesComponent.vue"
import CharlasCompletadasComponent from "./components/ComponentsTechRiders/CharlasCompletadasComponent.vue"
import CharlasPendientesComponent from "./components/ComponentsTechRiders/CharlasPendientesComponent.vue"
import CharlasGeneralComponent from "./components/ComponentsTechRiders/CharlasGeneralComponent.vue"
import ServiceUsuarios from './services/ServiceUsuarios';


const serviceUsuarios = new ServiceUsuarios();

//ROLES: 1 ADMIN, 2 PROFESOR, 3 TECHRIDER, 4 REPRESENTANTE
//Use meta: { requiresAuth: true, role: [X,Y] }
const myRoutes = [
    {
        path: '/', component : HomeComponent
    },
    {
      path:'/calendar', component : CalendarComponent
    },
    {
        path: '/login', component : LoginComponent,  meta: { guest: true }
    },
    {
        path: '/register', component : RegisterComponent,  meta: { guest: true }
    },
    {
        path: '/personal', component : PersonalComponent,  meta: { requiresAuth: true },
    },
    {
      path: '/charlas', component : CharlasGeneralComponent,  meta: { requiresAuth: true }, 
        children:
        [
          {path: "completadas" , component:CharlasCompletadasComponent },
          {path: "disponibles" , component:CharlasDisponibles },
          {path: "pendientes" , component:CharlasPendientesComponent },
        ]
    },
    {
      path: "/personal/cursos" , component:CursosComponent,  meta: { requiresAuth: true, role: [1,2] } 
    },
    {
    path: '/admin', component: PersonalComponent, meta: { requiresAuth: true, role: [1] }
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

router.beforeEach((to, from, next) => {
  //Checks if Route needs Auth
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');

    // Checks if User has Token
    if (token) {
      var rolUsuario;
      // Checks if meta has role
      if(to.meta.role != undefined){
        //Gets role and checks if meta.role = User.role
        serviceUsuarios.GetUserByToken().then(res=>{
          rolUsuario = res.data.idRole;
          console.log("RolUsuario: "+rolUsuario);

          if(to.meta.role.includes(rolUsuario)){
            next();
          }else{
            //Unauthorized
            console.log("Unauthorized");
            next("/login");
          }
        });
        //console.log(to.meta.role.includes(rolUsuario));
      }

      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});
export default router;
