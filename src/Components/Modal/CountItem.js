import React from 'react';
import styled from 'styled-components';
import { useContext } from "react";
import { ContextModalItem } from "../utils/context";

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;

const BtnCount = styled.button`
  background-color: transparent;
  width: 25px;
  `;

export function CountItem() {
    const {counter: {count, setCount, onChange}} = useContext(ContextModalItem);
  return (
  <CountWrapper>
    <span>Количество:</span>
    <div>
      <BtnCount disabled={count <= 1} onClick={()=> setCount(count - 1)}>-</BtnCount>
      <CountInput  type='number' min='1' max='100' value={count<1 ?1:count} onChange={onChange}/>
      <BtnCount onClick={()=> setCount(count + 1)}>+</BtnCount>
    </div>
  </CountWrapper>
 )
}