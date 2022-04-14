import React from "react";
import styled from "styled-components";
//import dbMenu from "../DBMenu";
import { ListItem } from "../Order/ListItem";
import { Loader } from "../Loader";
import { Context } from "../utils/context";
import { useContext } from "react";

const MenuStyled = styled.main`
  background: #E5E5E5;
  margin-left: 420px;
`;

const Section = styled.section`
`;

export const Menu = ( { dbMenu, dbMenuError }) => { 
 //  const resR = useFetch();
 // const dbMenuR= resR.response;

  //const {openItem: {setOpenItem}} = useContext(Context);

  return (
  <MenuStyled>
    { dbMenu ? 
      <> 
        <Section>
          <h2>Бургеры</h2>
          <ListItem 
            itemList = {dbMenu.burger} />
        </Section>
        <Section>
          <h2>Закуски / Напитки</h2>
          <ListItem 
            itemList={dbMenu.other} />
        </Section> 
      </>:
        dbMenuError ? 
        <>Простите, мы фиксим ошбибку...</>        
        :
        <Loader/>    
    }  
  </MenuStyled>
  )
};
/*
   
*/
