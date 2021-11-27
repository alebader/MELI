import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/items.css';
import { obtenerProductos } from "../services/productoServices";
import IBusqueda from "../interfaces/IBusqueda";
import Loader from "./Loader";
import Item from "./Item";
import Mensajes from "./Mensajes";
import Breadcrumb from "./Breadcrumb";

function ListaItems() {

    const params = new URLSearchParams(useLocation().search);
    const valorBusqueda = params.get('search');
    const [datos, setDatos] = useState<IBusqueda | undefined>(undefined);
    const [respuestaValida, setRespuestaValida] = useState(false);
    const [mensajeError, setMensajeError] = useState("");

    useEffect(() => {
        obtenerProductos(valorBusqueda).then((item: IBusqueda) => setDatos(item)).then(i => setRespuestaValida(true))
            .catch((err: Error) => setMensajeError(err.message));
    }, []);

    if (respuestaValida) {
        if (datos!.items == null || datos!.items.length == 0) {
            return <Mensajes mensaje={"No se encontraron productos para esta busqueda"} />
        } else {
            return (
                <div className="container" >
                    <Breadcrumb categorias={datos!.categories} />
                    <ul className="list-group list-group-flush" >
                        {datos!.items!.map(i => (
                            <Item key={i.id.toString()} monto={i.price.amount} envio={i.free_shipping} id={i.id} imagen={i.picture} titulo={i.title} />
                        ))}
                    </ul>
                </div>);
        }
    } else {
        if (mensajeError != "") {
            return <Mensajes mensaje={mensajeError} />
        }
        return (<Loader />);
    }
}
export default ListaItems;