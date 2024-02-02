<template>
  <div class="services pb-5">
    <div class="container">
      <div class="row">
        <div >
          <h2 class="vc_custom_heading ico_header">Tech Riders</h2>
          <hr />
          <div class="container">
            <div class="row" style="margin: 2.2rem;">
              <div
                v-for="tech in techRiders"
                :key="tech"
                class="card"
                style="width: 18rem; padding;:1rem"
              >
                <div class="investor-box">
                  <div class="card-group">
                    <img :src="tech.imagen" style="width: 150px" />
                    <div class="card-body">
                      <h5 class="card-title">{{ tech.techRider }}</h5>
                      <p class="card-text">{{ tech.email }}</p>
                      <!-- <p class="card-text">Marca: {{ cubo.marca }} Modelo: {{cubo.modelo}}</p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QueryService from "@/services/QueryService";
const service = new QueryService();
export default {
  name: "TechRidersList",
  data() {
    return {
      techRiders: []
    };
  },
  mounted() {
    this.loadTechsRiders();
  },
  methods: {
    loadTechsRiders() {
      service.TechRidersActivo().then((response) => {
        this.techRiders = response;
      });
    }
  }
};
</script>

<style>
.services a {
  text-decoration: none;
}
.services .service-box {
  text-align: center;
}
.services .service-box h2 {
  color: #222;
  font-size: 20px;
  padding-top: 10px;
  text-decoration: none;
}
.services a .service-box:hover h2 {
  color: #fb0626;
}
.services .investor-box {
  background-position: center center;
  padding: 20px;
  width: 100%;
  min-height: 150px;
  display: block;
  position: relative;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.services .investor-box h2 {
  font-size: 20px;
}
.services .investor-box .flip-view {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: red;
  left: -10%;
  padding: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 333ms;
}
.services .investor-box a {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
.services .investor-box:hover .flip-view {
  left: 0;
  visibility: visible;
  opacity: 1;
}
.container{
  text-align: cejte;
}
</style>
