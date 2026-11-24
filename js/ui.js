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
const detalles = document.querySelector('.detalleEjercicio');
const card = document.querySelector('.detalleEjercicio__modal');

export function mostrar() {
    listadoOculto.style.visibility = "visible";
}

function mostrarDetalles() {
    detalles.style.visibility = "visible";
}

function ocultar() {
    listadoOculto.style.visibility = "hidden";
}

function ocultarDetalles() {
    detalles.style.visibility = "hidden";
}

function ponerX(funcion) {
    const x = document.createElement("p");
    x.textContent = "X";
    x.className = "boton__volver";
    x.addEventListener("click", funcion);
    return x;
}

function limpiar() {
    while (listadoOculto.children.length > 0) {
        listadoOculto.removeChild(listadoOculto.firstChild);
    }
}

function limpiarDetalles() {
    while (card.children.length > 0) {
        card.removeChild(card.firstChild);
    }
}

export function implementarEjercicios(musculo) {
    limpiar();
    listadoOculto.appendChild(ponerX(implementarMusculos));

    const grupo = document.createElement("div");
    grupo.className = "mostrarEjercicios__grupo";

    const ul = document.createElement("ul");
    ul.className = "mostrarEjercicios__lista";

    musculo.forEach(element => {
        const item = document.createElement("li");
        item.className = "mostrarEjercicios__item";

        const nombre = document.createElement("span");
        nombre.className = "mostrarEjercicios__nombre";
        nombre.textContent = element.nombre;

        const descripcion = document.createElement("p");
        descripcion.className = "mostrarEjercicios__descripcion";
        descripcion.textContent = element.descripcion;

        item.addEventListener("click", () => {
            construirDetalles(element);
            mostrarDetalles();
        });

        item.append(nombre, descripcion);
        ul.appendChild(item);
    });

    grupo.appendChild(ul);
    listadoOculto.appendChild(grupo);
}

function construirDetalles(e) {
    limpiarDetalles();

    const nombre = document.createElement("h1");
    nombre.className = "detalleEjercicio__nombre";
    const descripcion = document.createElement("p");
    descripcion.className = "detalleEjercicio__descripcion";
    const img = document.createElement("img");
    img.className = "detalleEjercicio__img";

    nombre.textContent = e.nombre;
    descripcion.textContent = e.descripcion;
    img.src = e.img;

    card.appendChild(ponerX(ocultarDetalles));
    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(descripcion);
}

export function implementarMusculos() {
    limpiar();
    listadoOculto.appendChild(ponerX(ocultar));

    listaGrupos.forEach((it) => {
        const grupo = document.createElement("div");
        grupo.className = "mostrarEjercicios__grupo";

        const btnMusculo = document.createElement("button");
        btnMusculo.type = "button";
        btnMusculo.textContent = it.nombre;
        btnMusculo.className = "mostrarEjercicios__musculo";

        btnMusculo.addEventListener("click", () => {
            implementarEjercicios(it.lista);
            mostrar();
        });

        grupo.appendChild(btnMusculo);
        listadoOculto.appendChild(grupo);
    });
}