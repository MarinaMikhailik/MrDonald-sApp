import styled from "styled-components";
import logo from '../../images/logo.svg';
import sign from '../../images/sign.svg';

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

function signHandle(){
  alert("Here will be handle for action Sign!")
}
export const NavBar = () => (
  <NavBarStyled>
    <LogoStyled>
      <ImgLogo src={logo} alt="logo"/>
      <H1>Mr Donald's</H1>
    </LogoStyled>
    <SignStyled onClick={signHandle}>
      <SignImg src={sign} alt="Sign"/>
      <SignText>Войти</SignText>
    </SignStyled>
  </NavBarStyled>
);