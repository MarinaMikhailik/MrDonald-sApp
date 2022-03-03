import styled from "styled-components";
import { ButtonCheckout } from "../Styles/ButtonCheckout";

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

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

  const closeModal=(e)=> {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    } 
  }; 

  const addToOrder=(e)=>{
     setOrders([...orders, openItem]);
     setOpenItem(null);
  };


  const {name, price, img} = openItem;


  return (
  <Overlay id="overlay" onClick={closeModal}>    
    <Modal>
      <Banner img = {img}/>
      <Content>     
        <DescriptionItem>
          <div>{name}</div>
          <div>{price.toLocaleString('ru-RU', {style: 'currency',currency: 'RUB'})}</div>
        </DescriptionItem>      
        <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
      </Content>  
    </Modal>
  </Overlay>
  )
};