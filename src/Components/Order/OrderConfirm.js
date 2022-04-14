import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { ButtonCheckout } from "../Styles/ButtonCheckout";
import { totalPrice, formatCurrency, projection } from "../utils/utils";
import { Context } from "../utils/context";
import { useContext } from "react";
import { OrderTitle, OrderTotal, TotalPrice } from "../Styles/OrderStyled";

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  marging-bottom: 30px;  
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  chooseChoice: ['chooseChoice', item => item ? item: 'no choices' ],
  chooseToppings: ['chooseToppings', arr => arr.filter(item => item.checked).map(item => item.name), arr => arr.length ? arr : 'no toppings']
}


export const OrderConfirm = ({
  database
}) => {

 const {auth: {authentication},
  orders: {orders,  setOrders},
  orderConfirm: {setOpenOrderConfirm},

} = useContext(Context);

  const sendOrder =()=>{
    const newOrders = orders.map(projection(rulesData));
    database.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrders
    });
    setOrders([]);
    setOpenOrderConfirm(false);
};

  const total = orders.reduce((sum, order)=>(sum +  totalPrice(order)),0);

   const closeOrderConfirm=(e)=> {
    if (e.target.id === "overlay") {
      setOpenOrderConfirm(false);
    } 
  }; 

  return (
    <Overlay id="overlay" onClick = {closeOrderConfirm}>
      <Modal>
        <OrderTitle>{authentication.displayName}          
        </OrderTitle>
        <Text>Осталось только подтвердить Ваш заказ</Text>
        <OrderTotal>
          <span>Итого:</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </OrderTotal>
        <ButtonCheckout onClick={()=> sendOrder()}>Подтвердить</ButtonCheckout>
      </Modal>
    </Overlay>

  )
};