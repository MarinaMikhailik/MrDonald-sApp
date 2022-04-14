import styled from "styled-components";
import { ButtonCheckout } from "../Styles/ButtonCheckout";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { formatCurrency } from "../utils/utils";
import { totalPrice } from "../utils/utils";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";
import { useChoices } from "../Hooks/useChoices";
import { Choices } from "./Choices";
import { Context, ContextModalItem } from "../utils/context";
import { useContext } from "react";
import React from 'react';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: #FFFFFF;
  position: relative;
`;

const Banner = styled.div`
  display: block;
  height: 200px;
  background-image: url(${({img})=>img});
  background-size: cover;
  background-postition: center;
  margin-bottom: 20px;
`;

const DescriptionItem =  styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Pacifico, cursive;
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.section`
  padding-left: 37px;
  padding-right: 37px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  padding: 30px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = () => {
  const {openItem: {openItem, setOpenItem},
    orders: {orders, setOrders}} = useContext(Context);
  const {name, price, img} = openItem;
  const counter = useCount(openItem);
  const topp = useToppings(openItem);
  const choices = useChoices(openItem);

  const isEdit = openItem.index > -1;
  const orderCur = {
    ...openItem,
    count: counter.count,
    chooseToppings: topp.toppings,
    chooseChoice: choices.choice,
  };

  const closeModal=(e)=> {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    } 
  }; 

  const editOrder =() => {
    const newOrders = [...orders];
    newOrders[openItem.index] = orderCur;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder=(e)=>{
     setOrders([...orders, orderCur]);
     setOpenItem(null);
  };

  return (
  <Overlay id="overlay" onClick={closeModal}>    
    <Modal>
      <Banner img = {img}/>
      <Content>     
        <DescriptionItem>
          <div>{name}</div>
          <div>{formatCurrency(price)}</div>
        </DescriptionItem>  
        <ContextModalItem.Provider value={{
          counter,
          topp,
          choices
        }}>             
        <CountItem/>  
        {openItem.toppings && (<Toppings/>)} 
        {openItem.choices && <Choices openItem={openItem}/>}
        <TotalPriceItem>
          <span>Итого:</span>
          <span>{formatCurrency(totalPrice(orderCur))}</span>
        </TotalPriceItem> 
        <ButtonCheckout onClick={isEdit ? editOrder : addToOrder}
        disabled={openItem.choices && !orderCur.chooseChoice}>{isEdit ? "Редактировать" : "Добавить"}</ButtonCheckout>
         </ContextModalItem.Provider>  
      </Content>  
    </Modal>
  </Overlay>
  )
};