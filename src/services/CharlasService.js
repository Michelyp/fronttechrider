import { Global } from "@/Global";
import axios from "axios";

export default class CharlasService{
    GET_Charlas(){
        return new Promise(function(resolve){
            var request = "api/Charlas";
            var url = Global.urlApiTechRiders + request;
            axios.get(url).then(response=>{
                resolve(response.data);
            }); 
        });
    }
}