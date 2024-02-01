import { Global } from "@/Global";
import axios from "axios";

export default class ServiceTechRiders{
    getToken(){
        const headers = {
            "Authorization":"Bearer "+sessionStorage.getItem("token")
        }
        return headers;
    } 
    //https://apitechriders.azurewebsites.net/api/QueryTools/TodosTechRidersActivos
    // getUserTechRider(){

    // }


}