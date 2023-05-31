import Swal from "sweetalert2"

export const sweetAlert = (icon,title,showConfirmButton,timer)=>{
    Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: showConfirmButton,
    timer: timer
})
}