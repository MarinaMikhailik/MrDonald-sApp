import React from "react";
import styled from "styled-components";
import { AdditionalWrap, AdditionalLabel } from "./AdditionalStyle";
import { useContext } from "react";
import { ContextModalItem } from "../utils/context";

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 5px
`;

export function Choices({openItem}) {
  const {choices: { choice, changeChoices}} = useContext(ContextModalItem);
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