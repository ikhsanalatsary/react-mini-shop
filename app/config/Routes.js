import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main.js';
import ListProducts from '../components/ListProducts.js';
import Cart from '../components/Cart.js';

const Routes = () => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="cart" component={Cart} />
        <Route path="category/:categoryname" component={ListProducts} />
        <Route path="product/:name" component={ListProducts} />
        <IndexRoute component={ListProducts} />
      </Route>
    </Router>
  );
}

export default Routes;
