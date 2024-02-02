import Swal from 'sweetalert2';
import ServiceEmpresa from '@/services/ServiceEmpresa';
import ServiceCursos from '@/services/ServiceCursos';
import ServiceCharlas from '@/services/ServiceCharlas';

const serviceCursos = new ServiceCursos()
const serviceEmpresa = new ServiceEmpresa();
const serviceCharlas = new ServiceCharlas();
export const PrompForm = {
  
    async prompForm(user) {    
      var charla = "";  
      const empresa = (await serviceEmpresa.GetEmpresasId(user.idEmpresaCentro)).data;
      const tecnologias = (await  serviceCharlas.GET_Tecnologias()).data;
      const cursosProfesores = (await serviceCursos.GET_CursosProfesores()).data;
      let cursosProfesor = []
      if(cursosProfesores.length > 0){
        cursosProfesor = await this.LoadCursosViewProfesor(cursosProfesores, user);               
      }
      
      var form_charla= `
      <form class="h-auto" >

      <div class="input-group mt-4 pt-2">
      <a class="input-group-text" href="https://www.google.com/maps?q=${empresa.nombre + empresa.direccion}" target="_blank">Lugar</a>
        <input type="text" id="direccionCentro" 
        value="${empresa.nombre} | ${empresa.direccion}" 
        class="form-control fs-6 text-center" disabled>
      </div>

      
      <div class=" my-2">
        <label for="input_descripcion" class="form-label w-100">Descripción de la Charla:</label>
        <div class="input-group">
          <input type="text" class="form-control border-end-0"  id="input_descripcion" autocomplete="off" required>
          <button 
          class="btn btn-outline-secondary dropdown-toggle border-start-0" 
          type="button" 
          id="toggle_dropdown_tecnologias"
          autocomplete="off"
          >
          </button>
        </div>
      </div>
      <div class="input-group mt-1">
        <ul class="dropdown-menu w-100 overflow-x-hidden" id="dropdown_tecnologias"></ul>
      </div>
      
      <div class="d-flex justify-content-center">
        <div class="col-5 me-2">
          <label for="select_modalidad" class="form-label col-form-label m-0">Modalidad</label>
          <select  id="select_modalidad" class="form-select">
          <option value="PRESENCIAL">PRESENCIAL</option>
          <option value="ONLINE">ONLINE</option>
          </select>
        </div>
        <div class="col-5 ms-2">
          <label for="select_turno" class="form-label col-form-label m-0" >Turno</label>
          <select id="select_turno" class="form-select">
          <option value="MAÑANA">MAÑANA</option>
          <option value="TARDE">TARDE</option>
          </select>
        </div>
      </div>   

      <label for="fechaCharla" class="form-label col-form-label mt-1">Fecha de la Charla:</label>
      <div class="d-flex justify-content-center mt-2">
        <div class="col-5 me-2">
          <input type="date" id="fechaCharla" class="form-control" required>
        </div>
        <div class="col-5 ms-2">
          <input type="time" id="fechaTimeCharla" class="form-control" required>
        </div>
      </div>   
     

      <div class="input-group mt-3">
        <button class="btn btn-outline-warning" type="button" >Crear Curso</button>
        <select class="form-select" id="select_curso" required>
        <option value=-1 selected>Vacio</option>
          ${
            cursosProfesor.map(curso => 
              `<option value="${curso.idCurso}">${curso.nombreCurso}</option>`
            )
          }
        </select>        
      </div>
      
      <div class="input-group mt-3">
        <button class="btn btn-success w-100" type="submit">Crear Charla</button>
      </div>
      
      </form>
      `

      Swal.fire({     
        html:form_charla,
        showConfirmButton : false,
        backdrop: true,
        heightAuto: false,
        showCloseButton:true,
        titleText: false,
        allowEscapeKey: false,
        customClass:{
          popup:"card pb-2",
          validationMessage:"card border-0",
          container: "overflow-visible"
        },
        didOpen: async () => {  
          var popup = Swal.getPopup(); 
          var form = popup.querySelector("form");
          PrompForm.DropdoownEventShow(popup, tecnologias);

          form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (PrompForm.ValidateForm(form)) {
              charla = PrompForm.GenerateCharla(empresa);
              Swal.clickConfirm();
            }
          });
        },
      })
      return new Promise((resolve) => {
        Swal.getPopup().querySelector('form').addEventListener('submit', async function (event) {
          event.preventDefault();
          if (PrompForm.ValidateForm(this)) {
            charla = PrompForm.GenerateCharla(empresa);
            resolve(charla);
          }
        });
      });
    },

    SearchCoincidences(dropdown_tecnologias, input, tecnologias) {            
      const search = input.value.toLowerCase();
      const dropdown = dropdown_tecnologias;
      dropdown.innerHTML = '';
      
      const matchingTecnologias = tecnologias.filter(tecnologia =>
        tecnologia.nombreTecnologia.toLowerCase().includes(search)
      );
    
      matchingTecnologias.forEach(tecnologia => {
        const listItem = document.createElement('li');

        listItem.innerHTML += `<a class="dropdown-item" href="#">${tecnologia.nombreTecnologia}</a>`
        dropdown.appendChild(listItem);

        listItem.addEventListener('mousedown', function (event) {
          event.preventDefault();
          input.value = tecnologia.nombreTecnologia;
        });
      });

      dropdown.classList.add("show");
    },

    GenerateCharla(empresa){
      var idProvincia = "";
      if(empresa){
        idProvincia = empresa.idProvincia;
      }
      var descripcion = document.getElementById("input_descripcion").value;
      var fechaSolicitud = new Date().toISOString().substr(0,10)+'T' + '00:00:00';
      var turno = document.getElementById("select_turno").value;
      var modalidad = document.getElementById("select_modalidad").value;
      var idCurso = Number(document.getElementById("select_curso").value);
      var fechaDateCharla = document.getElementById("fechaCharla").value;
      // var fechaTimeCharla = document.getElementById("fechaTimeCharla").value;
      var fechaCharla = fechaDateCharla + 'T' + '00:00:00';

      var charla ={
        "idCharla": 0,
        "descripcion": descripcion,
        "idEstadoCharla": 2,
        "fechaCharla": fechaCharla,
        "observaciones": null,
        "idTechRider": null,
        "fechaSolicitud": fechaSolicitud,
        "turno": turno,
        "modalidad": modalidad,
        "acreditacionLinkedIn": null,
        "idCurso": idCurso,
        "idProvincia": idProvincia
      }

      return charla;
    },

    DropdoownEventShow(popup, tecnologias){  
      var input_tecnologias = popup.querySelector("#input_descripcion");
      var dropdown_tecnologias = popup.querySelector("#dropdown_tecnologias");
      var btn_dropdown_tecnologias = popup.querySelector("#toggle_dropdown_tecnologias");

      input_tecnologias.addEventListener('input', function(){
        PrompForm.SearchCoincidences(dropdown_tecnologias,input_tecnologias, tecnologias);
      });
      input_tecnologias.addEventListener('focusout', function(){
        dropdown_tecnologias.classList.remove("show");
      });
      input_tecnologias.addEventListener('focus', function(){
        dropdown_tecnologias.classList.add("show");
      });
      
      btn_dropdown_tecnologias.addEventListener('click', function(){
        if(dropdown_tecnologias.classList.contains("show")){
          dropdown_tecnologias.classList.remove("show");                         
        }else{
          dropdown_tecnologias.classList.add("show");
        }
      });
    },

    ValidateForm(form) {
      var isValid = true;
    
      var selectCurso = form.querySelector('#select_curso');
      if (selectCurso.value === '-1') {
        Swal.showValidationMessage('Selecciona a un curso');
        isValid = false;
      }

      return isValid;
    },

    async LoadCursosViewProfesor(cursosProfesores, user) {
      const cursos = (await serviceCursos.GET_Cursos()).data;
      return cursos.filter((curso) => 
        curso.idCentro == user.idEmpresaCentro && 
        cursosProfesores.some((profesor) => curso.idCurso === profesor.idCurso));
    }
}

