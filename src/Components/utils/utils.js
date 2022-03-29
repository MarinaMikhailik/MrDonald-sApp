export const totalPrice = ({price, count, toppings}) => {
  const countTopping = toppings ? toppings.filter(item=> item.checked).length : 0;
  console.log('countTopping',countTopping)
  const priceTopping = price * 0.1 * countTopping;

  return (price + priceTopping) * count ;
};

export const formatCurrency = (price) => price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'});
