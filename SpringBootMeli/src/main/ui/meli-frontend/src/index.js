import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import { Items } from './components/items';
import { Home } from './components/Home';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/api/items" component={Items} />
    </div>
  </Router>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
