import styled from "styled-components";
import { ButtonCheckout } from "../Styles/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";
import { totalPrice, formatCurrency, projection } from "../utils/utils";
import { Context } from "../utils/context";
import { useContext } from "react";
import { OrderTitle, OrderTotal, TotalPrice } from "../Styles/OrderStyled";


const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 80px;
  width:  380px;
  height: calc(100% - 120px);
  background: #FFFFFF;
  box-shadow: 3px 4px 5px rgba(0,0,0,0.25);
  padding: 20px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`
`;


const EmptyList = styled.p`
  text-align: center;
`;


export const Order = () => {
  const {auth: {authentication, logIn}, openItem: {setOpenItem},
  orders: {orders,
  setOrders},
  orderConfirm: {setOpenOrderConfirm}} = useContext(Context);

  const deleteFromOrder =  (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1)
    setOrders(newOrders);
  }

  const checkOut = () => {
    if (!authentication) {
      logIn();
    } else {
      setOpenOrderConfirm(true);
    };
  } 
  const total = orders.reduce((sum, order)=>(sum +  totalPrice(order)),0);
  const totalCounter = orders.reduce((totalC, {count}) => totalC + count, 0);

 return (
  <OrderStyled>
   <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
   <OrderContent>
       {orders.length ?
        <OrderList> {orders.map((order, index) => <OrderListItem  
          key={order.id} 
          order = {order}
          deleteFromOrder={deleteFromOrder} 
          index={index}
          setOpenItem = {setOpenItem}/>)}</OrderList>
   : <EmptyList>Список закозов пуст</EmptyList> } 
    </OrderContent>    
    { orders.length ? <OrderTotal>
     <span>ИТОГО:</span>
     <span>{totalCounter}</span>
     <TotalPrice>{formatCurrency(total)}</TotalPrice>
   </OrderTotal>: null     
    }
    {orders.length ? <ButtonCheckout onClick={checkOut}>Оформить</ButtonCheckout>: null  
    }   
 </OrderStyled>
  );
};