import {
    biceps,
    piernas,
    pecho,
    espalda,
    hombros,
    triceps,
    abdomen,
    dorsales,
    trapecio,
    antebrazo
} from "./datos.js";

const listaGrupos = [
    { nombre: "Bíceps", lista: biceps },
    { nombre: "Piernas", lista: piernas },
    { nombre: "Pecho", lista: pecho },
    { nombre: "Espalda", lista: espalda },
    { nombre: "Hombros", lista: hombros },
    { nombre: "Tríceps", lista: triceps },
    { nombre: "Abdomen", lista: abdomen },
    { nombre: "Dorsales", lista: dorsales },
    { nombre: "Trapecio", lista: trapecio },
    { nombre: "Antebrazo", lista: antebrazo }
];

export const listadoOculto = document.querySelector('.rutina__mostrarEjercicios');
const detalles = document.querySelector('.detalleEjercicio')
const card = document.querySelector('.detalleEjercicio__modal')

export function mostrar() {
    listadoOculto.style.visibility="visible"
}

function mostrarDetalles(){
    detalles.style.visibility = "visible";
}

function ocultar() {
    listadoOculto.style.visibility = "hidden"
}

function ocultarDetalles(){
    detalles.style.visibility = "hidden";
}

function ponerX(funcion){
    const x = document.createElement("p")
    x.textContent = "X"
    x.className = "boton__volver"
    x.addEventListener("click", funcion)
    return x
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

export function implementarEjercicios(musculo) {
    limpiar()
    listadoOculto.appendChild(ponerX(implementarMusculos))

    const tabla = document.createElement("table")
    const tbody = document.createElement("tbody")

    musculo.forEach(element => {
        const row = document.createElement('tr')
        row.className = "mostrarEjercicios__row"

        const nombreTd = document.createElement('td')
        const descripcionTd = document.createElement('td')

        nombreTd.textContent = element.nombre
        nombreTd.className = "row__tdNombre"
        descripcionTd.textContent = element.descripcion
        descripcionTd.className = "row__tdDescripcion"

        row.addEventListener("click", () => {
            construirDetalles(element)
            mostrarDetalles()
        })

        row.append(nombreTd, descripcionTd)
        tbody.appendChild(row)
    })

    tabla.appendChild(tbody)
    listadoOculto.appendChild(tabla)
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

    card.appendChild(ponerX(ocultarDetalles));
    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(descripcion);
}

export function implementarMusculos() {
    limpiar();
    listadoOculto.appendChild(ponerX(ocultar));

    const tabla = document.createElement("table");
    const tbody = document.createElement("tbody");

    listaGrupos.forEach((it) => {
        const row = document.createElement("tr");
        const tdNombre = document.createElement("td");

        tdNombre.textContent = it.nombre;
        tdNombre.className = "mostrarEjercicios__musculo";

        row.addEventListener("click", () => {
            implementarEjercicios(it.lista);
            mostrar();
        });

        row.appendChild(tdNombre);
        tbody.appendChild(row);
    });

    tabla.appendChild(tbody);
    listadoOculto.appendChild(tabla);
}

