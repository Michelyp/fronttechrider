import Swal from 'sweetalert2';

export const notifyMixin = {
  
    promptNotify(status) {
      const icon = status === 200 ? 'success' : 'error';
      const background = status === 200 ? 'green' : 'red';
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        iconColor: icon,
        background: background,    
        color:"white",    
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      
      if(status == 200){
        Toast.fire({
          icon: 'success',
          title: 'Success',
        })
      }else{
        Toast.fire({
          icon: 'error',
          title: 'Error',
        })        
      }
    }
}

