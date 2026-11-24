export function validarNombre(nombre) {
    const texto = nombre.value.trim()
    const min = nombre.minLength
    const max = nombre.maxLength

    if (nombre.required && texto === "") {
        return "El nombre es obligatorio"
    }
    if (nombre.type === "text" && (texto.length < min || texto.length > max)) {
        return `El nombre debe tener una longitud entre ${min} y ${max}`
    }
    return null
}

export function validarCorreo(correo) {
    const texto = correo.value.trim()
    const regex = /^.+@.+\..+$/

    if (correo.required && texto === "") {
        return "El correo es obligatorio"
    }
    if (correo.type === "email" && texto !== "" && !regex.test(texto)) {
        return "El correo no es válido"
    }
    return null
}

export function validarContraseña(password) {
    const min = password.minLength
    const regex = new RegExp(`^(?=.*[A-Z])(?=.*\\d).{${min},}$`)
    const texto = password.value.trim()

    if (password.required && texto === "") {
        return "La contraseña es obligatoria"
    }
    if (password.type === "password" && texto !== "") {
        if (regex.test(texto)) {
            return null
        } else {
            return `La longitud debe ser ${min}, contener 1 número y 1 mayúscula`
        }
    }
    return null
}

export function validarContraseñaConfirmacion(cpassword, password) {
    const valorPassword = password.value.trim()
    const texto = cpassword.value.trim()

    if (cpassword.required && texto === "") {
        return "Debes confirmar la contraseña"
    }
    if (cpassword.type === "password" && (texto !== "" || valorPassword !== "") && texto !== valorPassword) {
        return "Las contraseñas no coinciden"
    }
    return null
}

export function validarFecha(fecha) {
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    const texto = fecha.value.trim()

    if (fecha.required && texto === "") {
        return "La fecha es obligatoria"
    }
    if (fecha.type === "date" && texto !== "") {
        if (!regex.test(texto)) {
            return "El formato de la fecha debe ser dd/mm/aaaa"
        }

        const [anio, mes, dia] = texto.split("-").map(Number)
        const fechaIngresada = new Date(anio, mes - 1, dia)

        if (fecha.max) {
            const [maxAnio, maxMes, maxDia] = fecha.max.split("-").map(Number)
            const fechaMaxima = new Date(maxAnio, maxMes - 1, maxDia)
            if (fechaIngresada > fechaMaxima) {
                return "La fecha no puede ser mayor que la fecha máxima permitida"
            }
        }
    }
    return null
}

export function validarTelefono(telefono, prefieroLlamada) {
    const texto = telefono.value.trim()
    const regexTelefono = /^[6789]\d{8}$/

    if (prefieroLlamada.checked && texto === "") {
        return "El teléfono es obligatorio si prefieres que te llamemos"
    }
    if (texto !== "" && !regexTelefono.test(texto)) {
        return "Introduce un teléfono válido de 9 dígitos"
    }
    return null
}

export function validarMotivo(motivo) {
    if (motivo.required && motivo.value === "") {
        return "Selecciona un motivo de consulta"
    }
    return null
}

export function validarMensaje(mensaje) {
    const texto = mensaje.value.trim()
    const min = mensaje.minLength
    const max = mensaje.maxLength

    if (mensaje.required && texto === "") {
        return "El mensaje es obligatorio"
    }
    if (texto.length < min || texto.length > max) {
        return `El mensaje debe tener entre ${min} y ${max} caracteres`
    }
    return null
}