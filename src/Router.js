import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"

const myRoutes = [
    {
        path: '/', component : HomeComponent
    },
    {
        path: '/login', component : LoginComponent
    },
    {
        path: '/register', component : RegisterComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;
