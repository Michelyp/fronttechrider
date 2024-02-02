import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"
import PersonalComponent from "./components/PersonalComponent.vue"
import CalendarComponent from "./components/CalendarComponent.vue"
import CursosComponent from "./components/ComponentsProfesor/CursosComponent.vue";
import CharlasGeneralComponent from "./components/CharlasGeneralComponent.vue";
import EditUserComponent from "./components/EditUserComponent.vue";
import ServiceUsuarios from './services/ServiceUsuarios';
import TechRiders from "./components/ComponentsAdministrador/TechRidersComponent.vue";
import ChangePassComponent from "./components/ChangePassComponent";
import EstadoCharla from "./components/ComponentsAdministrador/EstadoCharla.vue"
import Empresas from "./components/ComponentsAdministrador/EmpresasComponent.vue"
import AdminComponent from "./components/ComponentsAdministrador/AdminComponent.vue"
import TechRiderList from "./components/ComponentsPublic/TechRidersList.vue";
import PeticionesCategoriasComponent from "./components/ComponentsTech/PeticionesCategoriasComponent.vue";

const serviceUsuarios = new ServiceUsuarios();

//ROLES: 1 ADMIN, 2 PROFESOR, 3 TECHRIDER, 4 REPRESENTANTE
//Use meta: { requiresAuth: true, role: [X,Y] }
const myRoutes = [
  {
    path: '/', component: HomeComponent
  },
  {
    path: '/calendar', component: CalendarComponent
  },
  {
    path: '/login', component: LoginComponent
  },
  {
    path: '/register', component: RegisterComponent
  },
  {
    path: '/personal', component: PersonalComponent, meta: { requiresAuth: true },
  },
  {
    path: '/personal/editar', component: EditUserComponent, meta: { requiresAuth: true },
  },
  {
    path: '/personal/editPassword', component: ChangePassComponent, meta: { requiresAuth: true },
  },
  {
    path: '/charlas', component: CharlasGeneralComponent, meta: { requiresAuth: true },
  },
  {
    path: "/personal/cursos", component: CursosComponent, meta: { requiresAuth: true, role: [1, 2] }
  },
  {
    path: '/admin', component: AdminComponent, meta: { requiresAuth: true, role: [1] }
  },
  {
    path: '/techriders', component: TechRiders, meta: { requiresAuth: true, role: [1] }
  },
  {
    path: '/estado', component: EstadoCharla, meta: { requiresAuth: true, role: [1] }
  },
  {
    path: '/empresas', component: Empresas, meta: { requiresAuth: true, role: [1] }
  },
  {
    path: '/techriderpublic', component: TechRiderList
  },
  {
    path: '/peticionesTech', component: PeticionesCategoriasComponent, meta: { requiresAuth: true, role: [1,3] }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

router.beforeEach((to, from, next) => {
  //Checks if Route needs Auth
  if (to.meta.requiresAuth) {
    const token = sessionStorage.getItem('token');

    // Checks if User has Token
    if (token) {
      var rolUsuario;
      // Checks if meta has role
      if (to.meta.role != undefined) {
        //Gets role and checks if meta.role = User.role
        serviceUsuarios.GetUserByToken().then(res => {
          rolUsuario = res.data.idRole;
          console.log("RolUsuario: " + rolUsuario);

          if (to.meta.role.includes(rolUsuario)) {
            next();
          } else {
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
