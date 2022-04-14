import styled from "styled-components";

export const OrderTitle = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 30px;
`;

export const OrderTotal = styled.div`
  display: flex;
  margin: 0 35px 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }`;

  export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`; 