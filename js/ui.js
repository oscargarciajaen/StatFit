import {ejercicios} from "./datos.js";

export const listadoOculto = document.querySelector('.rutina__mostrarEjercicios');
const detalles = document.querySelector('.detalleEjercicio')
const card = document.querySelector('.detalleEjercicio__modal')

export function mostrar() {
    listadoOculto.style.visibility="visible"
}

function mostrarDetalles(){
    detalles.style.visibility = "visible";
}

function limpiar(){
    while(listadoOculto.children.length > 0){
        listadoOculto.removeChild(listadoOculto.firstChild)
    }
}


function limpiarDetalles(){
    while (card.children.length > 0){
        card.removeChild(card.firstChild)
    }
}

export function implementarEjercicios(){
    limpiar()
    ejercicios.forEach(element => {
        const row = document.createElement('tr')
        row.className = "mostrarEjercicios__row"

        const nombreTd = document.createElement('td')
        const descripcionTd = document.createElement('td')

        nombreTd.textContent = element.nombre
        nombreTd.className = "row__tdNombre"
        descripcionTd.textContent = element.descripcion
        descripcionTd.className = "row__tdDescripcion"

        row.addEventListener("click", () => {
            construirDetalles(element);
            mostrarDetalles();
        });

        row.appendChild(nombreTd)
        row.appendChild(descripcionTd)
        listadoOculto.appendChild(row)
    })
}

function construirDetalles(e) {
    limpiarDetalles()

    const nombre = document.createElement("h1")
    nombre.className = "detalleEjercicio__nombre"
    const descripcion = document.createElement("p")
    descripcion.className = "detalleEjercicio__descripcion"
    const img = document.createElement("img")
    img.className = "detalleEjercicio__img"

    nombre.textContent = e.nombre
    descripcion.textContent = e.descripcion
    img.src = e.img

    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(descripcion);
}

