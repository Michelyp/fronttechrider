import { Global } from "@/Global";
import axios from "axios";

export default class CharlasService{
    GET_Charlas(){
        return new Promise(function(resolve){
            var request = "api/Charlas";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            }).catch(error=>{
                resolve(error);
            }); 
        });
    }
    getEstadosCharlas(){
        return new Promise(function(resolve){
            var request = "api/EstadosCharlas";
            var url = Global.urlApiTechRiders + request;  
            axios.get(url).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            }); 
        })
    }
}