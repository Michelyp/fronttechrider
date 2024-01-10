import { Global } from "@/Global";
import axios from "axios";

export default class ServiceUsuarios{
    login(userLogin){
        return new Promise(function(resolve){
            var request = "api/Auth/Login";
            var url = Global.urlApiTechRiders + request;
            axios.post(url,userLogin).then(response=>{
                resolve(response);
            })
        })
    }
    getToken(){
        const headers = {
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
        return headers;
    }

    
}