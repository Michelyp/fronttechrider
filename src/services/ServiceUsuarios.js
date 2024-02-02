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
            "Authorization":"Bearer "+sessionStorage.getItem("token")
        }
        return headers;
    }

    GetUserByToken(){
        const header = this.getToken()

        return new Promise(function(resolve){
            var request = "api/Usuarios/PerfilUsuario";
            var url = Global.urlApiTechRiders + request;  
            axios.get(url,{headers : header}).then(response=>{
                resolve(response);
            }).catch(error=>{
                resolve(error);
            })
        })
    }

    //Permite buscar un objeto USUARIOS por su ID
    GetUserById(id){
        const header = this.getToken()

        return new Promise(function(resolve){
            var request = "api/Usuarios/" +id;
            var url = Global.urlApiTechRiders + request;  
            axios.get(url,{headers : header}).then(response=>{
                resolve(response);
            })
        })
    }

    GetIdRoleByToken(){
        this.GetUserByToken().then(result => {
            return result.data.idRole
          }).catch((error) => console.log(error));      
    }

    PostCreateUser(usuario){
        return new Promise(function (resolve){
            var request = "api/Usuarios";
            var url = Global.urlApiTechRiders + request;
            axios.post(url, usuario).then(response =>{
                resolve(response);
            })
        })
    }

    PutModifyUser(usuario){
        const header = this.getToken();

        return new Promise(function (resolve){
            var request = "api/Usuarios";
            var url = Global.urlApiTechRiders + request;
            axios.put(url, usuario,{headers : header}).then(response =>{
                resolve(response);
            })
        })
    }

    putUpdatePasswordUsuarios(userPass){
        const header = this.getToken();

        return new Promise(function (resolve){
            var request = "api/Usuarios/UpdatePasswordUsuario";
            var url = Global.urlApiTechRiders + request;
            axios.put(url, userPass,{headers : header}).then(response =>{
                resolve(response);
            })
        })
    }
    getPeticionesUsuarios(){
        const header = this.getToken();

        return new Promise(function(resolve){
            var request= "api/PeticionesAltaUsers";
            var url = Global.urlApiTechRiders + request;
            axios.get(url, {headers:header}).then(response =>{
                resolve(response.data);
                console.log(response.data);
            })
        })
    }
    getAllProvincia(){
        return new Promise(function(resolve){
            var request="api/Provincias";
            var url=Global.urlApiTechRiders +request;
            axios.get(url).then(response =>{
                const newResponse = response.data.map(ele=>{
                    return {
                        value:ele.idProvincia,
                        text:ele.nombreProvincia
                    }
                })
                resolve(newResponse);
            })
        })
    }
}

/* axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log(error.response.data)
    if (error.response.status === 401) {
      //store.dispatch('logout')
      //router.push('/login')
      console.log("Detectado 401")
    }
    return Promise.reject(error)
  }) */