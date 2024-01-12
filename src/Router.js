import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"
import PersonalComponent from "./components/PersonalComponent.vue"

const myRoutes = [
    {
        path: '/', component : HomeComponent
    },
    {
        path: '/login', component : LoginComponent,  meta: { guest: true }
    },
    {
        path: '/register', component : RegisterComponent,  meta: { guest: true }
    },
    {
        path: '/personal', component : PersonalComponent,  meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      const token = localStorage.getItem('token');
      if (token) {
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
