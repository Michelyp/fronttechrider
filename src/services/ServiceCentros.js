import { Global } from "@/Global";
import axios from "axios";

export default class ServiceCentros{
    getToken(){
        const headers = {
            "Authorization":"Bearer "+sessionStorage.getItem("token")
        }
        return headers;
    } 
    getCentrosFormato(){
        const header = this.getToken();

        return new Promise(function(resolve){
            var request ="api/EmpresasCentros/EmpresasFormato";
            var url = Global.urlApiTechRiders + request;
            
            axios.get(url,{headers : header} ).then(response =>{
                var responseFormat = new Array();
                response.data.forEach(element => {
                    if(element.idTipoEmpresa == 2){
                        responseFormat.push(element)
                        console.log("Centro");
                    }else{
                        console.log("Empresa");
                    }
                });
                //console.log(responseFormat)
                resolve(responseFormat);
            })
        })
    }
    postCentro(centro){
        const header = this.getToken();
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros";
            var url = Global.urlApiTechRiders + request;

            axios.post(url,centro,{headers : header}).then(response =>{
                //console.log(response);
                resolve(response);
            })
        })
    }
    putCentro(centro){
        const header = this.getToken();
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros";
            var url = Global.urlApiTechRiders + request;

            axios.put(url,centro,{headers : header}).then(response =>{
                //console.log(response);
                resolve(response);
            })
        })
    }
    deleteCentro(idCentro){
        const header = this.getToken();
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros/"+idCentro;
            var url = Global.urlApiTechRiders + request;

            axios.delete(url,{headers : header}).then(response =>{
                //console.log(response);
                resolve(response);
            })
        })
    }
}