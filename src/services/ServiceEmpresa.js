import { Global } from "@/Global";
import axios from "axios";

export default class ServiceEmpresa{

    GetEmpresas(){
        return new Promise(function(resolve){
            var request = "api/EmpresasCentros";
            var url = Global.urlApiTechRiders + request;  
            axios.get(url).then(response=>{
                const newResponse = response.data.map(ele=>{
                    return {
                        value:ele.idEmpresaCentro,
                        text:ele.nombre
                    }
                    
                })
                resolve(newResponse);
            })
        })
    }
}