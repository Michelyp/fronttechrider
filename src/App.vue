<template>
  <main>
    <div class="h-75">
      <MenuComponent v-on:slide_menu="SlideMenu" />
    </div>
    <div
      class="container-fluid flex-grow-1 flex-column-reverse d-flex "
    >
      <div class="row">
        <div class="col py-2">
          <router-view></router-view>
        </div>
        <aside
          class="w-auto flex-shrink-1 flex-grow-0 pe-0"
          id="col_app_menudespegable"
        >
          <div
            class="border h-100 border-0 p-0"
            id="menu_desplegable_container"
            ref="menu_desplegable_container"
          >
            <MenuDesplegableComponent v-on:slide_menu="SlideMenu" />
          </div>
        </aside>
      </div>
    </div>
  </main>
  <FooterComponent />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";
import MenuDesplegableComponent from "./components/MenuDesplegable";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  data() {
    return {
      IsOpen: false,
    };
  },
  components: {
    MenuComponent,
    MenuDesplegableComponent,
    FooterComponent,
  },
  methods: {
    SlideMenu() {
      if (this.IsOpen) {
        this.IsOpen = false;
      } else {
        this.IsOpen = true;
      }
    },
  },
};
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
}
</style>
