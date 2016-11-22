import React from 'react';
import Products from './Products.js';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.onLikeClick = this.onLikeClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        products: JSON.parse(localStorage.getItem('reactminishop')),
      });
    }, 1000);
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
    var lists = this.state.products;
    return(
      <div className='container-mini'>
        <div>
        {lists.map(product => {
          return <Products key={product.id} product={product} onLike={this.onLikeClick} />
        })}
      </div>
    </div>
    );
  }
}

export default ListProducts;
