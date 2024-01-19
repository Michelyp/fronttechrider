import { Global } from "@/Global";
import axios from "axios";

export default class ServiceCursos{
    GET_CursosProfesores(){
        return new Promise(function(resolve){
            var request = "api/CursosProfesores";
            var url = Global.urlApiTechRiders + request;
            axios.post(url).then(response=>{
                resolve(response);
            })
        })
    }

    GET_Cursos(){
        return new Promise(function(resolve){
            var request = "api/Cursos";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }
}