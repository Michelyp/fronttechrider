import { Global } from "@/Global";
import axios from "axios";

export default class ServiceTecnologias{
    getToken(){
        const headers = {
            "Authorization":"Bearer "+sessionStorage.getItem("token")
        }
        return headers;
    } 
    getTecnologias(){
        var header = this.getToken();
        return new Promise(function(resolve){
            var request = "api/Tecnologias";
            var url = Global.urlApiTechRiders + request;
            axios.get(url,{headers: header}).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            }); 
        });
    }
    getTipoTecnologias(){
        var header = this.getToken();
        return new Promise(function(resolve){
            var request = "api/TipoTecnologias";
            var url = Global.urlApiTechRiders + request;
            axios.get(url,{headers: header}).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            }); 
        });
    }
    postPeticionTecnologia(tecnologia){
        var header = this.getToken();
        return new Promise(function(resolve){
            var request = "api/PeticionesTecnologias?tecnologia="+tecnologia;
            var url = Global.urlApiTechRiders + request;
            axios.post(url,null,{headers: header}).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            }); 
        });
    }
    //https://apitechriders.azurewebsites.net/api/QueryTools/TodosTechRidersActivos
    // getUserTechRider(){

    // }


}