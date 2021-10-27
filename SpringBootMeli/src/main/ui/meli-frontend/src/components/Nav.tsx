import React, { ChangeEventHandler, useState } from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Nav() {
    const history = useHistory();
    const [valorBusqueda, setValorBusqueda] = useState('');

    const handleInputChange = (e: { target: { value: any; }; }) => setValorBusqueda(e.target.value);

    const onClickProductos = () => {
        history.push('/api/items?search=' + valorBusqueda);
    }

    return (
        <nav className="navbar navbar-expand-sm fixed-top" style={{ background: '#fff159' }}>
            <div className="container" style={{justifyItems: 'unset'}}>
                <a className="navbar-brand" href="/">
                    <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.2/mercadolibre/logo__small@2x.png" width="50" height="40" alt="logo" />
                </a>
                <form className="form-inline w-100 p-3">
                    <div className="input-group input-group-search mx-auto">
                        <input key="ip_busqueda" type="search" value={valorBusqueda} onChange={handleInputChange} className="form-control" aria-label="Ingresá lo que quieras encontrar" name="search" placeholder="Nunca dejes de buscar" />
                        <div className="input-group-append">
                            <button className="btn bg-light" type="submit" id="search-button-addon" onClick={onClickProductos}><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Nav;