import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main.js';
import ListProducts from '../components/ListProducts.js';
import About from '../components/About.js';
import Examples from '../components/Examples.js';
import Product from '../components/Product.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About} />
        <Route path="examples" component={Examples} />
        <Route path="product/:name" component={Product} />
        <IndexRoute component={ListProducts} />
      </Route>
    </Router>
  );
}

export default Routes;
