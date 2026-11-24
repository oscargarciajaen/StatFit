import {
    validarNombre,
    validarCorreo,
    validarContraseña,
    validarContraseñaConfirmacion,
    validarFecha
} from "./validacion.js"

const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#correo")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#confirm-password")
const fecha = document.querySelector("#fecha")
const condiciones = document.querySelector(".formulario__grupo--condiciones input[type='checkbox']")
const boton = document.querySelector(".formulario__boton")

nombre.addEventListener("blur", (e) => {
    nombre.dataset.tocado = "true"
    const error = validarNombre(nombre)
    if (error !== null) {
        mostrarErrorNombre(error)
    } else {
        limpiarErrorNombre()
    }
})

nombre.addEventListener("input", (e) => {
    if (nombre.dataset.tocado === "true") {
        const error = validarNombre(nombre)
        if (error !== null) {
            mostrarErrorNombre(error)
        } else {
            limpiarErrorNombre()
        }
    }
})

function mostrarErrorNombre(error) {
    limpiarErrorNombre()
    const grupo = document.querySelector(".formulario__grupo")
    const idError = "error-nombre"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error
    grupo.appendChild(p)
}


function limpiarErrorNombre() {
    const grupo = document.querySelector(".formulario__grupo")
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

correo.addEventListener("input", (e) => {
    if (correo.dataset.tocado === "true") {
        const error = validarCorreo(correo)
        if (error !== null){
            mostrarErrorCorreo(error)
        } else {
            limpiarErrorCorreo()
        }
    }
})

correo.addEventListener("blur", (e) => {
    correo.dataset.tocado = "true"
    const error = validarCorreo(correo)
    if (error !== null){
        mostrarErrorCorreo(error)
    } else {
        limpiarErrorCorreo()
    }
})

function mostrarErrorCorreo(error) {
    limpiarErrorCorreo()
    const grupo = correo.parentElement
    const idError = "error-correo"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error
    grupo.appendChild(p)
}

function limpiarErrorCorreo() {
    const grupo = correo.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

password.addEventListener("blur", (e) => {
    password.dataset.tocado = "true"
    const error = validarContraseña(password)
    if (error !== null){
        mostrarErrorContraseña(error)
    }else {
        limpiarErrorContraseña()
    }
})

password.addEventListener("input", (e) => {
    if (password.dataset.tocado === "true") {
        const error = validarContraseña(password)
        if (error !== null){
            mostrarErrorContraseña(error)
        }else {
            limpiarErrorContraseña()
        }
    }
})

function mostrarErrorContraseña(error) {
    limpiarErrorContraseña()
    const grupo = password.parentElement
    const idError = "error-password"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error

    grupo.appendChild(p)
}

function limpiarErrorContraseña() {
    const grupo = password.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

cpassword.addEventListener("blur", (e) => {
    cpassword.dataset.tocado = "true"
    const error = validarContraseñaConfirmacion(cpassword, password)
    if (error !== null){
        mostrarErrorContraseñaConfirmacion(error)
    }else {
        limpiarErrorContraseñaConfirmacion()
    }
})

cpassword.addEventListener("input", (e) => {
    if (cpassword.dataset.tocado === "true") {
        const error = validarContraseñaConfirmacion(cpassword, password)
        if (error !== null){
            mostrarErrorContraseñaConfirmacion(error)
        }else {
            limpiarErrorContraseñaConfirmacion()
        }
    }
})

function mostrarErrorContraseñaConfirmacion(error) {
    limpiarErrorContraseñaConfirmacion()
    const grupo = cpassword.parentElement
    const idError = "error-confirm-password"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error

    grupo.appendChild(p)
}

function limpiarErrorContraseñaConfirmacion() {
    const grupo = cpassword.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

fecha.addEventListener("blur", (e) => {
    fecha.dataset.tocado = "true"
    const error = validarFecha(fecha)
    if (error !== null){
        mostrarErrorFecha(error)
    } else {
        limpiarErrorFecha()
    }
})

fecha.addEventListener("input", (e) => {
    if (fecha.dataset.tocado === "true") {
        const error = validarFecha(fecha)
        if (error !== null){
            mostrarErrorFecha(error)
        } else {
            limpiarErrorFecha()
        }
    }
})

function mostrarErrorFecha(error) {
    limpiarErrorFecha()
    const grupo = fecha.parentElement
    const idError = "error-fecha"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error

    grupo.appendChild(p)
}

function limpiarErrorFecha() {
    const grupo = fecha.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

condiciones.addEventListener("blur", () => {
    condiciones.dataset.tocado = "true"
    aceptado()
})

condiciones.addEventListener("change", () => {
    if (condiciones.dataset.tocado === "true") {
        aceptado()
    }
})

function aceptado() {
    if (condiciones.type === "checkbox" && condiciones.required && !condiciones.checked) {
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
    const idError = "error-condiciones"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error

    grupo.appendChild(p)
}

function limpiarErrorCondiciones() {
    const grupo = condiciones.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

boton.addEventListener("click", (e) => {
    e.preventDefault()

    const errorNombre = validarNombre(nombre)
    if (errorNombre !== null) mostrarErrorNombre(errorNombre)

    const errorCorreo = validarCorreo(correo)
    limpiarErrorCorreo()
    if (errorCorreo !== null) mostrarErrorCorreo(errorCorreo)

    const errorPassword = validarContraseña(password)
    limpiarErrorContraseña()
    if (errorPassword !== null) mostrarErrorContraseña(errorPassword)

    const errorCpassword = validarContraseñaConfirmacion(cpassword, password)
    limpiarErrorContraseñaConfirmacion()
    if (errorCpassword !== null) mostrarErrorContraseñaConfirmacion(errorCpassword)

    const errorFecha = validarFecha(fecha)
    limpiarErrorFecha()
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
        const nuevoUsuario = {
            nombre: nombre.value.trim(),
            correo: correo.value.trim(),
            fechaNacimiento: fecha.value.trim(),
            condiciones: condiciones.checked
        }
    }
})