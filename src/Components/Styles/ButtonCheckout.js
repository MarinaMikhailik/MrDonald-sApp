import styled from "styled-components";

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  background-color: #299B01;
  border-color: transparent;
  font-family: Roboto;
  font-size: 21px;
  text-align: center;
  color: white;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    color: #299B01;
    background-color: #fff;
    border-color: #299B01;
  }
  &:disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }
`;

