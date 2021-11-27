import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IProductoSeleccionado from "../interfaces/IProductoSeleccionado";
import { obtenerProductoSeleccionado } from "../services/productoServices";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/items.css';
import Loader from "./Loader";

function ItemSeleccionado() {
    const value: { id: string } = useParams();
    const [itemSeleccionado, setItemSeleccionado] = useState<IProductoSeleccionado | undefined>(undefined)    

    useEffect(() => {
        obtenerProductoSeleccionado(value.id).then((item: any) => setItemSeleccionado(item));      
    }, []);


    if (itemSeleccionado != undefined || itemSeleccionado != null) {
        return (<div className="container">
            <div className="card float-right">
                <div className="row p-3">
                    <div className="col-sm-9 col px-md-5">
                        <div className="row justify-content-center align-self-center">
                            <img className="img-responsive" style={{maxWidth: 500}} src={itemSeleccionado.item.picture} />
                        </div>
                        <div className="col-md-12 mt-5">
                            <h4>Descripcion del producto</h4><br />
                            <p className="text-secondary">{itemSeleccionado.item.description}</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card-block">
                            <p>{obtenerCondicion(itemSeleccionado.item.condition) + " - " + itemSeleccionado.item.sold_quantity + " vendidos"}</p>
                            <h4>{itemSeleccionado.item.title}</h4><br />
                            <h2>$ {separadorMiles(itemSeleccionado.item.price.amount)}<span className="monto-seleccionado">{completarCeros(itemSeleccionado.item.price.decimals)}</span></h2><br />
                            <button type="button" className="btn btn-primary btn-lg btn-block w-100">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return (<Loader />);
    }

    function obtenerCondicion(condicion: string) {
        return (condicion === "new" ? "Nuevo" : "Usado");
    }

    function completarCeros(decimal: number) {
        return ('00' + decimal).slice(-2);
    }

    function separadorMiles(monto: number) {
        return monto.toLocaleString('es-AR');
    }
}
export default ItemSeleccionado;