import React from "react";
import styled from "styled-components";
import { AdditionalWrap, AdditionalLabel } from "./AdditionalStyle";


const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 5px
`;

export function Choices({ choice, changeChoices, openItem}) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <AdditionalWrap>
 {openItem.choices.map((item, i)=>(<AdditionalLabel key ={i}> 
      <ChoiceRadio type="radio"
      name = "choices"
      checked={choice === item}
      onChange={changeChoices}
      value= {item}
      />
       {item}
    </AdditionalLabel>))}
      </AdditionalWrap>
    </>
  )
}