import React from 'react';
import currency from '../helpers/currency.js';
import stockTotal from '../helpers/stockTotal.js';
import { slug } from '../helpers/slug.js';
import Stocks from './Stocks';
const PropTypes = React.PropTypes;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
    this.handleGetStock = this.handleGetStock.bind(this);
    this.cart = {
      all: [],
      totalItem: 0,
    };

    this.state = {
      showStocks: false,
      cart: {},
    }
  }

  handleLikeClick(val) {
    this.props.onLike(val);
  }

  mount(prod) {
    this.prod = prod;
    this.setState({
      showStocks: true,
    });
  }

  unmount() {
    console.log('hehe');
    this.setState({
      showStocks: false,
    });
  }

  handleGetStock(val) {
    console.log(val);
    console.log(this.prod);
    // var cart = this.cart;
    this.cart.all.push({
      name:this.prod.name,
      color: val.color,
      price: this.prod.price,
      amount: 1
    });
    this.cart.totalItem = this.cart.all.reduce((acc, cart) => { return acc + cart.amount }, 0);
    this.setState({
      showStocks: false,
      cart: this.cart
    });
    // Update data stock & push stock to cart
  }

  render() {
    var { product } = this.props;
    var { showStocks, cart } = this.state;
    return (
      <div className='product'>
        <div className='img'><a href='#'><img src={'./assets/img/' + product.image} /></a></div>
        <div className='content'>
          <a className='name' href={'#/product/' + slug(product.name)}>{product.name}</a>
          <p className='price'><b>{ currency(product.price)  }</b></p>
          <p className='stock text-right'><b>Stocks:</b><span>&nbsp;{ stockTotal(product.stocks) + ' pcs'}</span></p>
        </div>
        {showStocks && <Stocks eachStock={product.stocks} getStock={this.handleGetStock}/>}
      <div className='actions'>
        <div className='row'>
          <div className='col-xs-7'>
            <button onClick={() => this.handleLikeClick(product.id)} className={product.liked ? 'btn love loved': 'btn love'}><i className='ion-ios-heart'></i><span className='ml-small'>{product.liked ? 'Unlike': 'Like'}</span></button>
            <div className='psr dib'>
              <button className='btn share ml-small'><i className='ion-android-share-alt'></i><span className='ml-small'>Share</span></button>
            </div>
          </div>
          <div className='col-xs-5 text-right'>
            {showStocks ? <button onClick={this.unmount} className="psr btn buy">Choose The Color</button> : <button onClick={() => this.mount(product)} className='psr btn buy'>Add To Cart</button>}
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
}

export default Products;
