import { Global } from "@/Global";
import axios from "axios";
import ServiceUsuarios from "./ServiceUsuarios";

export default class ServiceRol{
    getRoles(){
        const serviceUsuarios = new ServiceUsuarios();
        const headers = serviceUsuarios.getToken();
        return new Promise(function(resolve){
            var request = "api/Roles";
            var url = Global.urlApiTechRiders + request;
            axios.get(url,{headers: headers}).then(response=>{
                resolve(response);
            })
        })
    }
    getRolesById(id){
        const serviceUsuarios = new ServiceUsuarios();
        const headers = serviceUsuarios.getToken();
        return new Promise(function(resolve){
            var request = "api/Roles/"+id;
            var url = Global.urlApiTechRiders + request;
            axios.get(url, {headers:headers}).then(response=>{
                resolve(response);
            })
        })
    }
}