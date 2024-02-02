import Swal from 'sweetalert2';
import raterFunction from 'rater-js';
import {notifyMixin} from '@/components/ScriptsAlerts/PrompNotify'
import ServiceCursos from '@/services/ServiceCursos';
import ServiceEmpresa from '@/services/ServiceEmpresa';
import ServiceProvincia from '@/services/ServiceProvincia';
import ServiceCharlas from '@/services/ServiceCharlas';

const serviceCursos = new ServiceCursos();
const serviceEmpresa = new ServiceEmpresa();
const serviceProvincia = new ServiceProvincia();
const serviceCharlas = new ServiceCharlas();


export const PrompOptions = {
  
    async promptNotify(idRole, charla) {
      var action = null;
      let options = `<div class="d-flex flex-column flex-row">`
      if(idRole == 2){
        if(charla.idEstadoCharla == 2 || charla.idEstadoCharla == 3){
        options += `
          <button type="button list-group-item mb-1 me-1" class="btn btn-outline-danger" id="btnCancelar" value="Cancelar" >Cancelar</button>
          `
        }
        if(charla.idEstadoCharla == 5 || charla.idEstadoCharla == 6){
          options += `
          <button type="button list-group-item mb-1 me-1" class="btn btn-outline-warning" id="btnValorar" value="Valorar" >Valorar</button>
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

      const direccion = await this.Get_DireccionCharla(charla.idCurso);
      // const valoracion = await this.GETValoracionesCharla(charla.idCharla);

      const charlaHTML = this.RenderCharla(charla,direccion);      
      const steps = ["charalaView", "valorar"];
      Swal.fire({
        html:charlaHTML,    
        progressSteps: steps,
        showConfirmButton : false,
        backdrop: true,
        showCloseButton:true,
        titleText: false,
        allowEscapeKey:false,
        footer:options,
        customClass:{
          popup:"card pb-2",
        },
        didOpen: ()=>{
          var btnValorar = Swal.getPopup().querySelector("#btnValorar");
          if(btnValorar !== null ){
            btnValorar.addEventListener('click', function () {
              PrompOptions.ValorarCharala();
            });
          }

          var btnCancelar = Swal.getPopup().querySelector("#btnCancelar");
          if(btnCancelar !== null ){
            btnCancelar.addEventListener('click', function () {
              action = "delete";
              serviceCharlas.DELETE_Charla(charla.idCharla).then(result=>{
                notifyMixin.promptNotify(result.status);
              }).catch(err=>{
                notifyMixin.promptNotify(err.status);
              })
              Swal.close();
            });
          }
        }
      }).then(() => {
        return new Promise((resolve) => {
            resolve(action);
          });
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
        return empresa.direccion + "-" + provincia.nombreProvincia;
      } catch (error) {
        console.error("Error fetching direccion:", error);
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

    ValorarCharala(){
      var html = `
      <div class="input-group mb-3 float-end">
        <div id="rater" ></div>
      </div>
      <div class="input-group mb-3">
        <input type="email" id="comentario" class="form-control" placeholder="Comentar" required>
      </div>
      `

      Swal.fire({
        title: 'Valoración',
        text: 'Geben Sie eine Beschreibung an:',
        showCloseButton:true,
        html: html,
        confirmButtonText:"Enviar",
        customClass:{
          popup:"card pb-2",
        },
        didOpen:()=>{
          var myRating = raterFunction( {
            element:document.querySelector("#rater"),
            rateCallback:function rateCallback(rating, done) {
              this.setRating(rating); 
          
              done(); 
              console.log(myRating);
            }
          });
        }
      });    
    }
}

