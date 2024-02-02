import Swal from 'sweetalert2';
import ServiceProvincia from '@/services/ServiceProvincia';
const serviceProvincia = new ServiceProvincia();


export const PromptEmpresa = {
  
    async promptForm() {

      const provincias = await this.Get_Provincias();
      // const valoracion = await this.GETValoracionesCharla(charla.idCharla);
      let empresa = {}
      const empresaFormHtml = this.RenderFormEmpresa(provincias);  
      Swal.fire({
        html:empresaFormHtml,    
        showConfirmButton : true,
        backdrop: true,
        showCloseButton:true,
        titleText: false,
        allowEscapeKey:false,
        customClass:{
          popup:"card pb-2",
        },
        preConfirm: ()=>{
         empresa = this.CreateEmpresasJSON(Swal.getPopup());
        }
      })
      return new Promise((resolve) => {
        resolve(empresa);
      });
    },

    RenderFormEmpresa(provincias){
      let form_charla= `
      <form >
      <div>
        <div class="col-md">
          <label for="nombreEmpresa" class="form-label col-form-label-sm">Nombre de empresa:</label>
          <input type="text" id="descripcionCharla" class="form-control"  required>
        </div>
        
        <div class="col-md">
          <label for="razonSocial" class="form-label col-form-label-sm">Razón Social:</label>
          <input type="text" id="razonSocial" class="form-control" required>
        </div>
    
        <div class="col-md">
          <label for="telefonoEmpresa" class="form-label col-form-label-sm">Telefono:</label>
          <input type="number" id="telefonoEmpresa" class="form-control" required>
        </div>

        <div class="col-md">
          <label for="cifEmpresa" class="form-label col-form-label-sm">Persona Contacto:</label>
          <input id="cifEmpresa" class="form-control" type="text" required>
        </div>

        <div class="input-group mt-4 pt-2">
          <span class="input-group-text" >Dirección:</span>
          <input type="text" id="direccionEmpresa" class="form-control fs-6 text-center" required>
        </div>

        <div class="input-group mt-3">
        <button class="btn btn-outline-warning" type="button">Provincia</button>
        <select class="form-select" id="select_provincia" required>
        <option value=-1 selected>Vacio</option>
          ${
            provincias.map(provincia => 
              `<option value="${provincia.idProvincia}">${provincia.nombreProvincia}</option>`
            )
          }
        </select>        
      </div>

      </div>
      </form>
      `
      return form_charla
    },

    async Get_Provincias() {
      try {
        
        const provincias = (await serviceProvincia.getProvincias()).data;
        return provincias;
      } catch (error) {
        console.error("Error fetching provincias:", error);
      }
    },

    // async GETValoracionesCharla(idCharla){
    //   try {
    //     const valoraciones = await (serviceCharlas.GET_ValoracionCharla(idCharla)).data;
    //     return valoraciones;
    //   } catch (error) {
    //     console.error("Error fetching valoracion:", error);
    //   }
    // },

    CreateEmpresasJSON(popup){
      var nombre = popup.querySelector("#descripcionCharla").value;
      var razonSocial = popup.querySelector("#razonSocial").value;
      var telefonoEmpresa = popup.querySelector("#telefonoEmpresa").value;
      var cifEmpresa = popup.querySelector("#cifEmpresa").value;
      var direccionEmpresa = popup.querySelector("#direccionEmpresa").value;
      var select_provincia = popup.querySelector("#select_provincia").value;

      var empresa = {
        "idEmpresaCentro": 0,
        "nombre": nombre,
        "direccion": direccionEmpresa,
        "telefono": telefonoEmpresa,
        "personaContacto": "string",
        "cif": cifEmpresa,
        "idProvincia": select_provincia,
        "razonSocial": razonSocial,
        "idTipoEmpresa": 1,
        "estadoEmpresa": 0
      }

      return empresa;
    }
}

