import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { obtenerProductos } from "../services/productoServices";
import IBusqueda from "../interfaces/IBusqueda";

function Items() {

    const history = useHistory();
    const params = new URLSearchParams(useLocation().search);
    const valorBusqueda = params.get('search');
    const [datos, setDatos] = useState<IBusqueda | undefined>(undefined);

    useEffect(() => {
        obtenerProductos(valorBusqueda).then((item: IBusqueda) => setDatos(item));
    }, []);

    function verProductoSeleccionado(id: string){
        history.push('items/' + id);
    }

    function separadorMiles(monto: number) {
        return monto.toLocaleString('es-AR');
    }
    const mostrarItems = datos != undefined ? true : false;
    if (mostrarItems){
        return (
            <div className="container" >
                <ul className="list-group list-group-flush" style={{ padding: 'inherit' }}>
                    {datos!.items!.map(i => (
                        <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => verProductoSeleccionado(i.id)}><div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="card border-0">
                                        <div className="card-horizontal" style={{ display: 'flex', flex: '1 1 auto' }}>
                                            <div className="img-square-wrapper">
                                                <img width="150" height="150" className="" src={i.picture} />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">${separadorMiles(i.price.amount)} {i.free_shipping && <i className="fa fa-truck" title="free-shipping" style={{color: 'green'}}></i>}</h4>
                                                <p className="card-text">{i.title}</p>
                                            </div>
                                            <div className="card-footer bg-white border-0">
                                                <p>Capital</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></li>
                    ))}
                </ul>
            </div>);
    } else {
        return (<div></div>);
    }
}
export default Items;