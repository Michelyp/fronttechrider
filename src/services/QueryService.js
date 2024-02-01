import { Global } from "@/Global";
import axios from "axios";

export default class QueryService{
    CharlasDisponiblesTechRider(){
        var userToken = {"Authorization":"Bearer "+sessionStorage.getItem("token")}

        return new Promise(function(resolve){
            var request = "api/QueryTools/FindCharlasPendientesTecnologiasTechrider";
            var url = Global.urlApiTechRiders + request;
            axios.get(url,{headers: userToken}).then(response=>{
                resolve(response);
            }); 
        });
    }

    CharlasTechRider(id_user){
        return new Promise(function(resolve){
            var request = "api/QueryTools/CharlasTechRider/"+ id_user;
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
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
                console.log(response.data);
            });
        });
    }

    PeticionesFormateado(){
        return new Promise(function(resolve){
            var request = "api/QueryTools/TodasPeticionesFormato";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response.data);
                console.log(response.data);
            });
        });
    }

    TechRidersViewAll(){
        return new Promise(function(resolve){
            var request="api/QueryTools/TechRidersEmpresasAll";
            var url = Global.urlApiTechRiders+request;
            axios.get(url).then(response =>{
                resolve(response.data);        
            })
        })
    }

    CharlasProfesor(id_user){
        return new Promise(function(resolve){
            var request="api/QueryTools/CharlasCursosProfesor/" + id_user;
            var url = Global.urlApiTechRiders+request;
            axios.get(url).then(response =>{
                resolve(response);        
            })
        })
    }
}