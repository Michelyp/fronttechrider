import Swal from 'sweetalert2';
import ServiceCursos from '@/services/ServiceCursos';
import ServiceEmpresa from '@/services/ServiceEmpresa';
import ServiceProvincia from '@/services/ServiceProvincia';
import {notifyMixin} from '@/components/ScriptsAlerts/PrompNotify'

const serviceCursos = new ServiceCursos();
const serviceEmpresa = new ServiceEmpresa();
const serviceProvincia = new ServiceProvincia();
export const PrompOptions = {
  
    async promptNotify(idRole, charla) {
      let options = `<div class="d-flex flex-column flex-row">`
      if(idRole == 2){
        if(charla.idEstadoCharla == 2 || charla.idEstadoCharla == 3){
        options += `
          <button type="button list-group-item mb-1 me-1" class="btn btn-outline-danger" value="Cancelar" >Cancelar</button>
          `
        }
        if(charla.idEstadoCharla == 5 || charla.idEstadoCharla == 6){
          options += `
          <button type="button list-group-item mb-1 me-1" class="btn btn-outline-warning" value="Valorar" >Valorar</button>
          `
        }
      }
      if(idRole == 3){
       
        if(charla.idTechRider == -1){
          options += `
            <button type="button" class="me-1 mb-1 btn btn-outline-success" value="Inscribirse" >Inscribirse</button>
          `
        }else{
          if(charla.idEstadoCharla == 2 || charla.idEstadoCharla == 3 ){
            options += `
              <button type="button" class="me-1 mb-1 btn btn-outline-danger" value="Abandonar" >Abandonar</button>
            `
          }
        }
        if(charla.idEstadoCharla == 5){
          options += `
            <button type="button" class="mb-1 btn btn-outline-warning" value="Acreditar" >Acreditar</button>
          `
        }   
      }
      options +="</div>"

      //Loading Alert
      Swal.fire({
        title: "LOADING...",
        timer: 2000,
        timerProgressBar: true,
        icon: 'info',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        customClass:{
          popup:"card pb-2",
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          notifyMixin.promptNotify(500);
        }
      });

      const direccionPromise = this.Get_DireccionCharla(charla.idCurso);
      const direccion = await direccionPromise;
      const charlaHTML = this.RenderCharla(charla,direccion);      

     Swal.fire({
        html:charlaHTML,        
        showConfirmButton : false,
        backdrop: true,
        showCloseButton:true,
        titleText: false,
        allowEscapeKey:false,
        footer:options,
        customClass:{
          popup:"card pb-2",
        },
      });
    },

    RenderCharla(charla, direccion){
      
      let form_charla= `
      <form >
      <div>
        <div class="col-md-6">
          <label for="descripcionCharla" class="form-label col-form-label-sm">Descripción de la Charla:</label>
          <input type="text" id="descripcionCharla" class="form-control" value="${charla.descripcionCharla}" disabled>
        </div>
        
        <div class="col-md-6">
          <label for="email" class="form-label col-form-label-sm">Email:</label>
          <input type="text" id="email" class="form-control" value="${charla.email}" disabled>
        </div>
        
        <div class="col-md-6">
          <label for="estadoCharla" class="form-label col-form-label-sm">Estado de la Charla:</label>
          <input type="text" id="estadoCharla" class="form-control" value="${charla.estadoCharla}" disabled>
        </div>
        
        <div class="col-md-6">
          <label for="fechaCharla" class="form-label col-form-label-sm">Fecha de la Charla:</label>
          <div class="d-flex">
            <div class="col-md-6">
              <input type="date" id="fechaCharla" class="form-control " value="${charla.fechaCharla.substr(0,10)}" disabled>
            </div>
            <div class="col-md-6">
              <input type="time
              "id="fechaTimeCharla" class="form-control" value="${charla.fechaCharla.substr(11,14)}" disabled>
            </div>
          </div>
        </div>
    
        <div class="col-md-6">
          <label for="observacionesCharla" class="form-label col-form-label-sm">Observaciones:</label>
          <textarea id="observacionesCharla" class="form-control" disabled>${charla.observacionesCharla}</textarea>
        </div>

        <div class="input-group mt-4 pt-2">
          <a class="input-group-text" href="https://www.google.com/maps?q=${direccion}" target="_blank">Lugar</a>
          <input type="text" id="direccionCentro" 
          value="${direccion}" 
          class="form-control fs-6 text-center" disabled>
        </div>
      </div>

      </form>
      `
      return form_charla
    },

    async Get_DireccionCharla(idCurso) {
      try {
        const curso = (await serviceCursos.GET_Cursos()).data.find(
          (curso) => curso.idCurso === idCurso
        );
        const empresa = (await serviceEmpresa.GetEmpresasId(curso.idCentro)).data;
        const provincia = (
          await serviceProvincia.getProvinciasById(empresa.idProvincia)
        ).data;
        console.log(provincia)
        return empresa.direccion + "-" + provincia.nombreProvincia;
      } catch (error) {
        console.error("Error fetching direccion:", error);
      }
    }
}

