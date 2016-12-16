import React from 'react';
import Loading from 'react-loading-animation';
import { find } from 'lodash/collection';
import { getProducts, getCart, setProducts, setCart } from '../api/localstorage.js';
import { normalString } from '../helpers/slug.js';
import Products from '../components/Products.js';
import ProductDetail from '../components/ProductDetail.js';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };

    this.onLikeClick = this.onLikeClick.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.postComment = this.postComment.bind(this);
    this.addtoCart = this.addtoCart.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        products: getProducts(),
        isLoading: false,
      });
    }, 1000);
  }

  onLikeClick(val) {
    var products = this.state.products
    return products
      .filter(prod => prod.id === val)
      .map(prod => {
        prod.liked ? prod.liked = false : prod.liked = true;
        this.updateProduct(products);
      });
  }

  deleteComment(val, id) {
    var products = this.state.products
    return products
      .filter(prod => prod.id === id)
      .map(prod => {
        prod.comments = prod.comments.filter(comment => comment.content != val);
        this.updateProduct(products);
      });
  }

  postComment(val, id) {
    var products = this.state.products
    return products
      .filter(prod => prod.id === id)
      .map(prod => {
        prod.comments = [...prod.comments, {content: val}];
        this.updateProduct(products);
      });
  }

  addtoCart(stock, prod) {
    var cart = getCart();
    let product = {
      name: prod.name,
      color: stock.color,
      price: prod.price,
      amount: 1
    };

    let allCart = cart.all;
    let duplicate = find(allCart, (item) => item.name === product.name && item.color === product.color);
    if (typeof duplicate !== 'undefined') {
      let indexOfDuplicateProduct = allCart.indexOf(duplicate);
      allCart[indexOfDuplicateProduct].amount += 1;
    } else {
      cart.all.push(product);
    }

    cart.totalItem += product.amount;
    this.updateCart(cart);
    this.decreaseStock({ id: prod.id, color: stock.color});
  }

  updateCart(cart) {
    setCart(cart)
  }

  updateProduct(products) {
    setProducts(products);
    this.setState({ products });
  }

  decreaseStock(val) {
    var products = this.state.products
    let theProduct = find(products, (prod) => prod.id === val.id);
    let allStock = theProduct.stocks;
    let findColor = find(allStock, (stock) => stock.color === val.color);
    let indexOfColor = allStock.indexOf(findColor);
    allStock[indexOfColor].stock = findColor.stock - 1;
    this.updateProduct(products);
  }

  render() {
    var { products, isLoading} = this.state;
    var query = this.props.location.query.q;

    if (isLoading) return <div className='loading'><Loading /></div>;

    if (query && query.length > 0) {
      let decodeUri = decodeURIComponent(query);
      let q = decodeUri.trim().toLowerCase();
      products = products.filter(
        prod => prod.name.toLowerCase().match(q)
      );
    }

    if (this.props.params && this.props.params.name) {
      let productName = normalString(this.props.params.name);
      return (
        <div className="container-mini">
          {products.filter(prod => prod.name.match(new RegExp('('+productName+')','ig')))
            .map(product => (
              <ProductDetail key={product.id} product={product}
                onLike={this.onLikeClick} deleteComment={this.deleteComment}
                postComment={this.postComment} addtoCart={this.addtoCart} />
            ))}
        </div>
      );
    } else if (this.props.params && this.props.params.categoryname) {
      let categoryName = this.props.params.categoryname;
      return (
        <div className="container-mini">
          <p className='result'>{`The Result of Category "${categoryName}"`}</p>
          {products.filter(prod => prod.categories[prod.categories.length - 1] === categoryName)
            .map(product => (
              <Products key={product.id} product={product}
                onLike={this.onLikeClick} addtoCart={this.addtoCart} />
            ))}
        </div>
      );
    } else {
      return (
        <div className='container-mini'>
          {query && <p className='result'>{`The Result of Searching Query "${query}"`}</p>}
          {products.length > 0 ? products.map(product => (
            <Products key={product.id} product={product}
              onLike={this.onLikeClick} addtoCart={this.addtoCart} />)) :
            <h3 className='not-found text-center'>Sorry... We can not found them :(</h3>}
        </div>
      );
    }

  }
}

export default ListProducts;
