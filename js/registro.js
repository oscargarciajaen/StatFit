import {
    validarNombre,
    validarCorreo,
    validarContraseña,
    validarContraseñaConfirmacion,
    validarFecha
} from "./validacion.js"

import {
    obtenerTodos,
    crear,
    borrar, actualizar
} from "./almacen.js";

const COLECCION = "usuarios"

const formulario = document.querySelector("#form-registro")
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
    errorNombre !== null ? mostrarErrorNombre(errorNombre) : limpiarErrorNombre()

    const errorCorreo = validarCorreo(correo)
    errorCorreo !== null ? mostrarErrorCorreo(errorCorreo) : limpiarErrorCorreo()

    const errorPassword = validarContraseña(password)
    errorPassword !== null ? mostrarErrorContraseña(errorPassword) : limpiarErrorContraseña()

    const errorCpassword = validarContraseñaConfirmacion(cpassword, password)
    errorCpassword !== null ? mostrarErrorContraseñaConfirmacion(errorCpassword) : limpiarErrorContraseñaConfirmacion()

    const errorFecha = validarFecha(fecha)
    errorFecha !== null ? mostrarErrorFecha(errorFecha) : limpiarErrorFecha()

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
        }

        crear(COLECCION, nuevoUsuario)
        vaciarFormulario()
        mostrarUsuarios()
    }
})

function mostrarUsuarios() {
    const todos = obtenerTodos(COLECCION)
    const listaUsuarios = document.querySelector("#lista-usuarios")
    while (listaUsuarios.firstChild) {
        listaUsuarios.removeChild(listaUsuarios.lastChild)
    }

    todos.forEach( it => {

        const articleUsuario = document.createElement("article")
        articleUsuario.className = "mensaje-card"

        const header = document.createElement("header")
        header.className = "mensaje-card__cabecera"

        const nombreUsuario = document.createElement("h3")
        nombreUsuario.className = "mensaje-card__motivo"
        nombreUsuario.textContent = it.nombre

        const sectionAcciones = document.createElement("section")
        sectionAcciones.className = "mensaje-card__acciones"

        const editarButton = document.createElement("Button")
        editarButton.className = "mensaje-card__editar"
        editarButton.textContent= "Editar"

        editarButton.addEventListener("click", () => {

            nombre.value = it.nombre
            correo.value = it.correo
            fecha.value = it.fechaNacimiento
            condiciones.checked = true

            const botonActualizar = document.createElement("button")
            botonActualizar.className = "formulario__boton"
            botonActualizar.type="submit"
            botonActualizar.style.background = "orange"
            botonActualizar.textContent = "Actualizar"
            boton.style.visibility = "hidden"
            formulario.appendChild(botonActualizar)
            botonActualizar.addEventListener("click", (e) => {
                e.preventDefault()

                const errorNombre = validarNombre(nombre)
                errorNombre !== null ? mostrarErrorNombre(errorNombre) : limpiarErrorNombre()

                const errorCorreo = validarCorreo(correo)
                errorCorreo !== null ? mostrarErrorCorreo(errorCorreo) : limpiarErrorCorreo()

                const errorPassword = validarContraseña(password)
                errorPassword !== null ? mostrarErrorContraseña(errorPassword) : limpiarErrorContraseña()

                const errorCpassword = validarContraseñaConfirmacion(cpassword, password)
                errorCpassword !== null ? mostrarErrorContraseñaConfirmacion(errorCpassword) : limpiarErrorContraseñaConfirmacion()

                const errorFecha = validarFecha(fecha)
                errorFecha !== null ? mostrarErrorFecha(errorFecha) : limpiarErrorFecha()

                const errorCondiciones = aceptado()

                if (
                    errorNombre === null &&
                    errorCorreo === null &&
                    errorPassword === null &&
                    errorCpassword === null &&
                    errorFecha === null &&
                    errorCondiciones === null
                ) {
                    const usuarioActualizado = {
                        nombre: nombre.value.trim(),
                        correo: correo.value.trim(),
                        fechaNacimiento: fecha.value.trim(),
                    }

                    actualizar(COLECCION, it.id, usuarioActualizado)
                    vaciarFormulario()
                    mostrarUsuarios()
                    botonActualizar.style.visibility = "hidden"
                    boton.style.visibility = "visible"
                }
            })
        })

        const borrarButton = document.createElement("Button")
        borrarButton.className = "mensaje-card__borrar"
        borrarButton.textContent= "Borrar"

        borrarButton.addEventListener("click", () => {
            alert("¿Seguro que quieres borar?")
            borrar(COLECCION, it.id)
            mostrarUsuarios()
        })

        const pGmail = document.createElement("p")
        pGmail.className = "mensaje-card__autor"
        pGmail.textContent = it.correo

        const pId = document.createElement("p")
        pId.className = "mensaje-card__autor"
        pId.textContent = it.id

        const pFecha = document.createElement("p")
        pFecha.className = "mensaje-card__texto"
        pFecha.textContent = "Nacimiento: " + it.fechaNacimiento

        sectionAcciones.appendChild(editarButton)
        sectionAcciones.appendChild(borrarButton)

        header.appendChild(nombreUsuario)
        header.appendChild(sectionAcciones)

        articleUsuario.appendChild(header)
        articleUsuario.appendChild(pGmail)
        articleUsuario.appendChild(pFecha)
        articleUsuario.appendChild(pId)

        listaUsuarios.appendChild(articleUsuario)
    })
}

function vaciarFormulario() {
    nombre.value = ""
    correo.value = ""
    password.value = ""
    cpassword.value = ""
    fecha.value = ""
    condiciones.checked = false
}

mostrarUsuarios()