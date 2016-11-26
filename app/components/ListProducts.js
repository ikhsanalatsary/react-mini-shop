import React from 'react';
import Loading from 'react-loading-animation';
import { normalString } from '../helpers/slug.js';
import Products from './Products.js';
import ProductDetail from './ProductDetail.js';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
    };

    this.onLikeClick = this.onLikeClick.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        products: JSON.parse(localStorage.getItem('reactminishop')),
        isLoading: false,
      });
    }, 2000);
  }

  onLikeClick(val) {
    var products = JSON.parse(localStorage.getItem('reactminishop'));
    return products
      .filter(prod => prod.id === val)
      .map(prod => {
        prod.liked ? prod.liked = false : prod.liked = true;
        localStorage.setItem('reactminishop', JSON.stringify(products));
      }) && this.setState({ products });
  }

  deleteComment(val, id) {
    var products = JSON.parse(localStorage.getItem('reactminishop'));
    return products
      .filter(prod => prod.id === id)
      .map(prod => {
        prod.comments = prod.comments.filter(comment => comment.content != val);
        localStorage.setItem('reactminishop', JSON.stringify(products));
      }) && this.setState({ products });
  }

  postComment(val, id) {
    var products = JSON.parse(localStorage.getItem('reactminishop'));
    return products
      .filter(prod => prod.id === id)
      .map(prod => {
        prod.comments = [...prod.comments, {content: val}];
        localStorage.setItem('reactminishop', JSON.stringify(products));
      }) && this.setState({ products });
  }

  render() {
    var { products, isLoading} = this.state;
    var query = this.props.location.query.q;

    if (isLoading) return <div className='loading'><Loading /></div>;

    if (query && query.length > 0) {
      let q = query.trim().toLowerCase();
      products = products.filter(
        prod => prod.name.toLowerCase().match(q)
      );
    }

    if (this.props.params && this.props.params.name) {
      let productName = normalString(this.props.params.name);
      return (
        <div className="container-mini">
          {products.filter(prod => prod.name.match(new RegExp('('+productName+')','ig')))
            .map(product => <ProductDetail key={product.id} product={product} onLike={this.onLikeClick} deleteComment={this.deleteComment} postComment={this.postComment}/>)}
        </div>
      );
    } else if (this.props.params && this.props.params.categoryname) {
      let categoryName = this.props.params.categoryname;
      return (
        <div className="container-mini">
          <p className='result'>{`The Result of Category "${categoryName}"`}</p>
          {products.filter((prod) => prod.categories[prod.categories.length - 1] === categoryName)
            .map(product => <Products key={product.id} product={product} onLike={this.onLikeClick} />)}
        </div>
      );
    } else {
      return (
        <div className='container-mini'>
          {query && <p className='result'>{`The Result of Searching Query "${query}"`}</p>}
          {products.length > 0 ? products.map(product => <Products key={product.id} product={product} onLike={this.onLikeClick} />) :
            <h3 className='not-found text-center'>Sorry... We can't found them :(</h3>}
        </div>
      );
    }

  }
}

export default ListProducts;
