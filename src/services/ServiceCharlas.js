import { Global } from "@/Global";
import axios from "axios";

export default class ServiceCharlas{

    getEstadosCharlas(){
        return new Promise(function(resolve){
            var request = "api/EstadosCharlas";
            var url = Global.urlApiTechRiders + request;  
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }




}