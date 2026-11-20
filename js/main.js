import { mostrar } from "./ui.js";
import { implementarEjercicios} from "./ui.js";

const boton = document.querySelector('.rutina__crearEjercicio')

addEventListener("DOMContentLoaded", () => {
    boton.addEventListener("click", () => {
        mostrar();
        implementarEjercicios();
    });
});




