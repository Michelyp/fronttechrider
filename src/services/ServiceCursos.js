import { Global } from "@/Global";
import axios from "axios";

export default class ServiceCursos{
    GET_CursosProfesores(){
        return new Promise(function(resolve){
            var request = "api/CursosProfesores";
            var url = Global.urlApiTechRiders + request;
            axios.post(url).then(response=>{
                resolve(response);
            });
        });
    }

    GET_Cursos(){
        return new Promise(function(resolve){
            var request = "api/Cursos";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response);
            });
        });
    }

    POST_Curso(curso){
        var header = this.getToken();
        return new Promise(function(resolve){
            var request = "api/Cursos";
            var url = Global.urlApiTechRiders + request;
            axios.post(url,curso,{headers: header}).then(response=>{
                resolve(response);
            });
        });
    }

    PUT_Curso(curso){
        var header = this.getToken();
        return new Promise(function(resolve){
            var request = "api/Cursos";
            var url = Global.urlApiTechRiders + request;
            axios.put(url,curso,{headers : header}).then(response=>{
                resolve(response);
            });
        });
    }

    DELETE_Curso(idCurso){
        var header = this.getToken();
        return new Promise(function(resolve){
            var request = "api/Cursos/"+idCurso;
            var url = Global.urlApiTechRiders + request;
            axios.delete(url,{headers : header}).then(response=>{
                resolve(response);
            });
        });
    }

    getToken(){
        const headers = {
            "Authorization":"Bearer "+sessionStorage.getItem("token")
        }
        return headers;
    }
}