import Swal from 'sweetalert2';

export const notifyMixin = {

    promptNotify(status) {
      const icon = status === 200 ? 'success' : 'error';
      const background = status === 200 ? 'green' : 'red';

      Swal.fire({
        position: 'top-end',
        icon: icon,
        showConfirmButton: false,
        timer: 1500,
        imageHeight: 5,
        imageWidth: 5,
        background: background,
        backdrop: false,
        title: icon.toUpperCase(),
        customClass: {
          popup: 'process-notify',
          title: 'process-notify-title',
          icon: 'process-notify-icon',
          container: 'process-notify-container'
        }
      });
    }
  
};

