import { Global } from "@/Global";
import axios from "axios";

export default class QueryService{
    CharlasDisponiblesTechRider(){
        var userToken = {"Authorization":"Bearer "+localStorage.getItem("token")}

        return new Promise(function(resolve){
            var request = "api/QueryTools/FindCharlasPendientesTecnologiasTechrider";
            var url = Global.urlApiTechRiders + request;
            axios.get(url,{headers: userToken}).then(response=>{
                resolve(response);
            }); 
        });
    }

    CharlasTechRider(){
        var userToken = {"Authorization":"Bearer "+localStorage.getItem("token")}

        return new Promise(function(resolve){
            var request = "api/QueryTools/CharlasTechRider";
            var url = Global.urlApiTechRiders + request;
            axios.get(url,{headers: userToken}).then(response=>{
                resolve(response);
            });
        });
    }

    CharlasViewAll(){
        return new Promise(function(resolve){
            var request = "api/QueryTools/CharlasViewAll";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            });
        });
    }
}