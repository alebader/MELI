import React from "react";
import '../assets/css/navegador.css';

export class Buscador extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    render(): JSX.Element {
        return (<header role="banner" data-siteid="MLA" className="nav-header nav-header-plus">
            <div className="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
                <a className="nav-logo" href="//www.mercadolibre.com.ar" >Mercado Libre Argentina - Donde comprar y vender de todo</a>
                <form className="nav-search" action="https://www.mercadolibre.com.ar/jm/search" method="GET" role="search">
                    <input type="text" className="nav-search-input" aria-label="Ingresá lo que quieras encontrar" name="as_word" placeholder="Nunca dejes de buscar" />
                    <button type="submit" className="nav-search-btn" >
                        <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
                    </button>
                </form>
            </div>
        </header>);
    };
}