import React from 'react';
import ProductDetail from './ProductDetail.js';
import { normalString } from '../helpers/slug.js';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.onLikeClick = this.onLikeClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: JSON.parse(localStorage.getItem('reactminishop')),
    })
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

  render() {
    var { products } = this.state;
    var productName = normalString(this.props.params.name);
    return (
      <div className="container-mini">
        {products.filter((prod) => { return prod.name === productName }).map((product) => {
          return <ProductDetail key={product.id} product={product} onLike={this.onLikeClick} />
        })}
      </div>
    );
  }
}

export default Product;
