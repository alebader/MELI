import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Items from './components/items';
import { Home } from './components/Home';
import ItemSeleccionado from './components/ItemSeleccionado';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/api/items" component={Items} />
      <Route exact path="/api/items/:id" component={ItemSeleccionado} />
    </div>
  </Router>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
