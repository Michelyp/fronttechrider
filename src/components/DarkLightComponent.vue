<template lang="">
<div class="btn-group">
    <button
      class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
      type="button"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      data-bs-display="static"
      aria-label="Toggle theme"
    >
    <div v-html="selectedTheme.innerHTML"></div>      
    </button>

    <ul class="dropdown-menu dropdown-menu-lg-end z-3" aria-labelledby="bd-theme-text">
        <li>
            <button type="button" ref="light_theme_button" @click="changeTheme($event)" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false" >                
                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-sun-fill bi me-2 opacity-50 theme-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>
                Claro                
            </button>
        </li>
        <li>
            <button type="button" ref="dark_theme_button" @click="changeTheme($event)" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="true">
                <svg class="bi me-2 opacity-50 theme-icon bi bi-moon-stars-fill"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg>
                Oscuro              
            </button>
        </li>
<!--         <li>
            <button type="button" ref="auto_theme_button"  @click="changeTheme($event)" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                <svg class="bi me-2 opacity-50 theme-icon bi bi-circle-half" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
                </svg>
                Auto
            </button>
        </li> -->
    </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      selectedTheme: {},
    };
  },
  methods: {
    changeTheme(theme) {
      this.selectedTheme = theme.currentTarget;
      document.documentElement.setAttribute(
        "data-bs-theme",
        this.selectedTheme.getAttribute("data-bs-theme-value")
      );
      localStorage.setItem(
        "theme",
        this.selectedTheme.getAttribute("data-bs-theme-value")
      );
    },
  },
  mounted() {
    var tema = localStorage.getItem("theme");
    if (tema == undefined) {
      this.selectedTheme = this.$refs["light_theme_button"];
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      this.selectedTheme = this.$refs[tema + "_theme_button"];
      document.documentElement.setAttribute("data-bs-theme", tema);
    }
  },
};
</script>
<style >
[data-bs-theme="dark"] * {
  color: rgba(255, 255, 255, 0.548);
}
</style>