import Swal from 'sweetalert2';

export const PrompOptions = {
  
    promptNotify(idRole, charla) {
      var options = `<div class="d-flex flex-column flex-row">`
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

      var charlaHTML = this.RenderCharla(charla);

     Swal.fire({
        html:charlaHTML,        
        showConfirmButton : false,
        backdrop: true,
        showCloseButton:true,
        titleText: false,
        footer:options,
        customClass:{
          popup:"card pb-2",
        }
      });
    },
    


    RenderCharla(charla){
      var form_charla= `
      <form >
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
        <input type="date" id="fechaCharla" class="form-control" value="${charla.fechaCharla.substr(0,10)}" diable>
        <input type="text" id="fechaTimeCharla" class="form-control" value="${charla.fechaCharla.substr(11,14)}" diable>
      </div>
  
      <div class="col-md-6">
        <label for="observacionesCharla" class="form-label col-form-label-sm">Observaciones:</label>
        <textarea id="observacionesCharla" class="form-control" disabled>${charla.observacionesCharla}</textarea>
      </div>
      </form>
      `
      return form_charla
    }
}

