import { Global } from "@/Global";
import axios from "axios";

export default class ServiceCharlas{

    getToken(){
        const headers = {
            "Authorization":"Bearer "+sessionStorage.getItem("token")
        }
        return headers;
    } 

    getEstadosCharlas(){
        return new Promise(function(resolve){
            var request = "api/EstadosCharlas";
            var url = Global.urlApiTechRiders + request;  
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }    

    GET_Charlas(){
        return new Promise(function(resolve){
            var request = "api/Charlas";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response.data);
                console.log(response.data);
            }); 
        });
    }

    GET_ValoracionesCharlas(){
        return new Promise(function(resolve){
            var request = "api/ValoracionesCharlas";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            }); 
        });
    }

    GET_ValoracionCharla(id_charla){
        return new Promise(function(resolve){
            var request = "api/ValoracionesCharlas/Valoraciones/"+id_charla;
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            }); 
        });
    }

    GET_Tecnologias(){
        return new Promise(function(resolve){
            var request = "api/Tecnologias";
            var url = Global.urlApiTechRiders + request;  
            axios.get(url).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            }); 
        });
    }

    POST_Charla(charla){
        var token = this.getToken()
        return new Promise(function(resolve){
            var request = "api/Charlas";
            var url = Global.urlApiTechRiders + request;  
            axios.post(url,charla, {headers:token}).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            }); 
        });
    }

    DELETE_Charla(idCharla){
        var token = this.getToken()
        return new Promise(function(resolve){
            var request = "api/Charlas/"+ idCharla;
            var url = Global.urlApiTechRiders + request;  
            axios.delete(url,{headers:token}).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            }); 
        });
    }
}