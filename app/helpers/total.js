export default function total(val) {
  return val.reduce((acc, item) => { return acc + (item.amount * item.price) }, 0);
}
