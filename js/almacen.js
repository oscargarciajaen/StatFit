export function obtenerTodos(coleccion) {
    return JSON.parse(localStorage.getItem(coleccion)) ?? []
}

export function obtenerPorId(coleccion, id) {
    return obtenerTodos(coleccion).find((item) => item.id === id)
}

export function crear(coleccion, dato) {
    const datos = obtenerTodos(coleccion)

    let id
    do {
        id = Math.floor(Math.random() * 100000) + 1
    } while (datos.some((item) => item.id === id))

    dato.id = id
    datos.push(dato)
    localStorage.setItem(coleccion, JSON.stringify(datos))
    return dato
}

export function actualizar(coleccion, id, dato) {
    const datos = obtenerTodos(coleccion).map((item) =>
        item.id === id ? { ...item, ...dato, id } : item
    )
    localStorage.setItem(coleccion, JSON.stringify(datos))
}

export function borrar(coleccion, id) {
    const nuevoArray = obtenerTodos(coleccion).filter((item) => item.id !== id)
    localStorage.setItem(coleccion, JSON.stringify(nuevoArray))
}