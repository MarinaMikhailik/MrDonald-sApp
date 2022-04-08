import styled from "styled-components";
import react from "react";

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

export function Toppings({ toppings, checkToppings}){
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