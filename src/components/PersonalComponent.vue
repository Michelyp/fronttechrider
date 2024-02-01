<template>
  <card v-if="usuario != undefined">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <svg id="pfp"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="rounded-circle img-fluid"
                style="width: 150px"
              >
                <path
                  d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 0 1-5.19-2.32 2.71 2.71 0 0 1 1.7-1 13.11 13.11 0 0 0 1.29-.28 2.32 2.32 0 0 0 .94-.34 1.17 1.17 0 0 0-.27-.7 3.61 3.61 0 0 1-1.32-2.87A3.18 3.18 0 0 1 8 4.07a3.18 3.18 0 0 1 2.86 3.42 3.6 3.6 0 0 1-1.32 2.88 1.13 1.13 0 0 0-.27.69 2.68 2.68 0 0 0 .93.31 10.81 10.81 0 0 0 1.28.23 2.63 2.63 0 0 1 1.78 1A7 7 0 0 1 8 15z"
                />
              </svg>

              <h5 class="my-3">{{ usuario.nombre }} {{ usuario.apellidos }}</h5>
              <p class="text-muted mb-1">{{ rol }}</p>

              <p class="text-muted mb-4">
                {{ provincia }}
              </p>
              <div class="d-flex justify-content-center mb-2">
                <router-link class="btn btn-outline-secondary mx-2" to="/personal/editar"
                  >Editar datos</router-link
                >
                <router-link
                  class="btn btn-outline-secondary mx-2"
                  to="/personal/editpassword"
                  >Cambiar Contraseña</router-link
                >
              </div>
            </div>
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center p-3"
                >
                  <i id="linkedin" style="color: #333333"
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
                    class="mb-0 link-opacity-75 link-opacity-100-hover pe-auto"
                    target="_blank"
                    :href="'https://' + usuario.linkedIn"
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
              <div class="row" v-if="usuario.idRole == 2">
                <!-- Profesor-->
                <div class="col-sm-3">
                  <p class="mb-0">Centro</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ provincia }}</p>
                </div>
              </div>
              <div class="row" v-else-if="usuario.idRole == 4">
                <!-- Representante -->
                <div class="col-sm-3">
                  <p class="mb-0">Empresa</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ empresa.nombre }}</p>
                </div>
              </div>
            </div>
          </div>
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
import ServiceEmpresa from "@/services/ServiceEmpresa";
const serviceEmpresa = new ServiceEmpresa();
export default {
  name: "PersonalComponent",
  data() {
    return {
      usuario: {},
      provincia: "",
      rol: "",
      empresa: {},
      centro: {},
    };
  },
  mounted() {
    serviceUsuarios
      .GetUserByToken()
      .then((res) => {
        this.usuario = res.data;

        serviceProvincia
          .getProvinciasById(this.usuario.idProvincia)
          .then((res) => {
            this.provincia = res.data.nombreProvincia;
          });
        if (res.data.idRole != 3 && res.data.idRole != 1) {
          serviceEmpresa
            .GetEmpresasId(this.usuario.idEmpresaCentro)
            .then((res) => {
              this.empresa = res.data;
            });
        }

        serviceRol.getRolesById(this.usuario.idRole).then((res) => {
          this.rol = res.data.tipoRole;
        });
      })
      .catch((err) => {
        console.log("Ocurrió un error " + err);
        this.usuario = undefined;
      });
  },
};
</script>

<style>
[data-bs-theme="dark"] #linkedin, #pfp {
  filter: invert(100%);
}
</style>