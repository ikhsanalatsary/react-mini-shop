import React, { PropTypes } from 'react';
import ProductImage from './ProductImage.js';
import Stocks from './Stocks.js';

import currency from '../helpers/currency.js';
import stockTotal from '../helpers/stockTotal.js';
import { slug } from '../helpers/slug.js';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.showVariant = this.showVariant.bind(this);
    this.hideVariant = this.hideVariant.bind(this);
    this.handleGetStock = this.handleGetStock.bind(this);
    this.state = {
      showStocks: false
    };
  }

  handleLikeClick(val) {
    this.props.onLike(val);
  }

  showVariant(prod) {
    this.prod = prod;
    this.setState({
      showStocks: true,
    });
  }

  hideVariant() {
    this.setState({
      showStocks: false,
    });
  }

  handleGetStock(val) {
    // Update data stock & push stock to cart
    this.props.addtoCart(val, this.prod);
    this.setState({
      showStocks: false
    });
  }

  render() {
    var { product } = this.props;
    var { showStocks, cart } = this.state;
    return (
      <div className='product'>
        <ProductImage name={product.name} image={product.image} />
        <div className='content'>
          <a className='name'
            href={'#/product/' + slug(product.name)}>
            {product.name}
          </a>
          <p className='price'><b>{ currency(product.price)  }</b></p>
          <p className='stock text-right'>
            <b>Stocks:</b>
            <span>&nbsp;{ stockTotal(product.stocks) + ' pcs'}</span>
          </p>
        </div>
        {showStocks && <Stocks eachStock={product.stocks}
          getStock={this.handleGetStock}/>}
      <div className='actions'>
        <div className='row'>
          <div className='col-xs-7'>
            <button onClick={() => this.handleLikeClick(product.id)}
              className={product.liked ? 'btn love loved': 'btn love'}>
              <i className='ion-ios-heart'></i>
              <span className='ml-small'>
                {product.liked ? 'Unlike': 'Like'}
              </span>
            </button>
            <div className='psr dib'>
              <button className='btn share ml-small'>
                <i className='ion-android-share-alt'></i>
                <span className='ml-small'>Share</span>
              </button>
            </div>
          </div>
          <div className='col-xs-5 text-right'>
            {showStocks ? <button onClick={this.hideVariant}
              className="psr btn buy">Choose The Color</button> :
              <button onClick={() => this.showVariant(product)}
                className='psr btn buy'>Add To Cart</button>}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Products.propTypes = {
  product: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  addtoCart: PropTypes.func.isRequired,
}

export default Products;
