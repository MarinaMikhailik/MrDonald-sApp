export const totalPrice = ({price, count}) => price * count;

export const formatCurrency = (price) => price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB'});
