import React from 'react';
const PropTypes = React.PropTypes;

class Stocks extends React.Component {
  constructor() {
    super();
  }

  onStockClick(val) {
    // console.log(val);
    this.props.getStock(val)
  }

  render() {
    var stocks = this.props.eachStock;
    return (
      <div className="colors">
        {stocks.map(stocks => {
          return <button onClick={() => this.onStockClick(stocks)} key={stocks.color} className="btn">{stocks.color}<span>{stocks.stock}</span></button>
        })}
      </div>
    );
  }
}

Stocks.propTypes = {
  eachStock: PropTypes.array,
  getStock: PropTypes.func,
}

export default Stocks;
