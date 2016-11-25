import React from 'react';

const Cart = () => {
  return (
      <div className="container-mini">
        <div className="cart">
          <div>
            <h2>Your Cart Items</h2>
            <h2>You haven't bought something yet...</h2>
            <table className="table table-hover checkout">
              <tbody>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Qty.</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Total</th>
                </tr>
                <tr>
                  <td className="text-center">1</td>
                  <td className="text-center">Iphone 5 S - black</td>
                  <td className="text-center">2</td>
                  <td className="text-right">9,000,000</td>
                  <td className="text-right">18,000,000</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td className="text-center">Iphone 5 S - silver</td>
                  <td className="text-center">1</td>
                  <td className="text-right">9,000,000</td>
                  <td className="text-right">9,000,000</td>
                </tr>
                <tr>
                  <th colSpan="2">Total</th>
                  <th className="text-center">3</th>
                  <th></th>
                  <th className="text-right">Rp. 27,000,000</th>
                </tr>
              </tbody>
            </table>
            <button className="btn">Checkout</button>
          </div>
        </div>
      </div>
  );
};

export default Cart;
