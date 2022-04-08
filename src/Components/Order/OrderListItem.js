import styled from "styled-components";
import trashImg from "../../images/trash.svg";
import { formatCurrency } from "../utils/utils";
import { useRef } from "react";

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
   margin: 15px 15px;
`;

const MainInfo= styled.div`
   display: flex;
   cursor: pointer;
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

const Additional = styled.div`
  color: #9A9A9A;  
  font-size: 14px;
`;

export const OrderListItem = ({order, deleteFromOrder, index, setOpenItem}) => {
  
  const {name, price,  count, chooseToppings, chooseChoice} = order;

  const checkedAdd = chooseToppings.filter(item=>item.checked)
  .map(item=>item.name)
  .join(', ')
  .toLowerCase();

  const refDeleteButton = useRef(null);

  return (<OrderItem>
    <MainInfo onClick={(e)=> e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
      <ItemName>{name} {chooseChoice}</ItemName>
      <span>{count}</span>
      <ItemPrice>{formatCurrency(price)}</ItemPrice>
      <TrashBtn  ref={refDeleteButton}
      onClick = {(event) => {
       deleteFromOrder(index)}}/> 
     </MainInfo>
     {chooseToppings && <Additional>{checkedAdd}</Additional>}  
   </OrderItem>
 );
};