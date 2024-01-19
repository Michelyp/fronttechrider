<template>
  <card>
    <div class="container py-5">
<!--       <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="btn-outline-dark rounded-3 p-3 mb-4">
            <div
              class="btn-group my-3"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked
              />
              <label class="btn btn-sm btn-outline-dark" for="btnradio1"
                >Datos personales</label
              >

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label class="btn btn-sm btn-outline-dark" for="btnradio2"
                >...</label
              >

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label class="btn btn-sm btn-outline-dark" for="btnradio3"
                >...</label
              >
            </div>
          </nav>
        </div>
      </div> -->

      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h5 class="my-3">{{ usuario.nombre }} {{ usuario.apellidos }}</h5>
              <p class="text-muted mb-1">{{ rol }}</p>

              <p class="text-muted mb-4">
               {{ provincia }}
              </p>
              <div class="d-flex justify-content-center mb-2">
                <button type="button" class="btn btn-primary">Editar</button>
              </div>
            </div>
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center p-3"
                >
                  <i style="color: #333333"
                    ><svg
                      id="LinkedIn_24"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width="24"
                        height="24"
                        stroke="none"
                        fill="#000000"
                        opacity="0"
                      />

                      <g transform="matrix(0.77 0 0 0.77 12 12)">
                        <path
                          style="
                            stroke: none;
                            stroke-width: 1;
                            stroke-dasharray: none;
                            stroke-linecap: butt;
                            stroke-dashoffset: 0;
                            stroke-linejoin: miter;
                            stroke-miterlimit: 4;
                            fill: rgb(0, 0, 0);
                            fill-rule: nonzero;
                            opacity: 1;
                          "
                          transform=" translate(-13, -13)"
                          d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z"
                          stroke-linecap="round"
                        />
                      </g></svg
                  ></i>
                  <a
                    class="mb-0  link-opacity-75 link-opacity-100-hover pe-auto" target="_blank"
                    :href="'https://'+usuario.linkedIn"
                    >LinkedIn</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Nombre</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ usuario.nombre }} {{ usuario.apellidos }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ usuario.email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Teléfono</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ usuario.telefono }}</p>
                </div>
              </div>
              <hr />
              <div class="row" v-if="usuario.idRole == 2"> <!-- Profesor-->
                <div class="col-sm-3">
                  <p class="mb-0">Centro</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{provincia}}</p>
                </div>
              </div>
              <div class="row" v-else-if="usuario.idRole == 4"> <!-- Representante -->
                <div class="col-sm-3">
                  <p class="mb-0">Empresa</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{empresa.nombre}}</p>
                </div>
              </div>
            </div>
          </div>
          <!--           <div class="row">
            <div class="col-md-6">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.77rem">Web Design</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Website Markup
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 72%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">One Page</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 89%"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Mobile Template
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 55%"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Backend API
                  </p>
                  <div class="progress rounded mb-2" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 66%"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.77rem">Web Design</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Website Markup
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 72%"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">One Page</p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 89%"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Mobile Template
                  </p>
                  <div class="progress rounded" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 55%"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Backend API
                  </p>
                  <div class="progress rounded mb-2" style="height: 5px">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 66%"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import ServiceUsuarios from "@/services/ServiceUsuarios";
const serviceUsuarios = new ServiceUsuarios();
import ServiceProvincia from "@/services/ServiceProvincia";
const serviceProvincia = new ServiceProvincia();
import ServiceRol from "@/services/ServiceRol";
const serviceRol = new ServiceRol();
import ServiceEmpresa from '@/services/ServiceEmpresa';
const serviceEmpresa = new ServiceEmpresa();
export default {
  name: "PersonalComponent",
  data() {
    return {
      usuario: {},
      provincia: "",
      rol: "",
      empresa:{},
      centro:{}
    };
  },
  mounted() {
    serviceUsuarios.GetUserByToken().then((res) => {
      console.log(res.data);
      this.usuario = res.data;
      serviceProvincia
        .getProvinciasById(this.usuario.idProvincia)
        .then((res) => {
          this.provincia = res.data.nombreProvincia;
        });
      serviceEmpresa.GetEmpresasId(this.usuario.idEmpresaCentro).then((res)=>{
        console.log(res.data);
        this.empresa= res.data;
      })
      serviceRol
        .getRolesById(this.usuario.idRole)
        .then((res) => {
          this.rol = res.data.tipoRole;
        });
      
    });

    serviceRol.getRoles().then((res)=>{
      console.log(res.data)
    })
  },
};
</script>

<style>
</style>