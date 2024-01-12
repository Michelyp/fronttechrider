<template>
  <div class="card text-center">
  <div class="card-header">
  <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link to="completadas" class="nav-link" :class="{ 'active': $route.path === '/completadas'}">Completadas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="disponibles" class="nav-link" :class="{ 'active': $route.path === '/disponibles'}">Disponibles</router-link>
        </li>
        <li class="nav-item">
          <router-link to="pendientes" class="nav-link" :class="{ 'active': $route.path === '/pendientes'}">Pendientes</router-link>
        </li>
      </ul>
  </div>
  <div class="card-body">
    <router-view></router-view>
  </div>
</div>
</template>
<script>

export default {
    name:"CharlasGeneral",
    data(){
        return{
            charlas:[]
        }
    }
}
</script>
<style>
    
</style>