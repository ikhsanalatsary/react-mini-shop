import React from 'react';
const PropTypes = React.PropTypes;

class Stocks extends React.Component {
  onStockClick(val) {
    this.props.getStock(val)
  }

  render() {
    var stocks = this.props.eachStock;
    return (
      <div className="colors">
        {stocks.map(stocks => (
          <button onClick={() => this.onStockClick(stocks)}
            key={stocks.color} className="btn">
            {stocks.color}<span>{stocks.stock}</span>
          </button>
        ))}
      </div>
    );
  }
}

Stocks.propTypes = {
  eachStock: PropTypes.array.isRequired,
  getStock: PropTypes.func.isRequired,
}

export default Stocks;
