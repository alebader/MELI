import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/items.css';

export default function Item(props: any) {
    const history = useHistory();

    function verProductoSeleccionado(id: string) {
        history.push('items/' + id);
    }

    function separadorMiles(monto: number) {
        return monto.toLocaleString('es-AR');
    }

    return <li className="list-group-item" onClick={() => verProductoSeleccionado(props.id)}><div className="container-fluid">
        <div className="row">
            <div className="col-12 mt-3">
                <div className="card border-0">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img width="150" height="150" src={props.imagen} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">${separadorMiles(props.monto)} {props.envio && <i className="fa fa-truck" title="free-shipping" style={{ color: 'green' }}></i>}</h4>
                            <p className="card-text">{props.titulo}</p>
                        </div>
                        <div className="card-footer bg-white border-0">
                            <p>Capital</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></li>;
}
