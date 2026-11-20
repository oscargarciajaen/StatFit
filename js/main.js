import {implementarMusculos, mostrar} from "./ui.js";

const boton = document.querySelector('.crearEjercicio__ejercicioAñadir')

addEventListener("DOMContentLoaded", () => {
    boton.addEventListener("click", () => {
        mostrar();
        implementarMusculos();
    });
});




