export async function obtenerProductos(query: any) {
    let response: any = null;
    try {
        response = await fetch('/api/items?search=' + query);
    } catch (ex) {
        console.error("Error al obtener los productos.");
    }
    return await response.json();
}

export async function obtenerProductoSeleccionado(id: any) {
    let response: any = null;
    try {
        response = await fetch('/api/items/' + id);
    } catch (ex) {
        console.error("Error al obtener producto seleccionado.");
    }
    return await response.json();
}
