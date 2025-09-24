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
            .map((e) => `<li>${e.sector} - $${e.precio}</li>`)
            .join("")}</ul>
        <button class="btn-comprar">Agregar al carrito</button>
    `;

    div.appendChild(target);
}
