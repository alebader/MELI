import IBusqueda from "../interfaces/IBusqueda";
import IProductoSeleccionado from "../interfaces/IProductoSeleccionado";

export async function obtenerProductos(query: any): Promise<IBusqueda>{
    let response: any = null;
    try {
        response = await fetch('/items?search=' + query);
        
        if (response.status == 200) {
            return await response.json();             
          }
          throw new Error("Servicio caido.");
    } catch (ex) {       
        throw new Error("Error en el servicio de obtener productos");
    }   
}

export async function obtenerProductoSeleccionado(id: any): Promise<IProductoSeleccionado> {
    let response: any = null;
    try {
        response = await fetch('/items/' + id);
    } catch (ex) {
        throw new Error("Error en el servicio producto seleccionado.");
    }
    return await response.json();
}
