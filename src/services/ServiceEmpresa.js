import { Global } from "@/Global";
import axios from "axios";

export default class ServiceEmpresa{

    getToken(){
        const headers = {
            "Authorization":"Bearer "+sessionStorage.getItem("token")
        }
        return headers;
    } 
    
    GetEmpresas(){
        return new Promise(function(resolve){
            var request = "api/EmpresasCentros";
            var url = Global.urlApiTechRiders + request;  
            axios.get(url).then(response=>{
                const newResponse = response.data.map(ele=>{
                    return {
                        value:ele.idEmpresaCentro,
                        text:ele.nombre
                    }
                    
                })
                resolve(newResponse);
            })
        })
    }
    getEmpresasFormato(){
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros/EmpresasFormato";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response =>{
                resolve(response);
                console.log("Estoy pasando por aqui");
            })
        })
    }

    GetEmpresasId(id){
        return new Promise(function(resolve){
            var request = "api/EmpresasCentros/"+id;
            var url = Global.urlApiTechRiders + request;  
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }


}