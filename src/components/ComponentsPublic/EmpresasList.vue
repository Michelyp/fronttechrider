<template>
    <div class="container-fluid">
        <h2 class="vc_custom_heading ico_header">Empresas</h2>
          <hr />
        <div class="row " v-if="empresas.length > 0">
          <div class="col-md-6 col-lg-4 column card-empresa" v-for="empresa in empresas" :key="empresa">
            <div class="card rounded-1 gr-3">
                <h3>{{ empresa.nombre }} <br> {{ empresa.provincia }} </h3>
              <div class="txt card-body">
                
                <p><i class="bi bi-person icon"></i><strong>Contacto:</strong> {{ empresa.personaContacto }}</p>
                <p><i class="bi bi-card-text icon"></i><strong>Razón Social:</strong> {{ empresa.razonSocial }}</p>
                <p><i class="bi bi-briefcase icon"></i><strong>Tipo de Empresa:</strong> {{ empresa.tipoEmpresa }}</p>
                <p><i class="bi bi-info-circle icon"></i><strong>Estado de Empresa:</strong> {{ empresa.descripcionEstado }}</p>
                <p><i class="bi bi-phone icon"></i><strong>Teléfono:</strong> {{ empresa.telefono }}</p>
              </div>
              <a :href="'https://www.google.com/maps?q='+empresa.direccion+` `+empresa.provincia" target="_blank">Direcion</a>
            </div>
          </div>
        </div>
      </div>

  
  </template>
  
  <script>
    import ServiceEmpresa from '@/services/ServiceEmpresa';
    const serviceEmpresa = new ServiceEmpresa();

    export default {
    name: "EmpresasList",
    data() {
        return {
        empresas: []
        };
    },
    mounted() {
        this.LoadEmpresas()
    },
    methods: {
        LoadEmpresas(){
            serviceEmpresa.getEmpresasFormato().then(result=>{
                this.empresas = result;
            })
        }
    }
    };
  </script>

  <style>

  * {
    transition: .5s;
  }

  .column {
    margin-top: 3rem;
    padding-left: 3rem;
    &:hover {
      padding-left: 0;
      .card .txt {
        h1, p {
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
      a {
        color: rgba(255, 255, 255, 1);
        &:after {
          width: 10%;
        }
      }
    }
  }
  .card-empresa p i{
    font-size: 1rem;
    position: relative;
    right: 40px;
  }
  .card-empresa {
    min-height: 170px;
    max-height: 360px;
    margin: 0;
    padding: 1.7rem 1.2rem;
    color: rgba(0, 0, 0, 1);
    box-shadow: 0 0 21px rgba(0, 0, 0, .27);

    .txt {
      margin-left: -3rem;
      z-index: 1;
      h1 {
        font-size: 1.5rem;
        font-weight: 300;
        text-transform: uppercase;
      }
      p {
        font-size: .7rem;
        letter-spacing: 0rem;
        margin-top: 10px;
        opacity: 0;
        color: rgba(255, 255, 255, 1);
      }
    }

    a {
      z-index: 3;
      font-size: .7rem;
      color: rgba(0, 0, 0, 1);
      margin-left: 1rem;
      position: relative;
      bottom: -.5rem;
      text-transform: uppercase;
      &:after {
        content: "";
        display: inline-block;
        height: 0.5em;
        width: 0;
        margin-right: -100%;
        margin-left: 10px;
        border-top: 1px solid rgba(255, 255, 255, 1);
        transition: .5s;
      }
    }

    .ico-card {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    i {
      position: relative;
      right: -50%;
      top: 60%;
      font-size: 12rem;
      line-height: 0;
      opacity: .2;
      color: rgba(255, 255, 255, 1);
      z-index: 0;
    }
  
[data-bs-theme="light"]  .column {
    margin-top: 3rem;
    padding-left: 3rem;
    &:hover {
      padding-left: 0;
      .card .txt {
        margin-left: 1rem;
        h1, p {
          color: rgb(9, 9, 9);
          opacity: 1;
        }
      }
      a {
        color: rgb(10, 10, 10);
        &:after {
          width: 10%;
        }
      }
    }
  }
  }
[data-bs-theme="light"] .vc_custom_heading {
      color: rgb(10, 10, 10);
}

</style>
