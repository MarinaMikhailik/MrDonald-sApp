import styled from "styled-components";
import { formatCurrency } from "../utils/utils";
import { Context } from "../utils/context";
import { useContext } from "react";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ItemStyled = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({img})=>`url(${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0,0,0,1);
    &:after {
      opacity: 0;
    }
  }

`;

export const ListItem = ({itemList}) => {
  const {openItem: {setOpenItem}} = useContext(Context);
  return (
  <List>
    {itemList.map(item=>(
      <ItemStyled 
        key={item.id}
        img={item.img}
        onClick = {() => setOpenItem(item)}
      >
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
        </ItemStyled>
    ))}
  </List>
)
} ;