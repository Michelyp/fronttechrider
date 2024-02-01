import Swal from 'sweetalert2'
import ServiceUsuarios from '@/services/ServiceUsuarios'
export const LogAlert = {
    Alert() {
        let useremailInput;
        let passwordInput;

        Swal.fire({
            title: 'Sesión Caducada',
            html: `
            <form>
                <div class="input-group mb-3">
                    <input type="email" id="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="input-group mb-3">
                    <input type="password" id="password" class="form-control" placeholder="Password" required>
                </div>
            </form>
            `,
            allowOutsideClick:false,
            confirmButtonText: 'Sign in',
            focusConfirm: false,
            customClass:{
                popup:"card pb-2",
                validationMessage:"card border-0"
            },
            didOpen: () => {
                const popup = Swal.getPopup();
                useremailInput = popup.querySelector('#email');
                passwordInput = popup.querySelector('#password');
                useremailInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
                passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
            },
            preConfirm: () => {
                const email = useremailInput.value
                const password = passwordInput.value
                if (!email || !password) {
                  Swal.showValidationMessage(`Please enter email and password`)
                }else{
                    var user ={
                        password : password,
                        email : email
                    }
                    const service = new ServiceUsuarios();
                    service.login(user).then(result=>{                            
                        sessionStorage.setItem("token", result.data.response);
                        location.reload();
                    }).catch(error=>{
                        console.log(error);
                    });
                }
            }
        });

    }

}