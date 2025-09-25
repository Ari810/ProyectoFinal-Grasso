// Función para crear una notificación de confirmación al agregar un evento a la agenda
export function confirmarAgenda(nombreRecital) {
    return Swal.fire({
        title: "¿Agregar a la agenda?",
        text: `¿Deseas agregar el evento de "${nombreRecital}" a la agenda?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
    });
}

// Función para crear una notificación de confirmación al eliminar un evento de la agenda
export function eliminarDeAgenda() {
    return Swal.fire({
        title: "¿Eliminar de la agenda?",
        text: `¿Deseas eliminar de la agenda?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "rgba(184, 184, 184, 1)",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
    });
}

// Con esta función genero un SweetAlert que me permita elegir el sector (Platea o Campo) al agregar un recital a la agenda
export function elegirSector() {
    return Swal.fire({
        title: "Selecciona un sector",
        input: "radio",
        inputOptions: {
            Platea: "Platea",
            Campo: "Campo",
        },
        inputValidator: (value) => {
            if (!value) {
                return "Debes elegir un sector";
            }
        },
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    });
}
