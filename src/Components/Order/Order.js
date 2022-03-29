import styled from "styled-components";
import { ButtonCheckout } from "../Styles/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";
import { totalPrice, formatCurrency } from "../utils/utils";

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

const OrderTitle = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`
`;

const OrderTotal = styled.div`
  display: flex;
  margin: 0 35px 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;  

const EmptyList = styled.p`
  text-align: center;
`;



export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn }) => {

const deleteFromOrder =  (index) => {
   const newOrders = [...orders];
   newOrders.splice(index, 1)
   setOrders(newOrders);
}

const checkOut = () => {
  if (!authentication) {
    logIn();
  };
  console.log("Login is sucessfull! Set order!");
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
   <OrderTotal>
     <span>ИТОГО:</span>
     <span>{totalCounter}</span>
     <TotalPrice>{formatCurrency(total)}</TotalPrice>
   </OrderTotal>
   <ButtonCheckout onClick={checkOut}>Оформить</ButtonCheckout>
 </OrderStyled>
  );
};