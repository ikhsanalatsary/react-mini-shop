import React, { PropTypes } from 'react';
import ProductImage from './ProductImage.js';
import Stocks from './Stocks.js';
import Comments from './Comments.js';

import currency from '../helpers/currency.js';
import stockTotal from '../helpers/stockTotal.js';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.showVariant = this.showVariant.bind(this);
    this.hideVariant = this.hideVariant.bind(this);
    this.handleGetStock = this.handleGetStock.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.sendComment = this.sendComment.bind(this);
    this.state = {
      showStocks: false,
      comments: this.props.product.comments,
    };
  }

  handleLikeClick(val) {
    this.props.onLike(val);
  }

  removeComment(val) {
    var id = this.props.product.id;
    var comments = this.props.product.comments;
    comments = comments.filter(comment => comment.content != val);
    this.props.deleteComment(val, id);
    this.setState({
      comments
    });
  }

  sendComment(e) {
    e.preventDefault();
    var { comments, id } = this.props.product;
    let commentRefs = this.refs.comment;
    let comment = commentRefs.value;
    if (comment.length > 0) {
      this.props.postComment(comment, id);
      this.setState({
        comments: [...comments, {content: comment}]
      })
      commentRefs.value = '';
    } else {
      commentRefs.focus();
    }
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
      showStocks: false,
    });
  }

  render() {
    var { product } = this.props;
    var { comments, showStocks } = this.state;
    return (
      <div className='product detil-page'>
        <ProductImage name={product.name} image={product.image} />
        <div className='content'>
          <a className='name'>{product.name}</a>
          <p className='price'><b>{ currency(product.price) }</b></p>
          <p className='stock text-right'>
            <b>Stocks:</b>
              <span>&nbsp;{ stockTotal(product.stocks) + ' pcs'}</span>
          </p>
        </div>
        <div className='detil'
          dangerouslySetInnerHTML={ {__html: product.detail} }>
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
        <div className='comment-wrapper'>
          <h4>{product.comments.length + ' Comments'}</h4>
          {comments.map((comment, index) => (
            <Comments key={index} comment={comment.content}
              delComment={() => this.removeComment(comment.content)}/>
            )
          )}
        </div>
        <div className='comment-editor'>
          <h4 className='mb-15'>Leave a Comment</h4>
          <form onSubmit={this.sendComment}>
            <textarea ref='comment' placeholder='Write a comment here...'>
            </textarea>
            <button type='submit' className='btn'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  addtoCart: PropTypes.func.isRequired,
}

export default ProductDetail;
