<template>
  <div class="card text-center w-auto">
  <div class="card-header">
  <ul class="nav nav-tabs card-header-tabs fs-md-6">
        <li class="nav-item w-auto">
          <router-link to="completadas" class="nav-link w-auto" exact-active-class="active">Completadas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="disponibles" class="nav-link w-auto" exact-active-class="active">Disponibles</router-link>
        </li>
        <li class="nav-item">
          <router-link to="pendientes" class="nav-link w-auto" exact-active-class="active">Pendientes</router-link>
        </li>
      </ul>
  </div>
  <div class="card-body">
    <section>
      <router-view></router-view>
    </section>
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
@media only screen and (max-width: 800px) {
	
	#flip-scroll .cf:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
	#flip-scroll * html .cf { zoom: 1; }
	#flip-scroll *:first-child+html .cf { zoom: 1; }
	
	#flip-scroll table { width: 100%; border-collapse: collapse; border-spacing: 0; }
 
	#flip-scroll th,
	#flip-scroll td { margin: 0; vertical-align: top; }
	#flip-scroll th { text-align: left; }
	
	#flip-scroll table { display: block; position: relative; width: 100%; }
	#flip-scroll thead { display: block; float: left; }
	#flip-scroll tbody { display: block; width: auto; position: relative; overflow-x: auto; white-space: nowrap; }
	#flip-scroll thead tr { display: block; }
	#flip-scroll th { display: block; text-align: right; }
	#flip-scroll tbody tr { display: inline-block; vertical-align: top; }
	#flip-scroll td { display: block; min-height: 1.25em; text-align: left; }
 
 
	/* sort out borders */
 
	#flip-scroll th { border-bottom: 0; border-left: 0; }
	#flip-scroll td { border-left: 0; border-right: 0; border-bottom: 0; }
	#flip-scroll tbody tr { border-left: 1px solid #babcbf; }
	#flip-scroll th:last-child,
	#flip-scroll td:last-child { border-bottom: 1px solid #babcbf; }
}
</style>