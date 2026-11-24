import {
    validarNombre,
    validarCorreo,
    validarTelefono,
    validarMotivo,
    validarMensaje
} from "./validacion.js"

const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#correo")
const telefono = document.querySelector("#telefono")
const prefieroLlamada = document.querySelector("#prefiero-llamada")
const motivo = document.querySelector("#motivo")
const mensaje = document.querySelector("#mensaje")
const contadorCaracteres = document.querySelector("#contador-caracteres")
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
    const grupo = nombre.parentElement
    const idError = "error-nombre"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error
    grupo.appendChild(p)
}

function limpiarErrorNombre() {
    const grupo = nombre.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

correo.addEventListener("blur", (e) => {
    correo.dataset.tocado = "true"
    const error = validarCorreo(correo)
    if (error !== null) {
        mostrarErrorCorreo(error)
    } else {
        limpiarErrorCorreo()
    }
})

correo.addEventListener("input", (e) => {
    if (correo.dataset.tocado === "true") {
        const error = validarCorreo(correo)
        if (error !== null) {
            mostrarErrorCorreo(error)
        } else {
            limpiarErrorCorreo()
        }
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

telefono.addEventListener("blur", (e) => {
    telefono.dataset.tocado = "true"
    const error = validarTelefono(telefono, prefieroLlamada)
    if (error !== null) {
        mostrarErrorTelefono(error)
    } else {
        limpiarErrorTelefono()
    }
})

telefono.addEventListener("input", (e) => {
    if (telefono.dataset.tocado === "true") {
        const error = validarTelefono(telefono, prefieroLlamada)
        if (error !== null) {
            mostrarErrorTelefono(error)
        } else {
            limpiarErrorTelefono()
        }
    }
})

prefieroLlamada.addEventListener("change", () => {
    telefono.dataset.tocado = "true"
    const error = validarTelefono(telefono, prefieroLlamada)
    if (error !== null) {
        mostrarErrorTelefono(error)
    } else {
        limpiarErrorTelefono()
    }
})

function mostrarErrorTelefono(error) {
    limpiarErrorTelefono()
    const grupo = telefono.parentElement
    const idError = "error-telefono"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error
    grupo.appendChild(p)
}

function limpiarErrorTelefono() {
    const grupo = telefono.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

motivo.addEventListener("blur", (e) => {
    motivo.dataset.tocado = "true"
    const error = validarMotivo(motivo)
    if (error !== null) {
        mostrarErrorMotivo(error)
    } else {
        limpiarErrorMotivo()
    }
})

motivo.addEventListener("change", (e) => {
    motivo.dataset.tocado = "true"
    const error = validarMotivo(motivo)
    if (error !== null) {
        mostrarErrorMotivo(error)
    } else {
        limpiarErrorMotivo()
    }
})

function mostrarErrorMotivo(error) {
    limpiarErrorMotivo()
    const grupo = motivo.parentElement
    const idError = "error-motivo"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error
    grupo.appendChild(p)
}

function limpiarErrorMotivo() {
    const grupo = motivo.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

mensaje.addEventListener("blur", (e) => {
    mensaje.dataset.tocado = "true"
    const error = validarMensaje(mensaje)
    if (error !== null) {
        mostrarErrorMensaje(error)
    } else {
        limpiarErrorMensaje()
    }
})

mensaje.addEventListener("input", (e) => {
    actualizarContadorMensaje(e.target.value)
    if (mensaje.dataset.tocado === "true") {
        const error = validarMensaje(mensaje)
        if (error !== null) {
            mostrarErrorMensaje(error)
        } else {
            limpiarErrorMensaje()
        }
    }
})

function actualizarContadorMensaje(valor) {
    const max = mensaje.maxLength
    contadorCaracteres.textContent = `${valor.length} / ${max}`
}

function mostrarErrorMensaje(error) {
    limpiarErrorMensaje()
    const grupo = mensaje.parentElement
    const idError = "error-mensaje"

    const p = document.createElement("p")
    p.id = idError
    p.className = "grupo__error"
    p.textContent = error
    grupo.appendChild(p)
}

function limpiarErrorMensaje() {
    const grupo = mensaje.parentElement
    while (grupo.querySelector("p")) {
        grupo.removeChild(grupo.lastChild)
    }
}

function crearMensaje(datos) {
    const mensajesEnviados = document.querySelector(".mensajes-enviados")

    let lista = mensajesEnviados.querySelector(".mensajes-enviados__lista")
    if (!lista) {
        lista = document.createElement("section")
        lista.className = "mensajes-enviados__lista"
        mensajesEnviados.appendChild(lista)
    }

    const article = document.createElement("article")
    article.className = "mensaje-card"

    const header = document.createElement("header")
    header.className = "mensaje-card__cabecera"

    const span = document.createElement("span")
    span.className = "mensaje-card__motivo"
    span.textContent = datos.motivo

    const btnBorrar = document.createElement("button")
    btnBorrar.className = "mensaje-card__borrar"
    btnBorrar.type = "button"
    btnBorrar.setAttribute("aria-label", "Borrar mensaje")
    btnBorrar.textContent = "Borrar"

    btnBorrar.addEventListener("click", () => {
        article.remove()
    })

    const pAutor = document.createElement("p")
    pAutor.className = "mensaje-card__autor"
    let infoAutor = `${datos.nombre} (${datos.correo})`
    if (datos.telefono !== "") {
        infoAutor += ` · ${datos.telefono}`
    }
    if (datos.prefieroLlamada) {
        infoAutor += " · Prefiere llamada"
    }
    pAutor.textContent = infoAutor

    const pTexto = document.createElement("p")
    pTexto.className = "mensaje-card__texto"
    pTexto.textContent = datos.mensaje

    header.append(span, btnBorrar)
    article.append(header, pAutor, pTexto)

    lista.appendChild(article)

    vaciarFormulario()
}

function vaciarFormulario() {
    nombre.value = ""
    correo.value = ""
    telefono.value = ""
    prefieroLlamada.checked = false
    motivo.value = ""
    mensaje.value = ""

}

boton.addEventListener("click", (e) => {
    e.preventDefault()

    const errorNombre = validarNombre(nombre)
    if (errorNombre !== null) mostrarErrorNombre(errorNombre)

    const errorCorreo = validarCorreo(correo)
    if (errorCorreo !== null) mostrarErrorCorreo(errorCorreo)

    const errorTelefono = validarTelefono(telefono, prefieroLlamada)
    if (errorTelefono !== null) mostrarErrorTelefono(errorTelefono)

    const errorMotivo = validarMotivo(motivo)
    if (errorMotivo !== null) mostrarErrorMotivo(errorMotivo)

    const errorMensaje = validarMensaje(mensaje)
    if (errorMensaje !== null) mostrarErrorMensaje(errorMensaje)

    if (
        errorNombre === null &&
        errorCorreo === null &&
        errorTelefono === null &&
        errorMotivo === null &&
        errorMensaje === null
    ) {
        const nuevoMensaje = {
            nombre: nombre.value.trim(),
            correo: correo.value.trim(),
            telefono: telefono.value.trim(),
            prefieroLlamada: prefieroLlamada.checked,
            motivo: motivo.options[motivo.selectedIndex].textContent,
            mensaje: mensaje.value.trim()
        }

        crearMensaje(nuevoMensaje)
    }
})