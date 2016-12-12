import React, { PropTypes } from 'react';
import currency from '../helpers/currency.js';

const CartItem = ({ item, index }) => {
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{item.name + ' - ' + item.color}</td>
      <td className="text-center">{item.amount}</td>
      <td className="text-right price">{currency(item.price)}</td>
      <td className="text-right price">{currency(item.amount * item.price)}</td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default CartItem;
