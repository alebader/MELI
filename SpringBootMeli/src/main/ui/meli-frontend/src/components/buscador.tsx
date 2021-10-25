import React from "react";
import { obtenerProductos } from "../services/productoServices";

export interface IBuscador {
    valorBusqueda: string;
}

export class Buscador extends React.Component<IBuscador, IBuscador> {
    constructor(props: IBuscador) {
        super(props);
        this.state = {
            valorBusqueda: ''
        }
    }
    render(): JSX.Element {
        const { valorBusqueda } = this.state;

        return (<header role="banner" data-siteid="MLA" className="nav-header nav-header-plus">
            <div className="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
                <a className="nav-logo" href="//www.mercadolibre.com.ar" >Mercado Libre Argentina - Donde comprar y vender de todo</a>
                <form className="nav-search" action="https://www.mercadolibre.com.ar/jm/search" method="GET" role="search">
                    <input type="text" value={valorBusqueda} onChange={this.handleInputChange} className="nav-search-input" aria-label="Ingresá lo que quieras encontrar" name="as_word" placeholder="Nunca dejes de buscar" />
                    <button type="button" className="nav-search-btn" onClick={() => obtenerProductos(valorBusqueda)} >
                        <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
                    </button>
                </form>
            </div>
        </header>);
    };

    handleInputChange = (e: { target: { value: any; }; }) => {
        this.setState({
            valorBusqueda: e.target.value
        });
    }
}