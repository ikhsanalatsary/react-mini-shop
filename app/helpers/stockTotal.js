export default function stockTotal(val) {
  return val.reduce((acumulator, stocks) => { return acumulator + stocks.stock }, 0);
}
