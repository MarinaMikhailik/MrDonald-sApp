import styled from "styled-components";
import { useContext } from "react";
import { ContextModalItem } from "../utils/context";

const ToppingWrap = styled.div`
  column-count: 2;
  max-width: 500px;
  margin: 0 auto;
  column-gap: 35px;
`;

const ToppingLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;

export function Toppings(){
  const {topp: {toppings, checkToppings}} = useContext(ContextModalItem);
  return (
    <><h3>Добавки:</h3>
    <ToppingWrap>
    {toppings.map((topping, i)=>(<ToppingLabel key ={i}> 
      <ToppingCheckbox type="checkbox"
      checked={topping.checked}
      onChange={()=> checkToppings(i)}
      />
       {topping.name}
    </ToppingLabel>))}
    </ToppingWrap>
    </>)
};