import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import {ListItem} from "./ListItem";

const MenuStyled = styled.main`
  background: #E5E5E5;
`;

const Section = styled.section`
  padding-left: 30px;
`;

export const Menu = () => (
  <MenuStyled>
    <Section>
      <h2>Бургеры</h2>
      <ListItem itemList = {dbMenu.burger}/>
    </Section>
    <Section>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other}/>
    </Section>
  </MenuStyled>
);
