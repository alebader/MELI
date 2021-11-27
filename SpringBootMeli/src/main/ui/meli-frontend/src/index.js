import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import ListaItems from './components/ListaItems';
import { Home } from './components/Home';
import ItemSeleccionado from './components/ItemSeleccionado';

const App = () =>
  <Router>
    <div>
      <Nav key="nav" />
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ListaItems} />
      <Route exact path="/items/:id" component={ItemSeleccionado} />
    </div>
  </Router>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
