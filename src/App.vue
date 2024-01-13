<template>  
<main>
<div class="h-75">
  <MenuComponent v-on:slide_menu="SlideMenu"/>
</div>
  <div class="container-fluid flex-grow-1 flex-column-reverse d-flex overflow-auto">
      <div class="row">
        <div class="col pt-2">         
          <router-view></router-view>            
        </div>
        <Transition name="slide_menu">
        <aside class="w-auto  flex-shrink-1 flex-grow-0 pe-0" >        
          <div class="bg-light border p-1 h-100 sticky-top border-0" id="menu_desplegable_container" ref="menu_desplegable_container">  
            <button class="btn-close position-absolute top-0 end-0" :onClick="SlideMenu"></button>
            <MenuDesplegableComponent/>         
          </div>
        </aside>
        </Transition>
      </div>  
    </div>
  </main>
  <FooterComponent/>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</template>
<script>
import MenuComponent from './components/MenuComponent.vue'
import MenuDesplegableComponent from './components/MenuDesplegable';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  data(){
    return{
      IsOpen: false
    }
  },
  components: {
    MenuComponent,
    MenuDesplegableComponent,
    FooterComponent
  },
  methods:{
    SlideMenu(){      
      if(this.IsOpen){
        this.IsOpen = false;
        if(window.innerWidth <= 600){
          this.$refs.menu_desplegable_container.style.display = "none";
        }
      }else{
        this.IsOpen = true;        
        this.$refs.menu_desplegable_container.style.display = "block";        
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  position: relative;
  min-height: 100%;
}

</style>
