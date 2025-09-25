import { agregarEventoDisponible } from "./app.js";

async function RecitalesDisponibles() {
    const response = await fetch("recitales.json");
    const data = await response.json();

    return data;
}

export async function mostrarTarjetas() {
    try {
        const listaDisponible = await RecitalesDisponibles();

        listaDisponible.forEach((recital) => {
            crearTarjeta(recital);
        });
    } catch (error) {
        console.error(error);
    }
}

function crearTarjeta(recital) {
    const div = document.getElementById("disponibles");
    const target = document.createElement("div");

    target.innerHTML = `
        <img src="${recital.img}" alt="${recital.artista}" class="imagen">
        <h3>${recital.artista}</h3>
        <p>${recital.fecha}</p>
        <ul>${recital.entrada
            .map((ticket) => `<li>${ticket.sector} - $${ticket.precio}</li>`)
            .join("")}</ul>
        <button class="btn-agregar">Agregar a la agenda</button>
    `;

    const botonAgregar = target.querySelector(".btn-agregar");
    botonAgregar.addEventListener("click", function () {
        agregarEventoDisponible(recital);
    });
    div.appendChild(target);
}
