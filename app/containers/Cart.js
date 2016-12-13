import React from 'react';
import { getCart, setCart } from '../api/localstorage.js';
import Loading from 'react-loading-animation';
import currency from '../helpers/currency.js';
import total from '../helpers/total.js';
import CartItem from '../components/CartItem.js';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.checkout = this.checkout.bind(this);
    this.state = {
      allcart: [],
      totalItem: 0,
      isLoading: true
    }
  }

  componentDidMount() {
    var cart = getCart();
    setTimeout(() => {
      this.setState({
        allcart: cart.all,
        totalItem: cart.totalItem,
        isLoading: false,
      });
    }, 1000);
  }

  checkout() {
    let cart = {
      all: [],
      totalItem: 0
    };
    setCart(cart);

    this.setState({
      allcart: [],
      totalItem: 0,
    });
  }

  render() {
    var { allcart, totalItem, isLoading } = this.state;

    if (isLoading) return <div className='loading'><Loading /></div>;

    return (
        <div className="container-mini">
          <div className="cart">
            {allcart.length === 0 ? <h2>You have not bought something yet...</h2> :
              <div>
                <h2>Your Cart Items</h2>
                  <table className="table table-hover checkout">
                    <tbody>
                      <tr>
                        <th className="text-center">No.</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Qty.</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Total</th>
                      </tr>
                      {allcart.map((item, index) => (
                        <CartItem key={index} item={item} index={index}/>
                      ))}
                      <tr>
                        <th colSpan="2">Total</th>
                        <th className="text-center">{totalItem}</th>
                        <th></th>
                        <th className="text-right price">{ currency(total(allcart)) }</th>
                      </tr>
                    </tbody>
                  </table>
                <button onClick={this.checkout} className="btn">Checkout</button>
            </div>}
          </div>
        </div>
    );
  }
};

export default Cart;
