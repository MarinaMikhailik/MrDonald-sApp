import styled from "styled-components";
import logo from '../../images/logo.svg';
import sign from '../../images/sign.svg';
import { Context } from "../utils/context";
import { useContext } from "react";

const NavBarStyled = styled.header`
  background-color: #299B01;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const LogoStyled = styled.div`
    display: flex;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
 display: flex;
 align-item: center;
`;

const SignStyled = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: white;
  font-size: 16px;
  text-align: center;
  display: block;
  margin-right: 3%;
`;

const SignImg = styled.img`
`;

const SignText = styled.div`
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 70px;
  cursor: pointer;
  margin-right: 30px;
`;

const Figure = styled.figure`
  margin: 0 30px;
`

export const NavBar = ( ) => {

  const {auth: {authentication, logIn, logOut}} = useContext(Context);

  return (
  <NavBarStyled>
    <LogoStyled>
      <ImgLogo src={logo} alt="logo"/>
      <H1>Mr Donald's</H1>
    </LogoStyled>
   {authentication ?
      <User>
        <Figure>
          <img src={sign} alt={authentication.displayName}/>
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <LogOut title="Выйти" onClick={logOut} >X</LogOut>
      </User> :
      <SignStyled onClick={logIn}>
        <SignImg src={sign} alt="Sign"/>
        <SignText>Войти</SignText>
      </SignStyled> } 
  </NavBarStyled>
)
};