import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"
import PersonalComponent from "./components/PersonalComponent.vue"
import ServiceUsuarios from './services/ServiceUsuarios';

const serviceUsuarios = new ServiceUsuarios();

//ROLES: 1 ADMIN, 2 PROFESOR/REPRESENTANTE, 3 TECHRIDER
//Use meta: { requiresAuth: true, role: [X,Y] }
const myRoutes = [
  {
    path: '/', component: HomeComponent
  },
  {
    path: '/login', component: LoginComponent
  },
  {
    path: '/register', component: RegisterComponent
  },
  {
    path: '/personal', component: PersonalComponent, meta: { requiresAuth: true }
  }, {
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
