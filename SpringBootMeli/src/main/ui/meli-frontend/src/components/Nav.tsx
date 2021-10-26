import React, { ChangeEventHandler, useState } from "react";
import { obtenerProductos } from "../services/productoServices";
import { useHistory } from "react-router-dom";

export interface IBuscador {
    valorBusqueda: string;
}

function Nav () {
    const history = useHistory();
    const [valorBusqueda, setValorBusqueda] = useState('');
     
    const handleInputChange = (e: { target: { value: any; }; }) => setValorBusqueda(e.target.value);
    
    const onClickProductos = () => {      
        obtenerProductos(valorBusqueda).then((item: any) => history.push('/api/items?search=' + valorBusqueda));
    }
    

    return (<header role="banner" data-siteid="MLA" className="nav-header nav-header-plus">
        <div className="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
            <a className="nav-logo" href="/" >Mercado Libre Argentina - Donde comprar y vender de todo</a>
            <form className="nav-search" role="search">
                <input type="text" value={valorBusqueda} onChange={handleInputChange} className="nav-search-input" aria-label="Ingresá lo que quieras encontrar" name="search" placeholder="Nunca dejes de buscar" />
                <button type="button" className="nav-search-btn" onClick={onClickProductos} >
                    <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
                </button>
            </form>
        </div>
    </header>);
}

export default Nav;