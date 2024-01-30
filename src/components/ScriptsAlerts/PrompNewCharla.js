import Swal from 'sweetalert2';
import ServiceEmpresa from '@/services/ServiceEmpresa';
import ServiceCursos from '@/services/ServiceCursos';
import router from '@/Router';

const serviceCursos = new ServiceCursos()
const serviceEmpresa = new ServiceEmpresa();
export const PrompForm = {
  
    async prompForm(user) {      
      const empresa = (await serviceEmpresa.GetEmpresasId(user.idEmpresaCentro)).data;
      const cursosProfesores = (await serviceCursos.GET_CursosProfesores()).data;
      let cursosProfesor = []
      if(cursosProfesores.length > 0){
        cursosProfesor = await this.LoadCursosViewProfesor(cursosProfesores, user);               
      }
     
      var form_charla= `
      <form>

      <div class="input-group mt-4 pt-2">
        <span class="input-group-text">Lugar</span>
        <input type="text" id="direccionCentro" 
        value="${empresa.nombre} | ${empresa.direccion}" 
        class="form-control fs-6 text-center" disabled>
      </div>

      <div class="col">
        <label for="descripcionCharla" class="form-label col-form-label">Descripción de la Charla:</label>
        <input type="text" id="descripcionCharla" class="form-control">
      </div>

      
      <div class="d-flex justify-content-center mt-2">
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

      <div class="input-group mt-3">
      <button class="btn btn-outline-warning" type="button" @click="navigateToCursos">Crear Curso</button>
          <select class="form-select" id="select_curso">
          <option selected>Vacio</option>
            ${cursosProfesor.map(curso => `<option value="${curso.idCurso}">${curso.nombreCurso}</option>`).join('')}
          </select>
        </div>
      </div>
      </form>
      `

      Swal.fire({     
        html:form_charla,
        showConfirmButton : false,
        backdrop: true,
        heightAuto: true,
        showCloseButton:true,
        titleText: false,
        customClass:{
          popup:"card pb-2",
        }
      });
    },

    async LoadCursosViewProfesor(cursosProfesores, user) {
      const cursos = (await serviceCursos.GET_Cursos()).data;
      return cursos.filter((curso) => 
        curso.idCentro == user.idEmpresaCentro && 
        cursosProfesores.some((profesor) => curso.idCurso === profesor.idCurso));
    },

    methods: {
      navigateToCursos() {
        router.push('/personal/cursos'); // Replace this with the actual route path
      },
    },
}

