import React from 'react';
import ProductDetail from './ProductDetail.js';
import { normalString } from '../helpers/slug.js';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.products = JSON.parse(localStorage.getItem('reactminishop'));
  }
  render() {
    var { products } = this;
    var productName = normalString(this.props.params.name);
    return (
      <div className="container-mini">
        {products.filter((prod) => { return prod.name === productName }).map((product) => {
          return <ProductDetail key={product.id} product={product} />
        })}
      </div>
    );
  }
}

export default Product;
