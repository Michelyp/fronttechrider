import { Global } from "@/Global";
import axios from "axios";

export default class ServiceProvincia{
    getProvincias(){
        return new Promise(function(resolve){
            var request = "api/Provincias";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }
    getProvinciasById(id){
        return new Promise(function(resolve){
            var request = "api/Provincias/"+id;
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }
}