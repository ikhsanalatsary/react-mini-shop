import React from 'react';
import Products from './Products.js';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: JSON.parse(localStorage.getItem('reactminishop')),
    });
  }

  render() {
    var lists = this.state.products;
    return(
      <div className='container-mini'>
        <div>
        {lists.map(product => {
          return <Products key={product.id} product={product} />
        })}
      </div>
    </div>
    );
  }
}

export default ListProducts;
