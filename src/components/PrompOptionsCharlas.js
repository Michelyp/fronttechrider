import Swal from 'sweetalert2';

export const PrompOptions = {
  
    promptNotify(idRole) {
      var options = "";
      if(idRole == 2){
        options += `
        <button type="button" class="btn btn-danger">Cancelar</button>
        <button type="button" class="btn btn-warning">Valorar</button>
        `
      }
      if(idRole == 3){
        options += `
        <button type="button" class="btn btn-success">Inscribirse</button>
        <button type="button" class="btn btn-danger">Abandonar</button>
        `
      }
     Swal.fire({
        title: "Opciones de la Charla",
        html:options,        
        showConfirmButton : false
      });
    }
}

