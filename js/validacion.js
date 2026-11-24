const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#correo")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#confirm-password")
const fecha = document.querySelector("#fecha")
const condiciones = document.querySelector(".formulario__grupo--condiciones input[type='checkbox']")
const boton = document.querySelector(".formulario__boton")

nombre.addEventListener("blur", (e) => {
    const error = validarNombre(e.target.value)
    if (error !== null) {
        mostrarErrorNombre(error)
    } else {
        limpiarErrorNombre()
    }
})

function validarNombre(valor) {
    if (valor.trim().length < 4 || valor.trim().length > 10) {
        return "El nombre debe tener una longitud entre 4 y 10 ";
    }
    return null;
}

function mostrarErrorNombre(error){
    limpiarErrorNombre()
    const grupo = document.querySelector(".formulario__grupo")
    
    const p = document.createElement("p")
    p.className = "grupo__error"
    p.textContent = error

    grupo.appendChild(p)
}


function limpiarErrorNombre(){
    const grupo = document.querySelector(".formulario__grupo")
    while (grupo.querySelector("p")){
        grupo.removeChild(grupo.lastChild)
    }
}

correo.addEventListener("blur", (e) => {
    const error = validarCorreo(e.target.value)
    if (error !== null){
        mostrarErrorCorreo(error)
    } else {
        limpiarErrorCorreo()
    }
})

function validarCorreo(valor) {
    limpiarErrorCorreo()
    const texto = valor.trim();
    const regex = /^.+@.+\..+$/;

    if (!regex.test(texto)) {
        return "El correo no es válido";
    }

    return null;
}

function mostrarErrorCorreo(error) {
    limpiarErrorCorreo();
    const grupo = correo.parentElement;

    const p = document.createElement("p");
    p.className = "grupo__error";
    p.textContent = error;

    grupo.appendChild(p);
}

function limpiarErrorCorreo(){
    const grupo = correo.parentElement
    while (grupo.querySelector("p")){
    grupo.removeChild(grupo.lastChild)
    }
}

password.addEventListener("blur", (e) => {
    const error = validarContraseña(e.target.value)
    if (error !== null){
        mostrarErrorContraseña(error)
    }else {
        limpiarErrorContraseña
    }
})

function validarContraseña(valor){
    limpiarErrorContraseña()
    const regex =  /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const texto = valor.trim()
    if (regex.test(texto)){
        return null
    } else {
        return "La longitud debe ser 8, contener 1 número y 1 mayúscula"
    }
}

function mostrarErrorContraseña(error) {
    limpiarErrorContraseña();
    const grupo = password.parentElement;

    const p = document.createElement("p");
    p.className = "grupo__error";
    p.textContent = error;

    grupo.appendChild(p);
}

function limpiarErrorContraseña() {
    const grupo = password.parentElement
    while (grupo.querySelector("p")){
    grupo.removeChild(grupo.lastChild)
    }
}

cpassword.addEventListener("blur", (e) => {
    const error = validarContraseñaConfirmacion(e.target.value)
    if (error !== null){
        mostrarErrorContraseñaConfirmacion(error)
    }else {
        limpiarErrorContraseñaConfirmacion()
    }
})

function validarContraseñaConfirmacion(valor) {
    limpiarErrorContraseñaConfirmacion()
    const valorPassword = password.value.trim()
    const texto = valor.trim()

    if (texto === "" || texto !== valorPassword) {
        return "Las contraseñas no coinciden"
    }

    return null
}

function mostrarErrorContraseñaConfirmacion(error) {
    limpiarErrorContraseña();
    const grupo = cpassword.parentElement;

    const p = document.createElement("p");
    p.className = "grupo__error";
    p.textContent = error;

    grupo.appendChild(p);
}

function limpiarErrorContraseñaConfirmacion() {
    const grupo = cpassword.parentElement
    while (grupo.querySelector("p")){
    grupo.removeChild(grupo.lastChild)
    }
}

fecha.addEventListener("blur", (e) => {
    const error = validarFecha(e.target.value)
    if (error !== null){
        mostrarErrorFecha(error)
    } else {
        limpiarErrorFecha()
    }
})

function validarFecha(valor) {
    limpiarErrorFecha()
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    const texto = valor.trim()

    if (!regex.test(texto)) {
        return "El formato de la fecha debe ser dd/mm/aaaa"
    }

    const [dia, mes, anio] = texto.split("-").map(Number)
    const fechaIngresada = new Date(anio, mes - 1, dia)
    const hoy = new Date()
    const fechaActual = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())

    if (fechaIngresada > fechaActual) {
        return "La fecha no puede ser mayor que la fecha actual"
    }

    return null
}

function mostrarErrorFecha(error){
    limpiarErrorFecha();
    const grupo = fecha.parentElement;

    const p = document.createElement("p");
    p.className = "grupo__error";
    p.textContent = error;

    grupo.appendChild(p);
}

function limpiarErrorFecha() {
    const grupo = fecha.parentElement
    while (grupo.querySelector("p")){
        grupo.removeChild(grupo.lastChild)
    }
}

function aceptado() {
    if (!condiciones.checked) {
        const error = "Debes aceptar las condiciones"
        mostrarErrorCondiciones(error)
        return error
    } else {
        limpiarErrorCondiciones()
        return null
    }
}

function mostrarErrorCondiciones(error) {
    limpiarErrorCondiciones()
    const grupo = condiciones.parentElement

    const p = document.createElement("p")
    p.className = "grupo__error"
    p.textContent = error

    grupo.appendChild(p)
}

function limpiarErrorCondiciones() {
    const grupo = condiciones.parentElement
    while (grupo.querySelector("p")){
        grupo.removeChild(grupo.lastChild)
    }
}

boton.addEventListener("click", (e) => {
    e.preventDefault()

    const errorNombre = validarNombre(nombre.value)
    if (errorNombre !== null) mostrarErrorNombre(errorNombre)

    const errorCorreo = validarCorreo(correo.value)
    if (errorCorreo !== null) mostrarErrorCorreo(errorCorreo)

    const errorPassword = validarContraseña(password.value)
    if (errorPassword !== null) mostrarErrorContraseña(errorPassword)

    const errorCpassword = validarContraseñaConfirmacion(cpassword.value)
    if (errorCpassword !== null) mostrarErrorContraseñaConfirmacion(errorCpassword)

    const errorFecha = validarFecha(fecha.value)
    if (errorFecha !== null) mostrarErrorFecha(errorFecha)

    const errorCondiciones = aceptado()

    if (
        errorNombre === null &&
        errorCorreo === null &&
        errorPassword === null &&
        errorCpassword === null &&
        errorFecha === null &&
        errorCondiciones === null
    ) {

    }
})





