import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import {ListItem} from "../Order/ListItem";

const MenuStyled = styled.main`
  background: #E5E5E5;
  margin-left: 420px;
`;

const Section = styled.section`
`;

export const Menu = ({setOpenItem}) => (
  <MenuStyled>
    <Section>
      <h2>Бургеры</h2>
      <ListItem 
        itemList = {dbMenu.burger}
        setOpenItem = {setOpenItem}
      />
    </Section>
    <Section>
      <h2>Закуски / Напитки</h2>
      <ListItem 
        itemList={dbMenu.other}
        setOpenItem = {setOpenItem}/>
    </Section>
  </MenuStyled>
);
