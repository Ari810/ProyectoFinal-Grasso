export function confirmarAgenda(nombreRecital) {
    return Swal.fire({
        title: "¿Agregar a la agenda?",
        text: `¿Deseas agregar "${nombreRecital}" a la agenda?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
    });
}

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
