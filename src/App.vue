<template>  
<main>
<div class="h-75">
  <MenuComponent v-on:slide_menu="SlideMenu"/>
</div>
  <div class="container-fluid flex-grow-1 flex-column-reverse d-flex overflow-auto">
      <div class="row flex-grow-sm-1 flex-grow-0">
        <div class="col">         
          <router-view></router-view>            
        </div>
        <Transition name="slide_menu">
        <aside class="w-auto flex-grow-sm-1 flex-shrink-1 flex-grow-0 pe-0" >        
          <div class="bg-light border p-1 h-100 sticky-top border-0">       
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
      }else{
        this.IsOpen = true;
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
