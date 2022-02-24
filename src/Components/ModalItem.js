import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
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

const BtnAdd = styled.button`
  position: absolute;
  width: 250px;
  height: 65px;
  background-color: #299B01;
  border: none;
  font-family: Roboto;
  font-size: 21px;
  text-align: center;
  color: white;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1001;
  bottom: 43px;
`;

const DescriptionItem =  styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Pacifico;
  font-size: 30px;
  padding-left: 37px;
  padding-right: 37px;
`;

export const ModalItem = ({openItem, setOpenItem}) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    } 
  }  
  if (!openItem) return null;
  const {name, price, img} = openItem;
  return (
  <Overlay id="overlay" onClick={closeModal}>    
    <Modal>
      <Banner img = {img}/>
        <DescriptionItem>
          <p>{name}</p>
          <p>{price.toLocaleString('ru-RU', {style: 'currency',currency: 'RUB'})}</p>
        </DescriptionItem>      
        <BtnAdd>Добавить</BtnAdd>    
        </Modal>
  </Overlay>
  )
};