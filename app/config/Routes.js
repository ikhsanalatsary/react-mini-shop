import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main.js';
import ListProducts from '../components/ListProducts.js';
import About from '../components/About.js';
import Cart from '../components/Cart.js';
import Product from '../components/Product.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About} />
        <Route path="cart" component={Cart} />
        <Route path="product/:name" component={Product} />
        <IndexRoute component={ListProducts} />
      </Route>
    </Router>
  );
}

export default Routes;
