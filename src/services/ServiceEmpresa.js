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
/*     getEmpresasFormato(){
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros/EmpresasFormato";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response =>{
                resolve(response);
                console.log("Estoy pasando por aqui");
            })
        })
    } */
    getEmpresasFormato(){
        const header = this.getToken();

        return new Promise(function(resolve){
            var request ="api/EmpresasCentros/EmpresasFormato";
            var url = Global.urlApiTechRiders + request;
            
            axios.get(url,{headers : header} ).then(response =>{
                var responseFormat = new Array();
                response.data.forEach(element => {
                    if(element.idTipoEmpresa == 1){
                        responseFormat.push(element)
                    }else{
                        console.log("Empresa");
                    }
                });
                //console.log(responseFormat)
                resolve(responseFormat);
            })
        })
    }
    postEmpresa(empresa){
        const header = this.getToken();
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros";
            var url = Global.urlApiTechRiders + request;

            axios.post(url,empresa,{headers : header}).then(response =>{
                //console.log(response);
                resolve(response);
            })
        })
    }
    putEmpresa(empresa){
        const header = this.getToken();
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros";
            var url = Global.urlApiTechRiders + request;

            axios.put(url,empresa,{headers : header}).then(response =>{
                //console.log(response);
                resolve(response);
            })
        })
    }
    deleteEmpresa(idEmpresa){
        const header = this.getToken();
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros/"+idEmpresa;
            var url = Global.urlApiTechRiders + request;

            axios.delete(url,{headers : header}).then(response =>{
                //console.log(response);
                resolve(response);
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
    postEmpresas(){
        return new Promise(function(resolve){
            var request ="api/EmpresasCentros";
            var url= Global.urlApiTechRiders + request;
            axios.get(url).then(response =>{
                resolve(response);
            })
        })
    }


}