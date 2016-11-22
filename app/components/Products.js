import React from 'react';
import currency from '../helpers/currency.js';
import stockTotal from '../helpers/stockTotal.js';
import { slug } from '../helpers/slug.js';
const PropTypes = React.PropTypes;

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLikeClick(val) {
    this.props.onLike(val);
  }

  render() {
    var { product } = this.props;
    return (
      <div className='product'>
        <div className='img'><a href='#'><img src={'./assets/img/' + product.image} /></a></div>
        <div className='content'>
          <a className='name' href={'#/product/' + slug(product.name)}>{product.name}</a>
          <p className='price'><b>{ currency(product.price)  }</b></p>
          <p className='stock text-right'><b>Stocks:</b><span>&nbsp;{ stockTotal(product.stocks) + ' pcs'}</span></p>
        </div>
        <div className="colors">
          {product.stocks.map(stocks => {
            return <button className="btn">{stocks.color}<span>{stocks.stock}</span></button>
          })}
        </div>
      <div className='actions'>
        <div className='row'>
          <div className='col-xs-7'>
            <button onClick={() => this.handleLikeClick(product.id)} className={product.liked ? 'btn love loved': 'btn love'}><i className='ion-ios-heart'></i><span className='ml-small'>{product.liked ? 'Unlike': 'Like'}</span></button>
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
}

Products.propTypes = {
  product: PropTypes.object,
  onLike: PropTypes.func,
}

export default Products;
