import styled from "styled-components";
import trashImg from "../../images/trash.svg";

const TrashBtn = styled.div`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const OrderItem = styled.div`
   display: flex;
   margin: 15px 15px;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
  
`;

export const OrderListItem = ({name, price}) => (
   <OrderItem>
     <ItemName>{name}</ItemName>
     <span>1</span>
     <ItemPrice>{price.toLocaleString('ru-RU', {style: 'currency',currency: 'RUB'})}</ItemPrice>
     <TrashBtn></TrashBtn>
   </OrderItem>
);