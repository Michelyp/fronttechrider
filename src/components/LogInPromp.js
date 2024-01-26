import Swal from 'sweetalert2'
import ServiceUsuarios from '@/services/ServiceUsuarios'
export const LogAlert = {
    Alert() {
        let useremailInput;
        let passwordInput;

        Swal.fire({
            title: 'Login Form',
            html: `
                <input type="email" id="email" class="swal2-input" placeholder="Email">
                <input type="password" id="password" class="swal2-input" placeholder="Password">
            `,
            allowOutsideClick:false,
            confirmButtonText: 'Sign in',
            focusConfirm: false,
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
                }
               var user ={
                    password : password,
                    email : email
               }
               const service = new ServiceUsuarios();
               service.login(user).then(result=>{
                    console.log(result);
                    sessionStorage.setItem("token", result.data.response);
                    location.reload();
               }).catch(error=>{
    
               });
            }
        });

    }

}