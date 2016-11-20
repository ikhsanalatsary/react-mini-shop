import React from 'react';
import currency from '../helpers/currency.js';
import stockTotal from '../helpers/stockTotal.js';
import { slug } from '../helpers/slug.js';
const PropTypes = React.PropTypes;

const Products = (props) => {
  return (
    <div className='product'>
      <div className='img'><a href='#'><img src={'./assets/img/' + props.product.image} /></a></div>
      <div className='content'>
        <a className='name' href={'#/product/' + slug(props.product.name)}>{props.product.name}</a>
        <p className='price'><b>{ currency(props.product.price)  }</b></p>
        <p className='stock text-right'><b>Stocks:</b><span>&nbsp;{ stockTotal(props.product.stocks) + ' pcs'}</span></p>
      </div>
    <div className='actions'>
      <div className='row'>
        <div className='col-xs-7'>
          <button className='btn love '><i className='ion-ios-heart'></i><span className='ml-small'>Like</span></button>
          <div className='psr dib'>
            <button className='btn share ml-small'><i className='ion-android-share-alt'></i><span className='ml-small'>Share</span></button>
          </div>
        </div>
        <div className='col-xs-5 text-right'><button className='psr btn buy'>Add To Cart</button></div>
      </div>
    </div>
  </div>
  );
}

Products.propTypes = {
  product: PropTypes.object,
}

export default Products;
