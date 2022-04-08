export const totalPrice = ({price, count, toppings}) => {
  const countTopping = toppings ? toppings.filter(item=> item.checked).length : 0;
  const priceTopping = price * 0.1 * countTopping;
  return (price + priceTopping) * count ;
};

export const formatCurrency = (price) => price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'});


export const projection = rules => {
  const keys = Object.keys(rules);
  return obj => keys.reduce((newObj, key) =>{
    newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val): obj[fn]), null)
    return newObj;
  }, {});
}




