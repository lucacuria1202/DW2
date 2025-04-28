function mensaje_bienvenido(nombre_usuario) {
    Swal.fire({
        title: `¡Bienvenido/a ${nombre_usuario}!`,
        text: '¡Gracias por usar esta página web!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

const mensaje_error = (mensaje_error) => {
    Swal.fire({
        title: 'Error',
        text: error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
}