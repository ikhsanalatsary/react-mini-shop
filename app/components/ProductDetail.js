import React from 'react';
import currency from '../helpers/currency.js';
import stockTotal from '../helpers/stockTotal.js';
import Stocks from './Stocks.js';
import Comments from './Comments.js';
const PropTypes = React.PropTypes;

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
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
    }
  }

  mount() {
    console.log('hi');
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
    this.setState({
      showStocks: false,
    });
    // Update data stock & push stock to cart
  }

  render() {
    var { product } = this.props;
    var { comments, showStocks } = this.state;
    return (
      <div className='product detil-page'>
        <div className='img'><img src={'./assets/img/' + product.image} /></div>
        <div className='content'>
          <a className='name'>{product.name}</a>
          <p className='price'><b>{ currency(product.price) }</b></p>
          <p className='stock text-right'><b>Stocks:</b><span>&nbsp;{ stockTotal(product.stocks) + ' pcs'}</span></p>
        </div>
        <div className='detil' dangerouslySetInnerHTML={ {__html: product.detail} }></div>
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
              {showStocks ? <button onClick={this.unmount} className="psr btn buy">Choose The Color</button> : <button onClick={this.mount} className='psr btn buy'>Add To Cart</button>}
            </div>
          </div>
        </div>
        <div className='comment-wrapper'>
          <h4>{product.comments.length + ' Comments'}</h4>
          {comments.map(comment => <Comments key={comment.content} comment={comment.content} delComment={() => this.removeComment(comment.content)}/>)}
        </div>
        <div className='comment-editor'>
          <h4 className='mb-15'>Leave a Comment</h4>
          <form onSubmit={this.sendComment}>
            <textarea ref='comment' placeholder='Write a comment here...'></textarea>
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
}

export default ProductDetail;
